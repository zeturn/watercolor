import DefaultTheme from 'vitepress/theme'
import HomePage from './HomePage.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp({ app })
    }
    app.component('HomePage', HomePage)
  },
}
