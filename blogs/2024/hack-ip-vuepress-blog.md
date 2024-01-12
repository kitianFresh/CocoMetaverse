---
title: hack-ip-vuepress-blog
date: 2024-01-06
tags:
 - vuepress
 - hackip
sidebar: 'auto'
publish: false
meta:
  - name: 个人IP主站站点打造
    content: 个人IP 站点 vuepress 折腾 SEO 引流
---

# 个人网站
vuepress

https://doc.xugaoyi.com/

# SEO系列
今年我决定重新捡起博客，第一是为了让自己持续输出和学习，第二是为了提升个人影响力，打造个人IP。

在我折腾这个新站点之前，也折腾过技术博客，遗憾的是之前对于流量SEO没有意识，写过一些文章，但是工作后就停止更新了，导致这些文章没有持续的产生价值，同时我自己也没有持续的输出。

网站SEO营销也是一门技术，输出有价值和好的产品文章只是基础，如果没有触达到更多的群体，那么价值的触达率就很低，因此，这个网站上线第一天，就把SEO也当做目标之一，准备一点点优化它。

## 工具
lighthouse是一个网页应用SEO优化工具，专门给你的网站打分，提供SEO优化建议，这样即使你什么都不懂，也能根据提供的建议，慢慢学习优化。
https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=zh

![lighthouse-seo](/images/blog/2024/hack-ip-vuepress-blog/lighthouse-seo.png)

## 降低外链统计权重
```js
module.exports = {
  	markdown: {
      externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
    }
}
```
## 404 页面优化

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false
  }  
}
```

## meta标签优化

npm install -D vuepress-plugin-autometa

```js
const autometa_options = {
  site: {
    name: 'coco',
    twitter: 'kinnyfly',
  },
  canonical_base: 'https://coco.hacksmeta.com',
};
module.exports = {
    plugins: [
    ['autometa', autometa_options]
    ]
}
```

## sitemap
npm install vuepress-plugin-sitemap

```js
module.exports = {
    plugins: [
    ['autometa', autometa_options],
    ['sitemap', {
      hostname: "https://coco.hacksmeta.com",
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    }]
    ]
}
    
```
生成的sitemap.xml网站地图，可以提交到搜索引擎的站长管理平台。比如提交到谷歌的站长管理平台。
![google-sitemap-submit](/images/blog/2024/hack-ip-vuepress-blog/google-sitemap-submit.png)

插件的更多配置可以参考[vuepress-plugin-sitemap](https://github.com/ekoeryanto/vuepress-plugin-sitemap)

## feed
npm install -D vuepress-plugin-feed
https://github.com/webmasterish/vuepress-plugin-feed

```js
// .vuepress/config.js
// or
// .vuepress/theme/index.js

// set your global feed options - override in page frontmatter `feed`
const feed_options = {
  canonical_base: 'https://coco.hacksmeta.com',
};

module.exports = {
  plugins: [
    [ 'feed', feed_options ]
  ]
}

```

## math
数学公式插件
```
npm install -D vuepress-plugin-mathjax
```

```js
// .vuepress/config.js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ],
}
```

## 百度自动推送
https://github.com/IOriens/vuepress-plugin-baidu-autopush/blob/master/README.md
npm install -D vuepress-plugin-baidu-autopush



## 搜索引擎收录网站
提交到各大搜索引擎的站长管理后台中
百度站长: https://ziyuan.baidu.com
```js
module.exports = {
  "title": "CocoMetaverse",
  "description": "可可的元宇宙，探索无限可能，分享云计算、人工智能、元认知迭代",
  "dest": "public",
  "head": [
    [
      "meta",
      {
        "name": "baidu-site-verification",
        "content": "xxx"
      }
    ]
  ]
}
```
![baidu-site-verification](/images/blog/2024/hack-ip-vuepress-blog/baidu-site-verification.png)

![baidu-site-verification-result](/images/blog/2024/hack-ip-vuepress-blog/baidu-site-verification-result.png)

Google: <https://search.google.com/search-console>
![google-site-verification](/images/blog/2024/hack-ip-vuepress-blog/google-site-verification.png)

Bing站长: https://www.bing.com/webmasters

搜狗搜索站长: https://zhanzhang.sogou.com/index.php/uc/index

神马搜索站长: https://zhanzhang.sm.cn/


## 网站性能优化
### 部署访问加速
github pages由于墙的原因，使用国内的域名直接绑定到github pages的CNAME地址访问非常慢，要么我们使用CDN进行加速，要么把网站托管到其他平台，这里可以选国内的coding pages，也可以选vercel。

下面是vercel的部署。vercel和github pages打通的比较好，切换非常丝滑。并且vercel在中国大陆有服务器，所以访问速度比github pages快多了。

直接用github登录vercel，就可以看到项目导入，导入要部署的项目。
![vercel-import-github-project](/images/blog/2024/hack-ip-vuepress-blog/image-0.png)
到setting里把branch分支改成 gh-pages, 就是项目部署发布在github pages的默认分支。
![vercel-image-1](/images/blog/2024/hack-ip-vuepress-blog/image-1.png)
build的部分不需要填写，因为使用的是已经构建好的分支。
![vercel-image-2](/images/blog/2024/hack-ip-vuepress-blog/image-2.png)
域名绑定，填写一个域名，这个域名需要到你购买注册域名的地方，比如腾讯云，去解析CNAME到vercel的地址。
![vercel-image-3](/images/blog/2024/hack-ip-vuepress-blog/image-3.png)
最后到部署页面，触发部署，就可以访问页面了。
![vercel-image-4](/images/blog/2024/hack-ip-vuepress-blog/image-4.png)
