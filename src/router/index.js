import { createRouter, createWebHistory } from 'vue-router'
import morseVue from '@/views/morse.vue'
import ceaserVue from '@/views/ceaser.vue'
import vernamVue from '@/views/vernam.vue'
import tapVue from '@/views/tap.vue'
import ahmedVue from '@/views/ahmed.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: morseVue
  },
  {
    path: '/morse',
    name: 'morse',
    component: morseVue
  },
  {
    path: '/ceaser',
    name: 'ceaser',
    component: ceaserVue
  },
  {
    path: '/vernam',
    name: 'vernam',
    component: vernamVue
  },
  {
    path: '/tap',
    name: 'tap',
    component: tapVue
  },
  {
    path: '/ahmed',
    name: 'ahmed',
    component: ahmedVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
