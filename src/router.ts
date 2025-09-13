import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Momento from './components/Momento.vue'
import Arquivo from './components/Arquivo.vue'

const routes = [
  { path: '/', name: 'Arquivo', component: Arquivo },
  { path: '/todas', name: 'Home', component: Home },
  { path: '/momento', name: 'Momento', component: Momento },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router