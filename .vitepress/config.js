// @ts-check

const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Growing Web 文档',
  lang: 'zh-CN',
  description: '可生长的前端构建工具',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    repo: pkg.repository,
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',

    nav: [{ text: '指引', link: '/guide/' }],

    sidebar: {
      // catch-all fallback
      '/': [
        {
          text: '指引',
          children: [
            {
              text: '介绍',
              link: '/guide/introduce',
            },
          ],
        },
      ],
    },
  },

  markdown: {
    anchor: {
      renderPermalink: require('./render-perma-link'),
    },
    config: (md) => {
      md.use(require('./markdown-it-custom-anchor'))
    },
  },
}
