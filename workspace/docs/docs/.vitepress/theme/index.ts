// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
// import '../../../../styles'
import './tailwind.postcss'
// import Pagination from '../../../../ui/src/components/pagination/Ui.vue'

import mhmd from 'm-h-m-d'
import { tooltip } from 'm-h-m-d'

import clickOutside from 'm-h-m-d/src/directives/clickOutSide';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(mhmd, { componentPrefix: '' })
    app.directive('click-outside', clickOutside)
    app.directive('tooltipl', tooltip)

  }
} satisfies Theme
