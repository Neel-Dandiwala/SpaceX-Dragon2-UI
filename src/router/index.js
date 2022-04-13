import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Fifth from '../views/Fifth.vue'
import Third from '../views/Third.vue'
import Fourth from '../views/Fourth.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  },
  {
    path: '/',
    name: 'First',
    component: First
  },
  {
    path: '/first',
    redirect: { name: 'First' }
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/fifth',
    name: 'Fifth',
    component: Fifth
  },
  {
    path: '/third',
    name: 'Third',
    component: Third
  },
  {
    path: '/fourth',
    name: 'Fourth',
    component: Fourth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
