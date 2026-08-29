(() => {
  const dictionary = {
    site_name: { zh: '杨牧', en: 'Yang Mu' },
    tagline: { zh: '我见青山多妩媚', en: 'I find the green mountains enchanting' },
    nav_home: { zh: '首页', en: 'Home' },
    nav_about: { zh: '个人信息', en: 'Profile' },
    nav_pubs: { zh: '论文发表', en: 'Publications' },
    nav_software: { zh: '软件', en: 'Software' },
    nav_conf: { zh: '会议与展示', en: 'Conferences & Talks' },
    nav_universals: { zh: '博客', en: 'Blog' },
    nav_contact: { zh: '联系', en: 'Contact' },
    lang_label: { zh: '语言', en: 'Language' },
    search_placeholder: { zh: '站内搜索', en: 'Search site' },
    search_btn: { zh: '搜索', en: 'Search' },
    search_page_title: { zh: '站内搜索', en: 'Site Search' },
    search_page_desc: { zh: '输入关键词检索站内页面内容。', en: 'Type keywords to search content across this website.' },
    search_no_result: { zh: '未找到相关结果。', en: 'No matching results.' },
    left_profile_title: { zh: '学者档案', en: 'Scholar Profile' },
    left_profile_desc: { zh: '计量语言学、数据驱动语言学、依存语法、复杂网络', en: 'Quantitative linguistics, data-driven linguistics, dependency syntax, and complex networks' },
    left_contact_title: { zh: '联系方式', en: 'Contacts' },
    label_github: { zh: 'GitHub', en: 'GitHub' },
    label_email: { zh: '邮箱', en: 'Email' },
    label_orcid: { zh: 'ORCID', en: 'ORCID' },
    right_links_title: { zh: '友情链接', en: 'Academic Links' },
    right_link_haitao: { zh: '刘海涛教授主页', en: "Prof. Haitao Liu's Homepage" },
    footer_text: { zh: '© 2026 杨牧 | 学术主页', en: '© 2026 Yang Mu | Academic Homepage' },

    index_research_title: { zh: '研究方向', en: 'Research Focus' },
    index_research_desc: { zh: '聚焦古典预言文本、跨语种语义映射与语言结构中的普遍规律，结合语料库方法与历史比较语言学进行解释。', en: 'Focused on classical prophetic texts, cross-lingual semantic mapping, and structural universals in language, using corpus methods and historical-comparative linguistics.' },
    index_card_about_title: { zh: '个人信息', en: 'Profile' },
    index_card_about_desc: { zh: '查看教育背景、学术履历、研究兴趣与正在进行的课题。', en: 'Education, academic trajectory, research interests, and ongoing projects.' },
    index_card_about_btn: { zh: '查看详情', en: 'View Details' },
    index_card_pub_title: { zh: '论文发表', en: 'Publications' },
    index_card_pub_desc: { zh: '收录期刊论文、会议论文与专著章节，含摘要与发表信息。', en: 'Journal papers, conference papers, and book chapters with publication details.' },
    index_card_pub_btn: { zh: '进入页面', en: 'Open Page' },
    index_card_uni_title: { zh: '博客', en: 'Blog' },
    index_card_uni_desc: { zh: '阅读研究札记、方法总结与学术观察文章。', en: 'Read research notes, method reflections, and academic observation posts.' },
    index_card_uni_btn: { zh: '进入博客', en: 'Open Blog' },
    index_wordcloud_title: { zh: '词云图', en: 'Word Cloud' },

    about_title: { zh: '个人信息', en: 'Profile' },
    about_name_label: { zh: '姓名：', en: 'Name: ' },
    about_name_value: { zh: '杨牧', en: 'Yang Mu' },
    about_role_label: { zh: '职称：', en: 'Position: ' },
    about_role_value: { zh: '浙江大学在读博士', en: 'Doctoral Student, Zhejiang University' },
    about_research_label: { zh: '研究领域：', en: 'Research Areas: ' },
    about_research_value: { zh: '计量语言学、数据驱动语言学、依存语法、复杂网络', en: 'Quantitative linguistics, data-driven linguistics, dependency syntax, and complex networks' },
    about_mail_label: { zh: '邮箱：', en: 'Email: ' },
    about_edu_title: { zh: '教育与任职', en: 'Education and Appointments' },
    about_edu_1: { zh: '2016-2020：山东大学 翻译学院 文学学士', en: '2016-2020: B.A., School of Translation Studies, Shandong University' },
    about_edu_2: { zh: '2020-2023：南开大学 汉语言文化学院 文学硕士', en: '2020-2023: M.A., College of Chinese Language and Culture, Nankai University' },
    about_edu_3: { zh: '2023-至今：浙江大学 外国语学院 在读博士', en: '2023-present: Doctoral Student, School of International Studies, Zhejiang University' },
    about_edu_4: { zh: '', en: '' },
    about_interest_title: { zh: '研究兴趣', en: 'Research Interests' },
    about_interest_1: { zh: '依存语法与句法计量', en: 'Dependency grammar and syntactic quantification' },
    about_interest_2: { zh: '语言演化与复杂网络建模', en: 'Language evolution and complex network modeling' },
    about_interest_3: { zh: '基于大规模语言的语言普遍性与多样性', en: 'Linguistic universals and diversity based on large-scale language data' },
    about_interest_4: { zh: '', en: '' },
    about_network_title: { zh: '学术网络', en: 'Academic Network' },
    about_network_mentorship_label: { zh: '师承', en: 'Lineage' },
    about_network_lineage_1: { zh: '索绪尔', en: 'Ferdinand de Saussure' },
    about_network_lineage_2: { zh: '梅耶', en: 'Antoine Meillet' },
    about_network_lineage_3: { zh: '岑麒祥', en: 'Qixiang Cen' },
    about_network_lineage_4: { zh: '冯志伟', en: 'Zhiwei Feng' },
    about_network_lineage_5: { zh: '刘海涛', en: 'Haitao Liu' },
    about_network_mentorship_value: { zh: 'LinguisticTree 学术谱系', en: 'LinguisticTree Academic Genealogy' },
    about_network_collab_label: { zh: '合作者网络：', en: 'Collaborator Network: ' },
    about_network_collab_value: { zh: '已整合到下方复杂网络图，节点与图例可点击。', en: 'Merged into the network graph below; both nodes and legend links are clickable.' },
    about_network_erdos_label: { zh: 'Erdos 数', en: 'Erdos Number' },
    about_network_erdos_value: { zh: '4', en: '4' },
    about_network_graph_title: { zh: '合作者网络图', en: 'Collaborator Network Graph' },
    about_network_graph_desc: { zh: '节点可点击，查看对应学者主页或 Scholar 页面。', en: 'Nodes are clickable and open each scholar homepage or Google Scholar page.' },

    pub_journal_title: { zh: '期刊论文', en: 'Journal Articles' },
    pub_journal_1: { zh: '《预言文本中的时体系统与语义漂移》(2025). 《历史语言学研究》, 12(3): 45-72.', en: 'Tense-Aspect Systems and Semantic Drift in Prophetic Texts (2025). Journal of Historical Linguistic Studies, 12(3): 45-72.' },
    pub_journal_2: { zh: '《跨语言隐喻映射：从神谕话语到现代叙事》(2024). 《语义学前沿》, 9(1): 19-38.', en: 'Cross-Linguistic Metaphor Mapping: From Oracle Discourse to Modern Narratives (2024). Frontiers of Semantics, 9(1): 19-38.' },
    pub_conf_title: { zh: '会议论文', en: 'Conference Papers' },
    pub_conf_1: { zh: 'Universal Constraints in Prophetic Discourse (2025). International Conference on Linguistic Typology.', en: 'Universal Constraints in Prophetic Discourse (2025). International Conference on Linguistic Typology.' },
    pub_conf_2: { zh: 'Grammar and Omen: A Corpus-Based Study (2024). Annual Meeting of Historical Linguistics.', en: 'Grammar and Omen: A Corpus-Based Study (2024). Annual Meeting of Historical Linguistics.' },
    pub_filter_title: { zh: '论文分类检索', en: 'Publication Classification Search' },
    pub_filter_desc: { zh: '可按论文类型、研究领域、发表年份与合作者组合筛选。', en: 'Filter publications by paper type, research area, year, and collaborators.' },
    pub_filter_language_label: { zh: '论文类型', en: 'Paper Type' },
    pub_filter_domain_label: { zh: '研究领域', en: 'Research Area' },
    pub_filter_year_label: { zh: '发表年份', en: 'Publication Year' },
    pub_filter_collab_label: { zh: '合作者', en: 'Collaborator' },
    pub_filter_all: { zh: '全部', en: 'All' },
    pub_filter_type_letter: { zh: '快报', en: 'Letter' },
    pub_filter_type_article: { zh: '论文', en: 'Article' },
    pub_filter_type_chapter: { zh: '章节', en: 'Chapter' },
    pub_filter_type_report: { zh: '报告', en: 'Report' },
    pub_filter_type_review: { zh: '综述', en: 'Review' },
    pub_filter_type_thesis: { zh: '学位论文', en: 'Thesis' },
    pub_domain_dep: { zh: '依存句法', en: 'Dependency Syntax' },
    pub_domain_plan: { zh: '语言规划', en: 'Language Planning' },
    pub_domain_evolution: { zh: '语言演化', en: 'Language Evolution' },
    pub_domain_network: { zh: '复杂网络', en: 'Complex Networks' },
    pub_domain_wordclass: { zh: '词类', en: 'Word Class' },
    pub_domain_sla: { zh: '二语习得', en: 'Second Language Acquisition' },
    pub_reset_btn: { zh: '重置筛选', en: 'Reset Filters' },
    pub_result_title: { zh: '检索结果', en: 'Results' },
    conf_page_title: { zh: '会议与展示', en: 'Conferences and Talks' },
    conf_page_desc: { zh: '按年份整理的会议报告、工作坊展示与学术演讲。', en: 'Conference presentations, workshop demos, and academic talks organized by year.' },
    conf_2026_1: { zh: '2026：数据驱动的汉语动名兼类探索（浙江杭州，浙江大学）', en: '2026: Toward a Data-Driven Exploration of Verbo-Nominal Ambiguity in Chinese (Hangzhou, Zhejiang University)' },
    conf_2026_2: { zh: '', en: '' },
    conf_2025_1: { zh: '', en: '' },
    conf_2025_2: { zh: '2025-10-25：句法树的拓扑类型学初探，“数智时代的语言与语言教育研究”暨第八届计量语言学学术研讨会（浙江金华，浙江师范大学）', en: '2025-10-25 : A Preliminary Study on the Topological Typology of Syntactic Trees, “Language and Language Education Research in the Era of Digital Intelligence” and the 8th Symposium on Quantitative Linguistics (Jinhua, Zhejiang; Zhejiang Normal University )' },
    conf_2025_3: { zh: '2025-04-12：Subject and Object Distributions in Human Languages，浙江大学外国语学院第二届语言认知与发展圆桌论坛（浙江杭州，浙江大学）', en: '2025-04-12 : Subject and Object Distributions in Human Languages, 2nd Forum on Language Cognition and Development, School of International Studies, Zhejiang University (Hangzhou, Zhejiang; Zhejiang University )' },
    conf_2025_4: { zh: '2025年：句法计量软件 QuanSyn 的开发和使用（上海，复旦大学）', en: '2025: Development and Application of Quantitative Syntax Software QuanSyn (Shanghai, Fudan University)' },
    conf_2025_5: { zh: '2025年：句法计量软件 QuanSyn 的开发和使用（线上，北京语言大学）', en: '2025: Development and Application of Quantitative Syntax Software QuanSyn (Online, Beijing Language and Culture University)' },
    conf_2025_6: { zh: '2025年：数智时代语言研究的第四范式（上海，复旦大学）', en: '2025: The Fourth Paradigm of Language Research in the Era of Digital Intelligence (Shanghai, Fudan University)' },
    conf_2025_7: { zh: '2025年：山东大学（威海）翻译学院暑期计量语言学培训班 8 小时报告（山东威海，山东大学）', en: '2025: 8-Hour Lecture at the Summer Quantitative Linguistics Training Program, School of Translation Studies, Shandong University (Weihai, Shandong University)' },
    conf_2024_1: { zh: '浙大外院格物致知博士生论坛', en: 'Gewu Zhizhi Doctoral Forum, School of International Studies, Zhejiang University ' },
    conf_2024_2: { zh: '浙大外院青年学术论坛', en: 'Youth Academic Forum, School of International Studies, Zhejiang University ' },
    conf_2024_3: { zh: '南京师范大学计量语言学学术会议', en: 'Quantitative Linguistics Conference, Nanjing Normal University ' },
    conf_2024_4: { zh: '厦门大学嘉庚学院国际汉语词汇语义学学术会议', en: 'International Conference on Chinese Lexical Semantics, Tan Kah Kee College, Xiamen University ' },
    conf_2024_5: { zh: '2024-10-17：QuantLing：计量语言学工具包的开发，“语言计量与数字人文”暨第七届计量语言学学术研讨会（江苏南京，南京师范大学）', en: '2024-10-17 : QuantLing: Development of a Quantitative Linguistics Toolkit, “Language Quantification and Digital Humanities” and the 7th Symposium on Quantitative Linguistics (Nanjing, Jiangsu; Nanjing Normal University )' },
    conf_2023_1: { zh: '博士论坛报告：预言文本历时语义，国际语言学暑期学校（剑桥）', en: 'Doctoral Forum Talk: Diachronic Semantics in Prophetic Texts, International Summer School of Linguistics (Cambridge)' },
    conf_2023_2: { zh: '工作坊演示：历史预言语料标注流水线，数字人文与语言论坛（上海）', en: 'Workshop Demo: Annotation Pipeline for Historical Prophetic Corpora, DH and Language Forum (Shanghai)' },
    software_title: { zh: 'quansyn：句法计量系列项目', en: 'quansyn: A Quantitative Syntax Project Family' },
    software_intro: { zh: 'quansyn 是用于句法计量分析的系列项目，quansyn 家族包括 quansyn python package、quansyn mini app、quansyn studio app。', en: 'quansyn is a project family for quantitative syntax analysis, including the quansyn python package, quansyn mini app, and quansyn studio app.' },
    software_readme_title: { zh: 'README', en: 'README' },
    software_readme_1: { zh: '安装方式：可通过 pip install quansyn 安装，并在 Python 环境中使用。', en: 'Installation: quansyn can be installed via pip install quansyn and used in Python environments.' },
    software_readme_2: { zh: 'API 文档：主要 API 说明见项目 README。', en: 'API docs: key API usage is described in the project README.' },
    software_readme_3: { zh: 'quansyn mini：开发早期 UI，页面简洁，提供 quansyn 最基础功能。', en: 'quansyn mini: an early-stage UI with a very simple interface that provides the core basic features of quansyn.' },
    software_readme_4: { zh: 'quansyn studio：enhanced UI，除句法指标计算和语言网络边抽取外，还提供句法分析、句法树编辑与可视化、网络分析与可视化等进阶功能。', en: 'quansyn studio: an enhanced UI that adds advanced features including syntactic analysis, syntactic tree editing and visualization, and network analysis and visualization, in addition to syntax metrics and linguistic network edge extraction.' },
    software_readme_link: { zh: '查看 README', en: 'View README' },
    software_download_title: { zh: '下载', en: 'Download' },
    software_download_btn: { zh: '前往 Releases', en: 'Open Releases' },
    software_download_studio_btn: { zh: '下载 QuanSyn Studio', en: 'Download QuanSyn Studio' },
    software_download_note: { zh: '可在 GitHub 仓库获取源码，在 Releases 页面下载 QuanSyn python package 与 QuanSyn Studio app 的已发布版本。', en: 'Source code is available on GitHub; released versions of the QuanSyn python package and QuanSyn Studio app can be downloaded from the Releases pages.' },
    software_cite_title: { zh: 'APA 格式引用', en: 'APA Citation' },
    software_cite_text: { zh: 'Yang, M., & Liu, H. (2025). QuanSyn: A Package for Quantitative Syntax Analysis. Journal of Quantitative Linguistics, 32(2), 181–198. https://doi.org/10.1080/09296174.2025.2471157', en: 'Yang, M., & Liu, H. (2025). QuanSyn: A Package for Quantitative Syntax Analysis. Journal of Quantitative Linguistics, 32(2), 181–198. https://doi.org/10.1080/09296174.2025.2471157' },
    software_used_title: { zh: '引用 QuanSyn 的研究', en: 'Studies Citing QuanSyn' },
    software_used_1: { zh: 'Jiang, Z. (2025). Does LLM translation align with translation universals? A cross-genre simplification study on English-Chinese translation based on dependency grammar. PLoS One, 20(6), e0324830.', en: 'Jiang, Z. (2025). Does LLM translation align with translation universals? A cross-genre simplification study on English-Chinese translation based on dependency grammar. PLoS One, 20(6), e0324830.' },
    software_used_2: { zh: 'Yih, T., Yang, Y., Yang, M., Liu, H., & Huang, L. (2025). Identifying novel linguistic biomarkers of mild cognitive impairment in Mandarin-speaking older adults: A quantitative syntactic approach. Clinical Linguistics & Phonetics, 1-27.', en: 'Yih, T., Yang, Y., Yang, M., Liu, H., & Huang, L. (2025). Identifying novel linguistic biomarkers of mild cognitive impairment in Mandarin-speaking older adults: A quantitative syntactic approach. Clinical Linguistics & Phonetics, 1-27.' },
    software_used_3: { zh: 'Čibej, J. (2025, August). A Computational Method for Analyzing Syntactic Profiles: The Case of the ELEXIS-WSD Parallel Sense-Annotated Corpus. In Proceedings of the Third Workshop on Quantitative Syntax (QUASY, SyntaxFest 2025) (pp. 63-71).', en: 'Čibej, J. (2025, August). A Computational Method for Analyzing Syntactic Profiles: The Case of the ELEXIS-WSD Parallel Sense-Annotated Corpus. In Proceedings of the Third Workshop on Quantitative Syntax (QUASY, SyntaxFest 2025) (pp. 63-71).' },
    software_used_4: { zh: 'Terčon, L., & Dobrovoljc, K. (2025, August). Comparatree: A multi-level comparative treebank analysis tool. In Proceedings of the 23rd International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2025) (pp. 129-139).', en: 'Terčon, L., & Dobrovoljc, K. (2025, August). Comparatree: A multi-level comparative treebank analysis tool. In Proceedings of the 23rd International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2025) (pp. 129-139).' },
    software_used_5: { zh: 'Lin Wang. (2026). Linear and hierarchical syntactic complexity of English E-commerce live-streaming by Chinese and American hosts. Folia Linguistica.', en: 'Lin Wang. (2026). Linear and hierarchical syntactic complexity of English E-commerce live-streaming by Chinese and American hosts. Folia Linguistica.' },
    software_used_6: { zh: 'Yoorhee, V., & Moya-Galé, G. (2026). Beyond Individual Features: Computational Analysis of Linguistic Coordination in Dementia Speech. Brain Sciences, 16(7), 763. https://doi.org/10.3390/brainsci16070763', en: 'Yoorhee, V., & Moya-Galé, G. (2026). Beyond Individual Features: Computational Analysis of Linguistic Coordination in Dementia Speech. Brain Sciences, 16(7), 763. https://doi.org/10.3390/brainsci16070763' },
    software_used_7: { zh: 'Jiang, X., & Zhang, X. (2026). Testing text difficulty for second language learning: a corpus-based random forest analysis of linguistic features. Innovation in Language Learning and Teaching, 1–22. https://doi.org/10.1080/17501229.2026.2718794', en: 'Jiang, X., & Zhang, X. (2026). Testing text difficulty for second language learning: a corpus-based random forest analysis of linguistic features. Innovation in Language Learning and Teaching, 1–22. https://doi.org/10.1080/17501229.2026.2718794' },

    blog_page_title: { zh: '博客', en: 'Blog' },
    blog_page_desc: { zh: '围绕语言学、语言学方法与学术实践的随笔与研究札记。', en: 'Essays and research notes on linguistics, linguistic methods, and academic practice.' },
    blog_empty: { zh: '暂无文章。', en: 'No posts yet.' },

    contact_title: { zh: '联系方式', en: 'Contact Information' },
    contact_mail: { zh: '邮箱：yangmufy@163.com', en: 'Email: yangmufy@163.com' },
    contact_office: { zh: '办公室：浙江大学紫金港校区东5教学楼206', en: 'Office: Room 206, East Building 5, Zijingang Campus, Zhejiang University' },
    contact_hours: { zh: '', en: '' },
    collab_title: { zh: '学术合作', en: 'Research Collaboration' },
    collab_desc: { zh: '欢迎就以下主题进行合作：句法计量与计算、跨语言比较、语言普遍性与多样性探索、软件开发。', en: 'Open to collaboration on syntactic quantification and computation, cross-linguistic comparison, exploration of linguistic universals and diversity, and software development.' },

    guestbook_title: { zh: '留言板', en: 'Guestbook' },
    guestbook_desc: { zh: '可直接通过邮箱发送留言，我会通过邮箱回复。', en: 'Send your message via email directly, and I will reply by email.' },
    guestbook_name: { zh: '你的姓名', en: 'Your Name' },
    guestbook_email: { zh: '你的邮箱', en: 'Your Email' },
    guestbook_message: { zh: '留言内容', en: 'Message' },
    guestbook_btn: { zh: '发送留言', en: 'Send Message' },
    guestbook_hint: { zh: '提交后将自动发送到邮箱。', en: 'Submitting will automatically send to the mailbox.' }
  };

  const langSelect = document.getElementById('lang-select');

  function applyLanguage(lang) {
    const chosen = lang === 'en' ? 'en' : 'zh';
    document.documentElement.lang = chosen === 'en' ? 'en' : 'zh-CN';
    localStorage.setItem('site_lang', chosen);

    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const entry = dictionary[key];
      if (entry && entry[chosen]) {
        node.textContent = entry[chosen];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
      const key = node.getAttribute('data-i18n-placeholder');
      const entry = dictionary[key];
      if (entry && entry[chosen]) {
        node.setAttribute('placeholder', entry[chosen]);
      }
    });

    if (langSelect) {
      langSelect.value = chosen;
    }

    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: chosen } }));
  }

  if (langSelect) {
    langSelect.addEventListener('change', () => applyLanguage(langSelect.value));
  }

  const initialLang = localStorage.getItem('site_lang') || 'zh';
  applyLanguage(initialLang);
})();






