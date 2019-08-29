// .vuepress/config.js
module.exports = {
  locales: {
'/': { lang: 'es-ES'},
'/en/': { lang: 'en-US'}
  },
  base: '/Discovery-View/',
   themeConfig: {    
    logo: '/main.jpg',
      locales: {
      '/':{
    selectText: 'Lenguaje',
    label:'Español',
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
	  ],
    sidebarDepth: 2,
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Objects Dictionary', link: '/objects'},
      { text: 'System Structure', link: '/structure'}
    ]
  },

  '/en/':{
    selectText: 'Language',
    label:'English',    
    sidebar: [
	     '/en/',
		 '/en/introduction',
		 '/en/start',
		 '/en/objects',
		 '/en/structure',
		 '/en/uses',
		 '/en/appendixa',
		 '/en/appendixb',
		 '/en/appendixc'
	  ],
    sidebarDepth: 2,
    displayAllHeaders: false, // Default: false
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Objects Dictionary', link: '/en/objects'},
      { text: 'System Structure', link: '/en/structure'}
    ]
  }
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
}