(() => {
  const canvas = document.getElementById('academic-network-graph');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const collaboratorLinks = {
    'Haitao Liu': 'https://faculty.fudan.edu.cn/lht/zh_CN/index.htm',
  };

  const publicationAuthors = [
    ['Yang Mu', 'Haitao Liu'],
    ['Yang Mu', 'Haitao Liu'],
    ['Yang Mu', 'Haitao Liu'],
    ['Yang Mu', 'Tsy Yih', 'Yiran Yang', 'Haitao Liu', 'Lihe Huang'],
    ['Yang Mu', 'Kexin Yang', 'Huibin Zhuang'],
    ['Yang Mu', 'Haitao Liu'],
    ['Yang Mu', 'Kexin Yang', 'Huibin Zhuang'],
    ['Yang Mu', 'Cai Yansheng'],
    ['Yang Mu', 'Haitao Liu'],
  ];

  const nodesByName = new Map();
  const edges = new Map();
  const nodes = [];
  let hoveredNode = null;
  let draggingNode = null;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let dragMoved = false;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let raf = 0;

  function edgeKey(a, b) {
    return a < b ? `${a}__${b}` : `${b}__${a}`;
  }

  function buildGraph() {
    publicationAuthors.forEach((authors) => {
      authors.forEach((name) => {
        if (!nodesByName.has(name)) {
          const node = {
            name,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            radius: name === 'Yang Mu' ? 13 : 10,
            degree: 0,
            link: collaboratorLinks[name] || null,
          };
          nodesByName.set(name, node);
          nodes.push(node);
        }
      });

      for (let i = 0; i < authors.length; i += 1) {
        for (let j = i + 1; j < authors.length; j += 1) {
          const a = authors[i];
          const b = authors[j];
          const key = edgeKey(a, b);
          edges.set(key, (edges.get(key) || 0) + 1);
        }
      }
    });

    edges.forEach((weight, key) => {
      const [a, b] = key.split('__');
      const na = nodesByName.get(a);
      const nb = nodesByName.get(b);
      if (!na || !nb) return;
      na.degree += weight;
      nb.degree += weight;
    });
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(360, Math.floor(rect.width));
    height = Math.max(280, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    nodes.forEach((n, idx) => {
      const angle = (idx / nodes.length) * Math.PI * 2;
      const baseR = Math.min(width, height) * 0.34;
      n.x = width * 0.5 + Math.cos(angle) * baseR;
      n.y = height * 0.5 + Math.sin(angle) * baseR;
      n.vx = 0;
      n.vy = 0;
    });
  }

  function simulate() {
    const centerX = width * 0.5;
    const centerY = height * 0.52;
    const t = performance.now() * 0.001;

    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];

      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const repulse = 220 / (dist * dist);
        const rx = (dx / dist) * repulse;
        const ry = (dy / dist) * repulse;
        a.vx -= rx;
        a.vy -= ry;
        b.vx += rx;
        b.vy += ry;

        const w = edges.get(edgeKey(a.name, b.name));
        if (w) {
          const target = 78 - Math.min(20, w * 6);
          const pull = (dist - target) * 0.0017;
          const px = (dx / dist) * pull;
          const py = (dy / dist) * pull;
          a.vx += px;
          a.vy += py;
          b.vx -= px;
          b.vy -= py;
        }
      }

      a.vx += (centerX - a.x) * 0.0009;
      a.vy += (centerY - a.y) * 0.0009;

      // Keep the graph alive with tiny deterministic drift so it never freezes.
      const phase = t + i * 0.73;
      a.vx += Math.cos(phase) * 0.006;
      a.vy += Math.sin(phase * 1.07) * 0.006;

      a.vx *= 0.92;
      a.vy *= 0.92;
      a.x += a.vx;
      a.y += a.vy;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    edges.forEach((weight, key) => {
      const [aName, bName] = key.split('__');
      const a = nodesByName.get(aName);
      const b = nodesByName.get(bName);
      if (!a || !b) return;
      ctx.strokeStyle = `rgba(104, 197, 255, ${Math.min(0.75, 0.24 + weight * 0.16)})`;
      ctx.lineWidth = 1 + Math.min(2, weight * 0.8);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    });

    nodes.forEach((n) => {
      const isCenter = n.name === 'Yang Mu';
      const isHovered = hoveredNode && hoveredNode.name === n.name;
      ctx.fillStyle = isCenter
        ? 'rgba(89, 244, 200, 0.96)'
        : isHovered
          ? 'rgba(255, 220, 120, 0.96)'
          : 'rgba(153, 230, 255, 0.95)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius + (isHovered ? 1.6 : 0), 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#eaf1ff';
      ctx.font = '12px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(n.name, n.x, n.y - n.radius - 8);
    });

    const centerName = 'Yang Mu';
    let centerDegree = 0;
    edges.forEach((_w, key) => {
      const [a, b] = key.split('__');
      if (a === centerName || b === centerName) {
        centerDegree += 1;
      }
    });
    const statsText = `N=${nodes.length}， E=${edges.size}， K(MY)=${centerDegree}`;

    ctx.fillStyle = 'rgba(8, 18, 42, 0.65)';
    ctx.fillRect(12, height - 34, 380, 22);
    ctx.fillStyle = '#d8eeff';
    ctx.font = '12px "Segoe UI", sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(statsText, 18, height - 23);
  }

  function pickNode(x, y) {
    for (let i = nodes.length - 1; i >= 0; i -= 1) {
      const n = nodes[i];
      const dx = x - n.x;
      const dy = y - n.y;
      if (Math.hypot(dx, dy) <= n.radius + 5) return n;
    }
    return null;
  }

  function frame() {
    simulate();
    draw();
    raf = requestAnimationFrame(frame);
  }

  function pointerPos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function updateDragPosition(e) {
    if (!draggingNode) return;
    const p = pointerPos(e);
    const nx = p.x - dragOffsetX;
    const ny = p.y - dragOffsetY;
    if (Math.hypot(nx - draggingNode.x, ny - draggingNode.y) > 1.2) {
      dragMoved = true;
    }
    draggingNode.x = nx;
    draggingNode.y = ny;
    draggingNode.vx = 0;
    draggingNode.vy = 0;
  }

  canvas.addEventListener('pointerdown', (e) => {
    const p = pointerPos(e);
    const node = pickNode(p.x, p.y);
    if (!node) return;
    draggingNode = node;
    dragOffsetX = p.x - node.x;
    dragOffsetY = p.y - node.y;
    dragMoved = false;
    canvas.style.cursor = 'grabbing';
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    updateDragPosition(e);
  });

  canvas.addEventListener('pointerup', (e) => {
    if (draggingNode) {
      draggingNode = null;
      canvas.style.cursor = hoveredNode && hoveredNode.link ? 'pointer' : 'default';
    }
    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
  });

  canvas.addEventListener('pointercancel', (e) => {
    draggingNode = null;
    canvas.style.cursor = hoveredNode && hoveredNode.link ? 'pointer' : 'default';
    if (canvas.hasPointerCapture(e.pointerId)) {
      canvas.releasePointerCapture(e.pointerId);
    }
  });

  canvas.addEventListener('mousemove', (e) => {
    if (draggingNode) return;
    const p = pointerPos(e);
    hoveredNode = pickNode(p.x, p.y);
    canvas.style.cursor = hoveredNode && hoveredNode.link ? 'pointer' : 'default';
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    canvas.style.cursor = 'default';
  });

  canvas.addEventListener('click', (e) => {
    if (draggingNode || dragMoved) {
      dragMoved = false;
      return;
    }
    const p = pointerPos(e);
    const node = pickNode(p.x, p.y);
    if (node && node.link) {
      window.open(node.link, '_blank', 'noopener,noreferrer');
    }
  });

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      raf = requestAnimationFrame(frame);
    }
  });

  buildGraph();
  resize();
  raf = requestAnimationFrame(frame);
})();

