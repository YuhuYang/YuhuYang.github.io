(() => {
  const entries = [
    { url: 'index.html', zh: '首页', en: 'Home', kw: '首页 研究方向 导航 语言 数据 认知' },
    { url: 'about.html', zh: '个人信息', en: 'Profile', kw: '个人信息 研究兴趣 学术网络 师承 Erdos 合作者 刘海涛' },
    { url: 'publications.html', zh: '论文发表', en: 'Publications', kw: '论文 发表 检索 句法 计量 QuanSyn 兼类 动名 依存 词类 二语 复杂网络 语言规划 语言演化' },
    { url: 'conferences.html', zh: '会议与展示', en: 'Conferences and Talks', kw: '会议 报告 展示 研讨会 论坛 QuantLing QuanSyn 金华 杭州 南京 上海 威海 浙江师范大学 浙江大学 复旦大学 北京语言大学 山东大学' },
    { url: 'software.html', zh: '软件', en: 'Software', kw: '软件 QuanSyn Python package Studio PyPI README Releases 下载 引用 句法计量 依存句法 CoNLL-U treebank 句法树 网络分析 可视化 depval lingnet lawfitter' },
    { url: 'universals.html', zh: '博客', en: 'Blog', kw: '博客 文章 随笔 札记 语言学 方法' },
    { url: 'contact.html', zh: '联系', en: 'Contact', kw: '联系 邮箱 办公室 合作 留言 浙江大学 紫金港' },
  ];

  function langNow() {
    return document.documentElement.lang.startsWith('en') ? 'en' : 'zh';
  }

  function norm(s) {
    return (s || '').toLowerCase().trim();
  }

  function score(entry, q) {
    const qn = norm(q);
    if (!qn) return 0;
    let s = 0;
    const zh = norm(entry.zh);
    const en = norm(entry.en);
    const kw = norm(entry.kw);
    if (zh.includes(qn)) s += 4;
    if (en.includes(qn)) s += 4;
    if (kw.includes(qn)) s += 2;
    return s;
  }

  function renderSearchPage() {
    const resultBox = document.getElementById('search-results');
    if (!resultBox) return;

    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const qEl = document.getElementById('search-query');
    if (qEl) qEl.textContent = q;

    const lang = langNow();
    const results = entries
      .map((e) => ({ e, s: score(e, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.e);

    resultBox.innerHTML = '';
    if (!q.trim() || results.length === 0) {
      const p = document.createElement('p');
      p.className = 'small-muted';
      p.setAttribute('data-i18n', 'search_no_result');
      p.textContent = lang === 'en' ? 'No matching results.' : '未找到相关结果。';
      resultBox.appendChild(p);
      return;
    }

    results.forEach((item) => {
      const div = document.createElement('article');
      div.className = 'search-result-item';
      const title = document.createElement('h3');
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = lang === 'en' ? item.en : item.zh;
      title.appendChild(a);
      const p = document.createElement('p');
      p.textContent = item.kw;
      div.appendChild(title);
      div.appendChild(p);
      resultBox.appendChild(div);
    });
  }

  window.addEventListener('languagechange', () => {
    renderSearchPage();
  });
  renderSearchPage();
})();
