import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { lantern } from './plugin'
import { defaultTheme, createTheme } from './themes'

const theme = createTheme(defaultTheme, {
  colors: {
    slate: {
      filled: {
        background: 'bg-slate-800',
      },
    },
  },
})

createApp(App)
  .use(lantern, {
    theme: theme,
    //otherOptions like defaultColor, defaultVariant etc
  })
  .mount('#app')
