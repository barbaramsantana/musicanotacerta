import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Momento from './components/Momento.vue'
import Tempo from './components/Tempo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tempo', name: 'Tempo', component: Tempo },
  { path: '/momento', name: 'Momento', component: Momento },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router