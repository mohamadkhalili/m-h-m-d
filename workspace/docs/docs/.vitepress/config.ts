import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MHMD",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Learn',
        items: [
          { text: 'Components', link: '/components' },
          { text: 'API', link: '/api' }
        ]
      }
    ],

    sidebar: [

      {
        text: "Components",
        collapsed: true,
        link: '/components',
        items: [
          { text: 'pagination', link: '/components//pagination' },
          { text: 'modal', link: '/components//modal' },
          {text:'button',link:'/components//button'},
          {text:'input',link:'/components//input'},
          {text:'Menu',link:'/components//menu'},
          {text:'Tab',link:'/components//tab'},
          {text:'Chat Bubble',link:'/components//ChatBubble'},
          {text:'Card',link:'/components//Card'},
          {text:'Switch',link:'/components//Switch'},
          {text:'CheckBox',link:'/components//CheckBox'},
          {text:'Divider',link:'/components//Divider'},
          {text:'Stepper',link:'/components//stepper'},
          {text:'List',link:'/components//list'}
        ]
      },
      
      {
        text: "API",
        collapsed: true,
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mohamadkhalili/m-h-m-d' }
    ]
  }
})
