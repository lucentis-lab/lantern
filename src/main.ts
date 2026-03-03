import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { lantern } from './plugin'
import { defaultTheme, createTheme } from './themes'

const theme = createTheme(defaultTheme, {
  colors: {
    slate: {
      filled: {
        background: 'filled-slate-background',
      },
    },
  },
  size: {
    xl: 'size-xl',
    xs: 'size-xs',
  },
})

createApp(App)
  .use(lantern, {
    theme: defaultTheme,
    //otherOptions like defaultColor, defaultVariant etc
  })
  .mount('#app')
