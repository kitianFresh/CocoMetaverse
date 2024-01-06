const autometa_options = {
  site: {
    name: 'coco',
    twitter: 'kinnyfly',
  },
  canonical_base: 'https://coco.hacksmeta.com',
};
module.exports = {
  "title": "CocoMetaverse",
  "description": "可可的元宇宙，探索无限可能，分享云计算、人工智能、元认知迭代",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "codeva-0IENWLQylP"
      }
    ],
    [
      "meta",
      {
        "name": "google-site-verification",
        "content": "c61DXiMcjorKFxoYPTVYy_DRgBqBQ13VBt-TkGwpWAQ"
      }
    ],
    [
      "meta",
      {
        "name": "sogou_site_verification",
        "content": "QBbjJziQGC"
      }
    ],
    [
      "meta",
      {
        "name": "msvalidate.01",
        "content": "44214DFBCE99B820C08366C7A9449E3F"
      }
    ],
    [
      "meta",
      {
        "name": "shenma-site-verification",
        "content": "2dfafdffe9163bdb878cf9681b0bf3b0_1704528471"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    noFoundPageByTencent: false,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-document",
        "items": [
          {
            "text": "metahacks",
            "link": "/docs/metahacks/"
          },
          {
            "text": "cloud",
            "link": "/docs/cloud/"
          },
          {
            "text": "ai",
            "link": "/docs/ai/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-menu",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/kitianFresh",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/cloud/": [
        "",
        "distributedscheduling",
      ]
    },
    // "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Blog"
      // },
      "tag": {
        "location": 2,
        "text": "Blog"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "coco",
    "authorAvatar": "/avatar.png",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  markdown: {
    externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' },
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
    }
  },
  plugins: [
    ['autometa', autometa_options],
    ['sitemap', {
      hostname: "https://coco.hacksmeta.com",
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    }],
    [
      '@vuepress/medium-zoom',{}
    ],
    ['vuepress-plugin-readmore-popular', {
      // 已申请的博客 ID
      blogId: '56372-8803765894352-984',
      // 已申请的微信公众号名称
      name: '云上奇谭',
      // 已申请的微信公众号回复关键词
      keyword: 'coco',                    
      // 已申请的微信公众号二维码链接
      qrcode: '/qrcode-qi-on-cloud.png',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-reco-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      libUrl: 'https://qiniu.techgrow.cn/readmore/dist/readmore.js',
      // 自定义的 CSS 资源链接，可用于适配不同风格的博客
      cssUrl: 'https://qiniu.techgrow.cn/readmore/dist/vuepress.css',
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: ["/blogs/kubernetes/2021/", "/docs/cloud/"] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 是否添加微信公众号引流工具到移动端页面
      allowMobile: false,
      // 文章内容的预览高度(例如 300)
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 30,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 60,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1
    }]
  ]
}