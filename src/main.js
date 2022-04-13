import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'


createApp(App)
  .use(router)
  .mount('#app')
