// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
// import '../../../../styles'
import './tailwind.postcss'
import Pagination from '../../../../ui/src/components/pagination/Ui.vue'
import { tooltip } from '../../../../ui/src/directives/TooltipDirective'
import Btn from '../../../../ui/src/components/button/Core.vue'
import Input from '../../../../ui/src/components/input/Core.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.directive('tooltipl', tooltip);
    app.component('Btn', Btn) 
    app.component('Pagination', Pagination)
    app.component('Input',Input)
    

  }
} satisfies Theme
