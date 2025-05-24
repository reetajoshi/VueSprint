import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import About from '../views/about.vue'
import Profile from '../views/profile/[id].vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/profile/:id', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
