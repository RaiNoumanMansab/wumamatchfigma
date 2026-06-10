import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'zh-CN' | 'zh-TW';

type TranslationValue =
  | string
  | string[]
  | Array<Record<string, string | string[]>>;

const STORAGE_KEY = 'wuma-locale';

export const languageOptions: Array<{ locale: Locale; label: string; shortLabel: string }> = [
  { locale: 'en', label: 'English', shortLabel: 'EN' },
  { locale: 'zh-CN', label: '简体中文', shortLabel: '简' },
  { locale: 'zh-TW', label: '繁體中文', shortLabel: '繁' },
];

const translations: Record<Locale, Record<string, TranslationValue>> = {
  en: {
    'nav.home': 'Home',
    'nav.process': 'How It Works',
    'nav.testimonials': 'Success Stories',
    'nav.apply': 'Apply Now',
    'nav.toggleMenu': 'Toggle menu',

    'hero.kicker': 'Private matchmaking for verified people.',
    'hero.heading': 'Private introductions for a life built together.',
    'hero.cta': 'Start Your Journey',
    'hero.alt': 'WuMa Matchmaking',

    'stats.heading': 'Find Success With WuMa',
    'stats.description': 'A private, human-led approach built for serious introductions, not endless browsing.',
    'stats.cards': [
      {
        metric: '100%',
        label: 'Private Profiles',
        bullets: [
          'No public member browsing',
          'Photos shared only by approval',
          'No searchable profile directory',
        ],
      },
      {
        metric: '1:1',
        label: 'Personal Matching',
        bullets: [
          'Dedicated consultation before matching',
          'Human review of lifestyle and values',
          'Introductions shaped around intent',
        ],
      },
      {
        metric: '4',
        label: 'Curated Steps',
        bullets: [
          'Screening and identity confidence',
          'Compatibility review before sharing',
          'Mutual consent before any reveal',
        ],
      },
    ],

    'featured.eyebrow': 'As Seen In',
    'featured.heading': 'Featured by voices shaping modern relationships.',

    'why.eyebrow': 'OUR APPROACH',
    'why.cta': 'Apply Now',
    'why.headlineParts': [
      { text: 'We help ambitious singles go from', className: 'text-white' },
      { text: '“good enough”', className: 'italic text-zinc-300' },
      { text: 'to', className: 'text-white' },
      { text: 'unforgettable', className: 'text-[#D4A853] font-normal' },
      {
        text: ', blending psychology, intuition, and deep vetting to deliver connections that actually move the needle.',
        className: 'text-white',
      },
    ],

    'privacy.eyebrow': 'Security & Privacy',
    'privacy.heading': 'Your privacy is our highest mandate.',
    'privacy.description':
      'No public database browsing. Your profile is strictly private and shared only with curated matches you approve.',
    'privacy.confidentialProfile': 'Confidential Profile',
    'privacy.unlockNote': 'Unlocked only after mutual approval.',
    'privacy.profileAlt': 'Confidential Portrait Profile',
    'privacy.points': [
      {
        title: 'Liveness Check',
        desc: 'Every member is verified to ensure a genuine and trusted profile.',
      },
      {
        title: 'Photos Protected',
        desc: 'Photos stay private and are shared only with approved matches.',
      },
      {
        title: 'Not Indexed',
        desc: 'Profiles remain hidden from search engines and public directories.',
      },
    ],
    'privacy.profiles': [
      { tag: 'Vetted Member', id: 'WM-9832', status: 'Verified' },
      { tag: 'VIP Client', id: 'WM-4102', status: 'VIP Verified' },
      { tag: 'Vetted Member', id: 'WM-7392', status: 'Verified' },
    ],

    'process.heading': 'Our Human-Centric Matchmaking Process',
    'process.steps': [
      {
        title: 'Discovery',
        desc: 'We learn your values, lifestyle, family goals, and non-negotiables through a private consultation.',
        stepNum: '01',
      },
      {
        title: 'Curation',
        desc: 'Your matchmaker reviews vetted candidates and narrows the search to people with serious intent.',
        stepNum: '02',
      },
      {
        title: 'Introduction',
        desc: 'Profiles are shared privately, and introductions move forward only after mutual approval.',
        stepNum: '03',
      },
      {
        title: 'Guidance',
        desc: 'After each introduction, feedback and support help refine the next step with care.',
        stepNum: '04',
      },
    ],

    'testimonials.eyebrow': 'Client Stories',
    'testimonials.heading': 'Hear From Our Happy Couples',
    'testimonials.description':
      'Meaningful introductions, private guidance, and carefully curated matches designed for lasting relationships.',
    'testimonials.scrollLeft': 'Scroll left',
    'testimonials.scrollRight': 'Scroll right',
    'testimonials.items': [
      {
        name: 'Sarah & Daniel',
        role: 'Matched Couple',
        brand: 'WuMa-Match',
        review:
          'WuMa-Match made the entire process feel private, respectful, and deeply personal. We felt understood from the very first conversation.',
      },
      {
        name: 'Emily & Ryan',
        role: 'Matched Couple',
        brand: 'WuMa-Match',
        review:
          'The team introduced us with care and intention. It never felt random - every step felt thoughtfully guided.',
      },
      {
        name: 'Jessica & Michael',
        role: 'Matched Couple',
        brand: 'WuMa-Match',
        review:
          'What impressed us most was the discretion. Our profiles stayed private, and the match truly aligned with our values.',
      },
      {
        name: 'Anna & David',
        role: 'Matched Couple',
        brand: 'WuMa-Match',
        review:
          'This was far more refined than online dating. WuMa-Match created a calm, premium, and trustworthy experience.',
      },
      {
        name: 'Sophia & James',
        role: 'Matched Couple',
        brand: 'WuMa-Match',
        review:
          'We appreciated how selective and human the process was. It felt like working with people who genuinely cared.',
      },
    ],

    'faq.heading': 'Common Questions',
    'faq.description': 'Everything you need to know about our service, from our unique approach to client privacy.',
    'faq.items': [
      {
        q: 'What makes WuMa-Match different from dating apps?',
        a: 'We reject algorithmic swiping and public profile databases. Our approach is entirely human-curated. We match members based on deep compatibility assessment, psychological interviews, and manual alignment by seasoned matchmakers.',
      },
      {
        q: 'How does the matchmaking process work?',
        a: 'It begins with an in-depth, private consultation where we align on your life goals, lifestyle, and values. Next, we search our exclusive network to select suitable profiles, verify their status, and introduce you only after mutual authorization.',
      },
      {
        q: 'What kind of commitment is required?',
        a: 'We work with serious, relationship-minded individuals. Members are expected to be responsive, honest, and respectful throughout the screening and introduction phases to ensure a premium experience for all parties.',
      },
      {
        q: 'Is my privacy protected?',
        a: 'Yes, privacy is our highest mandate. There are no public galleries, search results, or profile databases. Your details and photographs are stored securely and are only visible to specific candidates whom you personally approve for a potential introduction.',
      },
    ],

    'cta.heading': 'Begin a More Discerning Search for Love.',
    'cta.description':
      'A private, highly curated matchmaking experience designed for individuals who value intention, emotional alignment, and meaningful long-term compatibility.',
    'cta.button': 'Book A Call',

    'footer.description':
      'Private matchmaking for serious, marriage-minded individuals who value discretion, intention, and a human-led introduction process.',
    'footer.rights': 'WuMa-Match, Inc. All Rights Reserved.',
    'footer.contact': 'Get In Touch',
    'footer.navigation': 'Navigation',
    'footer.privacyNotice': 'Privacy Notice',
    'footer.privacy': 'Privacy',
    'footer.apply': 'Apply',
  },
  'zh-CN': {
    'nav.home': '首页',
    'nav.process': '服务流程',
    'nav.testimonials': '成功故事',
    'nav.apply': '立即申请',
    'nav.toggleMenu': '打开菜单',

    'hero.kicker': '为通过验证的人士提供私密婚恋匹配。',
    'hero.heading': '为共同建立的人生，安排私密介绍。',
    'hero.cta': '开启旅程',
    'hero.alt': 'WuMa 婚恋匹配',

    'stats.heading': '与 WuMa 一起收获结果',
    'stats.description': '私密、真人主导的服务，为认真关系而设计，而不是无尽浏览。',
    'stats.cards': [
      {
        metric: '100%',
        label: '私密档案',
        bullets: ['没有公开会员浏览', '照片仅经批准后分享', '没有可搜索的公开目录'],
      },
      {
        metric: '1:1',
        label: '专属匹配',
        bullets: ['匹配前进行专属咨询', '真人评估生活方式与价值观', '介绍围绕真实意向设计'],
      },
      {
        metric: '4',
        label: '精选步骤',
        bullets: ['身份与真实性筛选', '分享前完成契合度评估', '任何揭示前都需双方同意'],
      },
    ],

    'featured.eyebrow': '媒体报道',
    'featured.heading': '受到现代关系领域声音的关注。',

    'why.eyebrow': '我们的方式',
    'why.cta': '立即申请',
    'why.headlineParts': [
      { text: '我们帮助优秀单身人士从', className: 'text-white' },
      { text: '“还不错”', className: 'italic text-zinc-300' },
      { text: '走向', className: 'text-white' },
      { text: '难以忘怀', className: 'text-[#D4A853] font-normal' },
      { text: '，结合心理学、直觉与深度筛选，促成真正有分量的连接。', className: 'text-white' },
    ],

    'privacy.eyebrow': '安全与隐私',
    'privacy.heading': '隐私是我们的最高准则。',
    'privacy.description': '没有公开数据库浏览。你的档案严格保密，只会分享给你认可的精选对象。',
    'privacy.confidentialProfile': '保密档案',
    'privacy.unlockNote': '仅在双方同意后解锁。',
    'privacy.profileAlt': '保密头像档案',
    'privacy.points': [
      { title: '真人验证', desc: '每位会员都会经过验证，确保档案真实可信。' },
      { title: '照片保护', desc: '照片保持私密，只会与获批对象分享。' },
      { title: '不被索引', desc: '档案不会出现在搜索引擎或公共目录中。' },
    ],
    'privacy.profiles': [
      { tag: '已筛选会员', id: 'WM-9832', status: '已验证' },
      { tag: 'VIP 客户', id: 'WM-4102', status: 'VIP 已验证' },
      { tag: '已筛选会员', id: 'WM-7392', status: '已验证' },
    ],

    'process.heading': '以人为本的婚恋匹配流程',
    'process.steps': [
      { title: '了解', desc: '通过私密咨询了解你的价值观、生活方式、家庭目标与关键需求。', stepNum: '01' },
      { title: '甄选', desc: '专属顾问审阅已验证候选人，并缩小到真正认真投入的人选。', stepNum: '02' },
      { title: '介绍', desc: '档案会被私密分享，只有在双方同意后才推进介绍。', stepNum: '03' },
      { title: '陪伴', desc: '每次介绍后，我们通过反馈与支持，细致优化下一步。', stepNum: '04' },
    ],

    'testimonials.eyebrow': '客户故事',
    'testimonials.heading': '听听幸福伴侣的分享',
    'testimonials.description': '有意义的介绍、私密指导与精心甄选的匹配，为长期关系而设计。',
    'testimonials.scrollLeft': '向左滚动',
    'testimonials.scrollRight': '向右滚动',
    'testimonials.items': [
      { name: 'Sarah 与 Daniel', role: '成功匹配伴侣', brand: 'WuMa-Match', review: 'WuMa-Match 让整个过程私密、尊重且非常个性化。第一次沟通起，我们就感到被真正理解。' },
      { name: 'Emily 与 Ryan', role: '成功匹配伴侣', brand: 'WuMa-Match', review: '团队非常用心地介绍我们认识。整个过程从不随机，每一步都经过认真引导。' },
      { name: 'Jessica 与 Michael', role: '成功匹配伴侣', brand: 'WuMa-Match', review: '最打动我们的是私密性。我们的档案始终被保护，匹配对象也真正符合我们的价值观。' },
      { name: 'Anna 与 David', role: '成功匹配伴侣', brand: 'WuMa-Match', review: '这比线上约会精致得多。WuMa-Match 带来平静、高端且值得信赖的体验。' },
      { name: 'Sophia 与 James', role: '成功匹配伴侣', brand: 'WuMa-Match', review: '我们很欣赏这个流程的筛选与人情味，像是在与真正关心我们的人合作。' },
    ],

    'faq.heading': '常见问题',
    'faq.description': '从我们的独特方式到客户隐私，了解你需要知道的一切。',
    'faq.items': [
      { q: 'WuMa-Match 与约会软件有什么不同？', a: '我们拒绝算法滑动和公开档案库。我们的方式完全由真人甄选，通过深度契合评估、心理访谈和资深顾问的人工匹配来完成。' },
      { q: '匹配流程如何进行？', a: '流程从深入的私密咨询开始，我们会了解你的人生目标、生活方式和价值观。随后从专属网络中挑选合适档案，完成验证，并仅在双方授权后安排介绍。' },
      { q: '需要怎样的投入？', a: '我们服务认真寻找长期关系的人士。会员应在筛选和介绍阶段保持回应、诚实与尊重，以确保每个人都获得高品质体验。' },
      { q: '我的隐私会受到保护吗？', a: '会，隐私是我们的最高准则。没有公开相册、搜索结果或档案库。你的资料和照片会被安全保存，并只对你亲自批准的潜在介绍对象可见。' },
    ],

    'cta.heading': '以更审慎的方式寻找爱情。',
    'cta.description': '私密、高度甄选的婚恋体验，专为重视意向、情感契合与长期关系的人士设计。',
    'cta.button': '预约通话',

    'footer.description': '为认真、以婚姻为目标的人士提供私密婚恋匹配，重视谨慎、意向与真人主导的介绍流程。',
    'footer.rights': 'WuMa-Match, Inc. 保留所有权利。',
    'footer.contact': '联系我们',
    'footer.navigation': '导航',
    'footer.privacyNotice': '隐私说明',
    'footer.privacy': '隐私',
    'footer.apply': '申请',
  },
  'zh-TW': {
    'nav.home': '首頁',
    'nav.process': '服務流程',
    'nav.testimonials': '成功故事',
    'nav.apply': '立即申請',
    'nav.toggleMenu': '開啟選單',

    'hero.kicker': '為通過驗證的人士提供私密婚戀配對。',
    'hero.heading': '為共同建立的人生，安排私密介紹。',
    'hero.cta': '開啟旅程',
    'hero.alt': 'WuMa 婚戀配對',

    'stats.heading': '與 WuMa 一起收穫結果',
    'stats.description': '私密、真人主導的服務，為認真關係而設計，而不是無盡瀏覽。',
    'stats.cards': [
      {
        metric: '100%',
        label: '私密檔案',
        bullets: ['沒有公開會員瀏覽', '照片僅經批准後分享', '沒有可搜尋的公開目錄'],
      },
      {
        metric: '1:1',
        label: '專屬配對',
        bullets: ['配對前進行專屬諮詢', '真人評估生活方式與價值觀', '介紹圍繞真實意向設計'],
      },
      {
        metric: '4',
        label: '精選步驟',
        bullets: ['身份與真實性篩選', '分享前完成契合度評估', '任何揭示前都需雙方同意'],
      },
    ],

    'featured.eyebrow': '媒體報導',
    'featured.heading': '受到現代關係領域聲音的關注。',

    'why.eyebrow': '我們的方式',
    'why.cta': '立即申請',
    'why.headlineParts': [
      { text: '我們幫助優秀單身人士從', className: 'text-white' },
      { text: '「還不錯」', className: 'italic text-zinc-300' },
      { text: '走向', className: 'text-white' },
      { text: '難以忘懷', className: 'text-[#D4A853] font-normal' },
      { text: '，結合心理學、直覺與深度篩選，促成真正有份量的連結。', className: 'text-white' },
    ],

    'privacy.eyebrow': '安全與隱私',
    'privacy.heading': '隱私是我們的最高準則。',
    'privacy.description': '沒有公開資料庫瀏覽。你的檔案嚴格保密，只會分享給你認可的精選對象。',
    'privacy.confidentialProfile': '保密檔案',
    'privacy.unlockNote': '僅在雙方同意後解鎖。',
    'privacy.profileAlt': '保密頭像檔案',
    'privacy.points': [
      { title: '真人驗證', desc: '每位會員都會經過驗證，確保檔案真實可信。' },
      { title: '照片保護', desc: '照片保持私密，只會與獲批對象分享。' },
      { title: '不被索引', desc: '檔案不會出現在搜尋引擎或公共目錄中。' },
    ],
    'privacy.profiles': [
      { tag: '已篩選會員', id: 'WM-9832', status: '已驗證' },
      { tag: 'VIP 客戶', id: 'WM-4102', status: 'VIP 已驗證' },
      { tag: '已篩選會員', id: 'WM-7392', status: '已驗證' },
    ],

    'process.heading': '以人為本的婚戀配對流程',
    'process.steps': [
      { title: '了解', desc: '透過私密諮詢了解你的價值觀、生活方式、家庭目標與關鍵需求。', stepNum: '01' },
      { title: '甄選', desc: '專屬顧問審閱已驗證候選人，並縮小到真正認真投入的人選。', stepNum: '02' },
      { title: '介紹', desc: '檔案會被私密分享，只有在雙方同意後才推進介紹。', stepNum: '03' },
      { title: '陪伴', desc: '每次介紹後，我們透過回饋與支持，細緻優化下一步。', stepNum: '04' },
    ],

    'testimonials.eyebrow': '客戶故事',
    'testimonials.heading': '聽聽幸福伴侶的分享',
    'testimonials.description': '有意義的介紹、私密指導與精心甄選的配對，為長期關係而設計。',
    'testimonials.scrollLeft': '向左捲動',
    'testimonials.scrollRight': '向右捲動',
    'testimonials.items': [
      { name: 'Sarah 與 Daniel', role: '成功配對伴侶', brand: 'WuMa-Match', review: 'WuMa-Match 讓整個過程私密、尊重且非常個人化。第一次溝通起，我們就感到被真正理解。' },
      { name: 'Emily 與 Ryan', role: '成功配對伴侶', brand: 'WuMa-Match', review: '團隊非常用心地介紹我們認識。整個過程從不隨機，每一步都經過認真引導。' },
      { name: 'Jessica 與 Michael', role: '成功配對伴侶', brand: 'WuMa-Match', review: '最打動我們的是私密性。我們的檔案始終被保護，配對對象也真正符合我們的價值觀。' },
      { name: 'Anna 與 David', role: '成功配對伴侶', brand: 'WuMa-Match', review: '這比線上約會精緻得多。WuMa-Match 帶來平靜、高端且值得信賴的體驗。' },
      { name: 'Sophia 與 James', role: '成功配對伴侶', brand: 'WuMa-Match', review: '我們很欣賞這個流程的篩選與人情味，像是在與真正關心我們的人合作。' },
    ],

    'faq.heading': '常見問題',
    'faq.description': '從我們的獨特方式到客戶隱私，了解你需要知道的一切。',
    'faq.items': [
      { q: 'WuMa-Match 與約會軟體有什麼不同？', a: '我們拒絕演算法滑動和公開檔案庫。我們的方式完全由真人甄選，透過深度契合評估、心理訪談和資深顧問的人工配對來完成。' },
      { q: '配對流程如何進行？', a: '流程從深入的私密諮詢開始，我們會了解你的人生目標、生活方式和價值觀。隨後從專屬網絡中挑選合適檔案，完成驗證，並僅在雙方授權後安排介紹。' },
      { q: '需要怎樣的投入？', a: '我們服務認真尋找長期關係的人士。會員應在篩選和介紹階段保持回應、誠實與尊重，以確保每個人都獲得高品質體驗。' },
      { q: '我的隱私會受到保護嗎？', a: '會，隱私是我們的最高準則。沒有公開相簿、搜尋結果或檔案庫。你的資料和照片會被安全保存，並只對你親自批准的潛在介紹對象可見。' },
    ],

    'cta.heading': '以更審慎的方式尋找愛情。',
    'cta.description': '私密、高度甄選的婚戀體驗，專為重視意向、情感契合與長期關係的人士設計。',
    'cta.button': '預約通話',

    'footer.description': '為認真、以婚姻為目標的人士提供私密婚戀配對，重視謹慎、意向與真人主導的介紹流程。',
    'footer.rights': 'WuMa-Match, Inc. 保留所有權利。',
    'footer.contact': '聯絡我們',
    'footer.navigation': '導航',
    'footer.privacyNotice': '隱私說明',
    'footer.privacy': '隱私',
    'footer.apply': '申請',
  },
};

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const savedLocale = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (savedLocale && savedLocale in translations) {
    return savedLocale;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.includes('zh-tw') || browserLanguage.includes('zh-hk')) {
    return 'zh-TW';
  }
  if (browserLanguage.startsWith('zh')) {
    return 'zh-CN';
  }

  return 'en';
};

type LocalizationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  get: <T extends TranslationValue>(key: string) => T;
};

const LocalizationContext = createContext<LocalizationContextValue | null>(null);

export const LocalizationProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  const value = useMemo<LocalizationContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => String(translations[locale][key] ?? translations.en[key] ?? key),
      get: (key) => (translations[locale][key] ?? translations.en[key]) as never,
    }),
    [locale],
  );

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used inside LocalizationProvider');
  }

  return context;
};
