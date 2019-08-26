// .vuepress/config.js
module.exports = {
   themeConfig: {
    logo: '/home/osboxes/.vuepress/.vuepress/dist/assets/img/caravel128.png',
    sidebar: [
	     '/',
		 'introduccion',
		 'comenzar',
		 'objects',
		 'structure',
		 'use',
		 'apendicea',
		 'apendiceb',
		 'apendicec'
		 /*'charts-math',
		 'custom-components'*/
	  ],
    sidebarDepth: 2,
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduccion', link: '/introduccion' },
      { text: 'Utilizacion', link: '/comenzar'},
      { text: 'Objects', link: '/objects'},
      { text: 'Structure', link: '/structure'} /*,
      { text: 'Charts And Math', link:'/charts-math'},
	  { text: 'Custom Components', link: '/custom-components'}*/
    ]
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: true },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 2,3] },
    config: md => {
      // use more markdown-it plugins!
      md.set({html: true})
      md.use(require("markdown-it-katex"));
      md.use(require('markdown-it-task-lists'));
      md.use(require("markdown-it-plantuml"));
      md.use(require("markdown-it-admonition"));
      // use for easy syntax mermaid diagrams
 
    }
  }
}
