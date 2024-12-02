// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './style.css'
// import '../../../../styles'
import './tailwind.postcss'
// import Pagination from '../../../../ui/src/components/pagination/Ui.vue'


import { pagination, modal, Button, input, menu, tab, list, tooltip ,ChatBubble,Divider, stepper,Card,Switch,CheckBox} from 'm-h-m-d'

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
    app.component('Button', Button)
    app.component('Pagination', pagination)
    app.component('modal', modal)
    app.component('Input', input)
    app.component('Menu', menu)
    app.component('Tab', tab)
    app.component('ChatBubble', ChatBubble)
    app.component('CheckBox', CheckBox)

    app.component('Card', Card)
    app.component('Divider', Divider)
    app.component('Switch', Switch)
    app.component('Stepper', stepper)
    app.component('List', list)
    app.directive('click-outside', clickOutside)
    app.directive('tooltipl', tooltip)

  }
} satisfies Theme
