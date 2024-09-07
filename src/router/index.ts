import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/home') {
//     next('/')
//   }
//   next()
// })

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
