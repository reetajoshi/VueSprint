import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import About from '../views/about.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', name: "about", component: About },
  {
    path: "/profile/:id",
    component: () => import('../views/profile/[id].vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
