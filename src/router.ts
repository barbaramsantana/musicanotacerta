import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Momento from './components/Momento.vue'
import Arquivo from './components/Arquivo.vue'
import DashHome from './components/DashHome.vue'
import Calendar from './components/Calendar.vue'

const routes = [
  { path: '/', name: 'DashHome', component: DashHome },
  { path: '/todas', name: 'Home', component: Home },
  { path: '/momento', name: 'Momento', component: Momento },
  { path: '/arquivo', name: 'Arquivo', component: Arquivo },
  { path: '/calendario', name: 'Calendar', component: Calendar },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router