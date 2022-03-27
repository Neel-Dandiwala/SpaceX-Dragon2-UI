import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'


createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app')
