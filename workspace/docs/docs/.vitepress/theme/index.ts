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

import CodeTabs from './components/CodeTabs.vue'
import 'highlight.js/styles/github.css';

import clickOutside from 'm-h-m-d/src/directives/clickOutSide';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(mhmd, { componentPrefix: '' })
    app.directive('click-outside', clickOutside)
    app.directive('tooltipl', tooltip)
    app.component('CodeTabs', CodeTabs)
    app.config.warnHandler = (msg, instance, trace) => {
      if (msg.includes('Property undefined was accessed during render')) {
        return;
      }
      console.warn(msg + trace);
    }
  }
} satisfies Theme
