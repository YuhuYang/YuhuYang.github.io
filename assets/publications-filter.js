(() => {
  const form = document.getElementById('pub-filter-form');
  const resultList = document.getElementById('pub-result-list');
  const resultCount = document.getElementById('pub-result-count');
  if (!form || !resultList || !resultCount) return;

  const typeEl = document.getElementById('filter-language');
  const domainEl = document.getElementById('filter-domain');
  const yearEl = document.getElementById('filter-year');
  const collabEl = document.getElementById('filter-collab');
  const resetBtn = document.getElementById('pub-reset-btn');

  const papers = [
    {
      title: {
        zh: 'Social Centrality Differentiation Shapes the Dynamics of Linguistic Diffusion',
        en: 'Social Centrality Differentiation Shapes the Dynamics of Linguistic Diffusion',
      },
      authors: { zh: ['Mu Yang', 'Haitao Liu'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: { zh: 'Journal of Language Evolution, accepted', en: 'Journal of Language Evolution, accepted' },
      year: 2026,
      link: 'publications/Social Centrality Differentiation Shapes the Dynamics of Linguistic Diffusion.pdf',
      type: 'article',
      domains: ['lang-evolution', 'complex-network'],
      indices: ['ESCI'],
      collaborators: { zh: ['Haitao Liu'], en: ['Haitao Liu'] },
    },
    {
      title: {
        zh: '词类习得中的动名词类效应研究',
        en: 'The Verb-Noun Effect in the Second Language Acquisition of Word Class',
      },
      authors: { zh: ['杨牧', '刘海涛'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: { zh: '现代外语', en: 'Modern Foreign Languages' },
      year: 2026,
      link: 'publications/词类习得中的动名词类效应研究_杨牧.pdf',
      type: 'article',
      domains: ['sla', 'word-class'],
      indices: ['CSSCI'],
      collaborators: { zh: ['刘海涛'], en: ['Haitao Liu'] },
    },
    {
      title: {
        zh: '从语言共同体到文化共同体再到中华民族共同体的演进',
        en: 'A Study of the Evolution from a Linguistic Community to a Cultural Community and then to the Community of the Chinese Nation',
      },
      authors: { zh: ['杨牧', '刘海涛'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: {
        zh: '云南师范大学学报(哲学社会科学版)',
        en: 'Journal of Yunnan Normal University (Philosophy and Social Sciences Edition)',
      },
      year: 2025,
      link: 'publications/从语言共同体到文化共同体再到中华民族共同体的演进_杨牧.pdf',
      type: 'article',
      domains: ['lang-planning'],
      indices: ['CSSCI'],
      collaborators: { zh: ['刘海涛'], en: ['Haitao Liu'] },
    },
    {
      title: {
        zh: '数据驱动的汉语动名兼类探索',
        en: 'Toward a Data-Driven Exploration of Verbo-Nominal Ambiguity in Chinese',
      },
      authors: { zh: ['杨牧', '刘海涛'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: { zh: '语言文字应用', en: 'Applied Linguistics' },
      year: 2025,
      link: 'publications/数据驱动的汉语动名兼类探索_杨牧.pdf',
      type: 'article',
      domains: ['word-class', 'dep-syntax'],
      indices: ['CSSCI'],
      collaborators: { zh: ['刘海涛'], en: ['Haitao Liu'] },
    },
    {
      title: {
        zh: 'Identifying novel linguistic biomarkers of mild cognitive impairment in Mandarin-speaking older adults: A quantitative syntactic approach',
        en: 'Identifying novel linguistic biomarkers of mild cognitive impairment in Mandarin-speaking older adults: A quantitative syntactic approach',
      },
      authors: {
        zh: ['Tsy Yih', 'Yiran Yang', 'Mu Yang', 'Haitao Liu', 'Lihe Huang'],
        en: ['Tsy Yih', 'Yiran Yang', 'Mu Yang', 'Haitao Liu', 'Lihe Huang'],
      },
      venue: { zh: 'Clinical Linguistics & Phonetics', en: 'Clinical Linguistics & Phonetics' },
      year: 2025,
      link: 'publications/Identifying novel linguistic biomarkers of mild cognitive impairment in Mandarin-speaking older adults  A quantitative syntactic approach.pdf',
      type: 'article',
      domains: ['dep-syntax', 'sla'],
      indices: ['SSCI'],
      collaborators: {
        zh: ['Tsy Yih', 'Yiran Yang', 'Haitao Liu', 'Lihe Huang'],
        en: ['Tsy Yih', 'Yiran Yang', 'Haitao Liu', 'Lihe Huang'],
      },
    },
    {
      title: {
        zh: 'Statistical Properties and Community Detection Study of Modern Chinese Synonym Networks',
        en: 'Statistical Properties and Community Detection Study of Modern Chinese Synonym Networks',
      },
      authors: { zh: ['杨苛鑫', '庄会彬', '杨牧'], en: ['Kexin Yang', 'Huibin Zhuang', 'Mu Yang'] },
      venue: { zh: '章节论文', en: 'Book Chapter' },
      year: 2025,
      link: 'publications/978-981-96-3509-2_Extract.pdf',
      type: 'chapter',
      domains: ['complex-network', 'word-class'],
      indices: ['EI'],
      collaborators: { zh: ['杨苛鑫', '庄会彬'], en: ['Kexin Yang', 'Huibin Zhuang'] },
    },
    {
      title: {
        zh: 'QuanSyn: A Package for Quantitative Syntax Analysis',
        en: 'QuanSyn: A Package for Quantitative Syntax Analysis',
      },
      authors: { zh: ['杨牧', '刘海涛'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: { zh: 'Journal of Quantitative Linguistics', en: 'Journal of Quantitative Linguistics' },
      year: 2025,
      link: 'publications/QuanSyn  A Package for Quantitative Syntax Analysis.pdf',
      type: 'report',
      domains: ['dep-syntax', 'complex-network'],
      indices: ['SSCI'],
      collaborators: { zh: ['刘海涛'], en: ['Haitao Liu'] },
    },
    {
      title: {
        zh: '基于Word2vec的二语教学“基本形式库”构建方法初探',
        en: 'Construction of a “Basic Form Corpus” for TCSOL Based on Word2vec',
      },
      authors: { zh: ['杨苛鑫', '庄会彬', '杨牧'], en: ['Kexin Yang', 'Huibin Zhuang', 'Mu Yang'] },
      venue: { zh: '国际汉语教学研究', en: 'International Chinese Language Education' },
      year: 2024,
      link: 'publications/基于Word2vec的二语教学“基本形式库”构建方法初探_杨苛鑫.pdf',
      type: 'article',
      domains: ['sla', 'word-class'],
      indices: [],
      collaborators: { zh: ['杨苛鑫', '庄会彬'], en: ['Kexin Yang', 'Huibin Zhuang'] },
    },
    {
      title: {
        zh: '依存句法分析的回顾与发展',
        en: 'Review and Development of Dependency Parsing',
      },
      authors: { zh: ['杨牧', '蔡言胜'], en: ['Mu Yang', 'Cai Yansheng'] },
      venue: { zh: '现代语文', en: 'Modern Chinese' },
      year: 2022,
      link: 'publications/依存句法分析的回顾与发展_杨牧.pdf',
      type: 'review',
      domains: ['dep-syntax'],
      indices: [],
      collaborators: { zh: ['蔡言胜'], en: ['Cai Yansheng'] },
    },
    {
      title: {
        zh: 'The role of syntax in the formation of scale-free language networks',
        en: 'The role of syntax in the formation of the scale-free language networks',
      },
      authors: { zh: ['杨牧', '刘海涛'], en: ['Mu Yang', 'Haitao Liu'] },
      venue: { zh: 'Europhysics Letters', en: 'Europhysics Letters' },
      year: 2022,
      link: 'publications/The role of syntax in the formation of the scale-free language networks.pdf',
      type: 'letter',
      domains: ['complex-network', 'dep-syntax'],
      indices: ['SCI'],
      collaborators: { zh: ['刘海涛'], en: ['Haitao Liu'] },
    },
  ];

  const labels = {
    zh: {
      result: (n) => `共检索到 ${n} 篇论文`,
      empty: '未找到符合条件的论文，请调整筛选条件。',
      type: { letter: '快报', article: '论文', chapter: '章节', report: '报告', review: '综述', thesis: '学位论文' },
      domain: {
        'dep-syntax': '依存句法',
        'lang-planning': '语言规划',
        'lang-evolution': '语言演化',
        'complex-network': '复杂网络',
        'word-class': '词类',
        sla: '二语习得',
      },
      typeLabel: '类型',
      author: '作者',
      year: '年份',
      collaborator: '合作者',
      all: '全部',
      indexLabel: '收录',
      notIndexed: '未标注',
      link: '论文链接',
      open: '查看论文',
    },
    en: {
      result: (n) => `${n} publications found`,
      empty: 'No publication matches the filters. Please refine your criteria.',
      type: { letter: 'Letter', article: 'Article', chapter: 'Chapter', report: 'Report', review: 'Review', thesis: 'Thesis' },
      domain: {
        'dep-syntax': 'Dependency Syntax',
        'lang-planning': 'Language Planning',
        'lang-evolution': 'Language Evolution',
        'complex-network': 'Complex Networks',
        'word-class': 'Word Class',
        sla: 'Second Language Acquisition',
      },
      typeLabel: 'Type',
      author: 'Authors',
      year: 'Year',
      collaborator: 'Collaborators',
      all: 'All',
      indexLabel: 'Indexed in',
      notIndexed: 'Unlabeled',
      link: 'Link',
      open: 'Open Paper',
    },
  };

  function currentLang() {
    return document.documentElement.lang.startsWith('en') ? 'en' : 'zh';
  }

  function pickText(field, lang) {
    if (typeof field === 'string') return field;
    if (field && typeof field === 'object') return field[lang] || field.zh || field.en || '';
    return '';
  }

  function pickList(field, lang) {
    if (Array.isArray(field)) return field;
    if (field && typeof field === 'object') return field[lang] || field.zh || field.en || [];
    return [];
  }

  function fillYearOptions() {
    const years = Array.from(new Set(papers.map((p) => p.year))).sort((a, b) => b - a);
    years.forEach((year) => {
      const op = document.createElement('option');
      op.value = String(year);
      op.textContent = String(year);
      yearEl.appendChild(op);
    });
  }

  function render() {
    const lang = currentLang();
    const typeFilter = typeEl.value;
    const domainFilter = domainEl.value;
    const yearFilter = yearEl.value;
    const collabFilter = collabEl.value;

    const filtered = papers.filter((paper) => {
      const passType = typeFilter === 'all' || paper.type === typeFilter;
      const passDomain = domainFilter === 'all' || paper.domains.includes(domainFilter);
      const passYear = yearFilter === 'all' || String(paper.year) === yearFilter;
      const collabs = pickList(paper.collaborators, lang);
      const passCollab = collabFilter === 'all' || collabs.includes(collabFilter);
      return passType && passDomain && passYear && passCollab;
    });

    resultCount.textContent = labels[lang].result(filtered.length);
    resultList.innerHTML = '';

    if (filtered.length === 0) {
      const li = document.createElement('li');
      li.className = 'pub-item';
      li.textContent = labels[lang].empty;
      resultList.appendChild(li);
      return;
    }

    filtered.forEach((paper) => {
      const li = document.createElement('li');
      li.className = 'pub-item';

      const title = document.createElement('p');
      title.className = 'pub-item-title';
      title.textContent = paper.title[lang];

      const meta = document.createElement('p');
      meta.className = 'pub-item-meta';
      meta.textContent = pickText(paper.venue, lang);

      const author = document.createElement('p');
      author.className = 'pub-item-meta';
      author.textContent = `${labels[lang].author}: ${pickList(paper.authors, lang).join(', ')}`;

      const year = document.createElement('p');
      year.className = 'pub-item-meta';
      year.textContent = `${labels[lang].year}: ${paper.year}`;

      const tags = document.createElement('div');
      tags.className = 'pub-tags';

      const tagType = document.createElement('span');
      tagType.className = 'pub-tag';
      tagType.textContent = `${labels[lang].typeLabel}: ${labels[lang].type[paper.type]}`;
      tags.appendChild(tagType);

      paper.domains.forEach((domainKey) => {
        const tagDomain = document.createElement('span');
        tagDomain.className = 'pub-tag';
        tagDomain.textContent = labels[lang].domain[domainKey] || domainKey;
        tags.appendChild(tagDomain);
      });

      const tagCollab = document.createElement('span');
      tagCollab.className = 'pub-tag';
      tagCollab.textContent = `${labels[lang].collaborator}: ${pickList(paper.collaborators, lang).join(', ')}`;
      tags.appendChild(tagCollab);

      const tagIndex = document.createElement('span');
      tagIndex.className = 'pub-tag';
      tagIndex.textContent = `${labels[lang].indexLabel}: ${paper.indices.length ? paper.indices.join('/') : labels[lang].notIndexed}`;
      tags.appendChild(tagIndex);

      const footer = document.createElement('div');
      footer.className = 'pub-item-footer';
      const linkText = document.createElement('span');
      linkText.className = 'pub-item-meta';
      linkText.textContent = `${labels[lang].link}:`;
      const link = document.createElement('a');
      link.className = 'pub-link';
      link.href = /^https?:\/\//.test(paper.link) ? paper.link : encodeURI(paper.link);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = labels[lang].open;

      footer.appendChild(linkText);
      footer.appendChild(link);

      li.appendChild(title);
      li.appendChild(meta);
      li.appendChild(author);
      li.appendChild(year);
      li.appendChild(tags);
      li.appendChild(footer);
      resultList.appendChild(li);
    });
  }

  function resetFilters() {
    form.reset();
    typeEl.value = 'all';
    domainEl.value = 'all';
    yearEl.value = 'all';
    collabEl.value = 'all';
    render();
  }

  function fillCollaboratorOptions(lang) {
    const names = Array.from(new Set(papers.flatMap((p) => pickList(p.collaborators, lang)))).sort((a, b) => a.localeCompare(b));
    collabEl.innerHTML = '';
    const allOp = document.createElement('option');
    allOp.value = 'all';
    allOp.textContent = labels[lang].all;
    collabEl.appendChild(allOp);
    names.forEach((name) => {
      const op = document.createElement('option');
      op.value = name;
      op.textContent = name;
      collabEl.appendChild(op);
    });
  }

  fillYearOptions();
  fillCollaboratorOptions(currentLang());
  form.addEventListener('input', render);
  form.addEventListener('change', render);
  resetBtn.addEventListener('click', resetFilters);
  window.addEventListener('languagechange', () => {
    fillCollaboratorOptions(currentLang());
    render();
  });
  render();
})();

