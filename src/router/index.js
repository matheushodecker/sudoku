import { createRouter, createWebHistory } from 'vue-router'
import Sudoku from '../components/Sudoku.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Sudoku',
      component: Sudoku
    }
  ]
})

export default router
