/**
 * @description Set a router
 */
// Add libraries
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/**
 * @description Define routes or paths with component and key
 */
const routes = [
  {
    path: '/',
    component: () => import('../App.vue'),
    meta: {},
    children: [
      {
        path: "/",
        name: "login",
        component: () => import('../views/login/ViewLogin.vue'),
        meta: {}
      },
      {
        path: "/welcome",
        name: "welcome",
        component: () => import('../views/welcome/ViewWelcome.vue'),
        meta: {}
      }
    ]
  },
  // path in others cases
  { path: '*', redirect: '/' },
]

/**
 * @description Set a router to use
 */
const router = new Router({
  routes
})

export { router }