import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import EventLayout from '../views/event/Layout.vue'
import Second from '../views/Second.vue'
import Fifth from '../views/Fifth.vue'
import Third from '../views/Third.vue'
import Fourth from '../views/Fourth.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import NProgress from 'nprogress'
import EventService from '../services/EventService.js'
import GStore from '../store'

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
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: to => {
      return EventService.getEvent(to.params.id) //"to" gives us the target route
        .then(response => {
          GStore.event = response.data
        })
        .catch(error => {
          console.log(error)
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: '/register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: '/edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
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
  }
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
