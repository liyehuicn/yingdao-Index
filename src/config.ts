/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "晨风追剧",
    sites: [
      {
        title: "备用地址1",
        url: "https://fefz.win/",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "备用地址2",
        description: "",
        url: "https://app.ncnm.date/",
        icon: "",
      },
      {
        title: "备用地址3",
        description: "",
        url: "http://www.liyehui.top/",
        icon: "",
      },
    ],
  },
  {
    title: "短剧分享",
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "晨风追剧",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.fefz.win",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null， 
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://cdn.liyehui.cn/img5.jpg",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
