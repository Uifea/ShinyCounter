import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import SetupHunt from '@/views/SetupHunt.vue'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/',
          name: 'main',
          component: MainPage
        },
        {
          path: '/setup',
          name: 'setup',
          component: SetupHunt
          
        }
      ]
})