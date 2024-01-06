---
title: hack-ip-vuepress-blog
date: 2021-09-21
tags:
 - vuepress
 - hackip
sidebar: 'auto'
publish: false
meta:
  - name: 个人IP主站站点打造
    content: 个人IP 站点 vuepress 折腾 SEO 引流
---


# SEO系列
今年我决定重新捡起博客，第一是为了让自己持续输出和学习，第二是为了提升个人影响力，打造个人IP。

在我折腾这个新站点之前，也折腾过技术博客，遗憾的是之前对于流量SEO没有意识，写过一些文章，但是工作后就停止更新了，导致这些文章没有持续的产生价值，同时我自己也没有持续的输出。

网站SEO营销也是一门技术，输出有价值和好的产品文章只是基础，如果没有触达到更多的群体，那么价值的触达率就很低，因此，这个网站上线第一天，就把SEO也当做目标之一，准备一点点优化它。

## 工具
lighthouse是一个网页应用SEO优化工具，专门给你的网站打分，提供SEO优化建议，这样即使你什么都不懂，也能根据提供的建议，慢慢学习优化。
https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=zh

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

## feed
npm install -D vuepress-plugin-feed


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


Google: <https://search.google.com/search-console>
![google-site-verification](/images/blog/2024/hack-ip-vuepress-blog/google-site-verification.png)

Bing站长: https://www.bing.com/webmasters

搜狗搜索站长: https://zhanzhang.sogou.com/index.php/uc/index

神马搜索站长: https://zhanzhang.sm.cn/