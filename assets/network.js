(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.id = 'network-canvas';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const pointer = { x: -9999, y: -9999, active: false };
  const nodes = [];
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let raf = 0;

  let nodeColor = 'rgba(153, 230, 255, 0.9)';
  let lineColor = 'rgba(104, 197, 255, 0.3)';
  let accentColor = 'rgba(89, 244, 200, 0.35)';

  function pullVar(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function refreshPalette() {
    nodeColor = pullVar('--network-node', nodeColor);
    lineColor = pullVar('--network-line', lineColor);
    accentColor = pullVar('--network-accent', accentColor);
  }

  function nodeCountForViewport() {
    const area = width * height;
    if (area > 1800000) return 126;
    if (area > 1100000) return 98;
    if (area > 700000) return 80;
    return 62;
  }

  function createNode() {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x,
      y,
      homeX: x,
      homeY: y,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 1.2 + Math.random() * 1.9,
      phase: Math.random() * Math.PI * 2,
    };
  }

  function rebuildNodes() {
    nodes.length = 0;
    const total = nodeCountForViewport();
    for (let i = 0; i < total; i += 1) {
      nodes.push(createNode());
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    rebuildNodes();
  }

  function drawBackgroundGlow() {
    const glow = ctx.createRadialGradient(
      pointer.active ? pointer.x : width * 0.65,
      pointer.active ? pointer.y : height * 0.35,
      8,
      width * 0.5,
      height * 0.5,
      Math.max(width, height) * 0.8
    );

    glow.addColorStop(0, accentColor.replace(/\d?\.?\d+\)$/g, '0.16)'));
    glow.addColorStop(0.4, lineColor.replace(/\d?\.?\d+\)$/g, '0.07)'));
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);
  }

  function explodeAt(x, y) {
    const radius = 240;
    const radiusSq = radius * radius;

    for (let i = 0; i < nodes.length; i += 1) {
      const n = nodes[i];
      const dx = n.x - x;
      const dy = n.y - y;
      const distSq = dx * dx + dy * dy;
      if (distSq < radiusSq) {
        const dist = Math.sqrt(distSq) || 1;
        const strength = (1 - dist / radius) * 2.8;
        n.vx += (dx / dist) * strength;
        n.vy += (dy / dist) * strength;
      }
    }
  }

  function stepNodes(time) {
    const t = time || 0;
    const flowX = Math.sin(t * 0.00022) * 0.013;
    const flowY = -0.028 + Math.cos(t * 0.00018) * 0.004;
    const vortexX = width * (0.5 + Math.sin(t * 0.00011) * 0.22);
    const vortexY = height * (0.5 + Math.cos(t * 0.00013) * 0.22);

    for (let i = 0; i < nodes.length; i += 1) {
      const n = nodes[i];

      const wobble = Math.sin(t * 0.0007 + n.phase) * 0.22;
      n.homeX += (Math.random() - 0.5) * 0.8 + wobble * 0.09;
      n.homeY += (Math.random() - 0.5) * 0.8 - wobble * 0.09 - 0.42;

      if (n.homeX < 0) n.homeX = width;
      if (n.homeX > width) n.homeX = 0;
      if (n.homeY < 0) n.homeY = height;
      if (n.homeY > height) n.homeY = 0;

      const dxHome = n.homeX - n.x;
      const dyHome = n.homeY - n.y;
      n.vx += dxHome * 0.0012;
      n.vy += dyHome * 0.0012;

      n.vx += flowX;
      n.vy += flowY;
      n.vy -= 0.02;

      const vx = n.x - vortexX;
      const vy = n.y - vortexY;
      const dist = Math.max(24, Math.hypot(vx, vy));
      const swirl = Math.min(0.04, 9 / dist);
      n.vx += (-vy / dist) * swirl;
      n.vy += (vx / dist) * swirl;

      if (pointer.active) {
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const distSq = dx * dx + dy * dy;
        const forceRadius = 210;
        if (distSq < forceRadius * forceRadius) {
          const dist = Math.sqrt(distSq) || 1;
          const pull = (1 - dist / forceRadius) * 0.018;
          n.vx += (dx / dist) * pull;
          n.vy += (dy / dist) * pull;
        }
      }

      n.vx += (Math.random() - 0.5) * 0.016;
      n.vy += (Math.random() - 0.5) * 0.016;

      n.vx *= 0.978;
      n.vy *= 0.978;

      const maxSpeed = 1.55;
      n.vx = Math.max(-maxSpeed, Math.min(maxSpeed, n.vx));
      n.vy = Math.max(-maxSpeed, Math.min(maxSpeed, n.vy));

      n.x += n.vx;
      n.y += n.vy;

      if (n.x < -24) n.x = width + 24;
      if (n.x > width + 24) n.x = -24;
      if (n.y < -24) n.y = height + 24;
      if (n.y > height + 24) n.y = -24;

      ctx.beginPath();
      ctx.fillStyle = nodeColor;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawLinks() {
    const threshold = 160;
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist < threshold) {
          const alpha = (1 - dist / threshold) * 0.5;
          ctx.strokeStyle = lineColor.replace(/\d?\.?\d+\)$/g, `${alpha.toFixed(3)})`);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (pointer.active) {
        const dx = a.x - pointer.x;
        const dy = a.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.42;
          ctx.strokeStyle = accentColor.replace(/\d?\.?\d+\)$/g, `${alpha.toFixed(3)})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }
  }

  function frame(time) {
    ctx.clearRect(0, 0, width, height);
    drawBackgroundGlow();
    drawLinks();
    stepNodes(time || 0);
    raf = requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  });
  window.addEventListener('touchmove', (e) => {
    if (!e.touches[0]) return;
    pointer.x = e.touches[0].clientX;
    pointer.y = e.touches[0].clientY;
    pointer.active = true;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    pointer.active = false;
  });
  window.addEventListener('touchend', () => {
    pointer.active = false;
  }, { passive: true });
  window.addEventListener('click', (e) => {
    explodeAt(e.clientX, e.clientY);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      raf = requestAnimationFrame(frame);
    }
  });

  refreshPalette();
  resize();
  raf = requestAnimationFrame(frame);
})();


