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
          { text: 'templates', link: '/templates' },
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
          { text: 'button', link: '/components//button' },
          { text: 'Input', link: '/components//input' },
          { text: 'Input File', link: '/components//InputFile' },
          { text: 'Menu', link: '/components//menu' },
          { text: 'Tab', link: '/components//tab' },
          { text: 'Chat Bubble', link: '/components//ChatBubble' },
          { text: 'Loader', link: '/components//Loader' },
          { text: 'Card', link: '/components//Card' },
          { text: 'Switch', link: '/components//Switch' },
          { text: 'CheckBox', link: '/components//CheckBox' },
          { text: 'Divider', link: '/components//Divider' },
          { text: 'Stepper', link: '/components//stepper' },
          { text: 'List', link: '/components//list' },
          { text: 'Breadcrumb', link: '/components//breadcrumb' },
          { text: 'Progress Linear', link: '/components//ProgressLinear' },
          { text: 'Progress Circular', link: '/components//ProgressCircular' },
          { text: 'RangeSlider', link: '/components//RangeSlider' },
          { text: 'Radio Group', link: '/components//RadioGroup' },
          { text: 'Alert', link: '/components//alert' },
          { text: 'Radio', link: '/components//Radio' },
          { text: 'CountDown', link: '/components//CountDown' },
          { text: 'Date Picker', link: '/components//DatePicker' },
          { text: 'Date Range', link: '/components//DateRange' },
          { text: 'Skeleton', link: '/components//Skeleton' },
          { text: 'Carousel', link: '/components//Carousel' },
          { text: 'Combobox', link: '/components//Combobox' },
          { text: 'Drawer', link: '/components//Drawer' },
          { text: 'Expansion Panel', link: '/components//expansionPanel' },





        ]
      },
      {
        text: "templates",
        collapsed: true,
        link: '/templates',
        items: [
          { text: 'footer', link: '/templates//footer' },
          { text: 'Navbar', link: '/templates//Navbar' },
          { text: 'Form', link: '/templates//Form' },



        ]
      },
      {
        text: "Color",
        collapsed: true,
        link: '/Color',
        items: [
          { text: 'Colors', link: '/templates//Colors' },



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
  },
})