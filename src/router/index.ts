import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  routes,
  extendRoutes: (routes) => setupLayouts(routes)
})
// routes,
// routes
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
