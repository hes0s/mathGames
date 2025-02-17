import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/mainPage.vue'
import MathQuiz from '../components/mathQuiz.vue'
import TakeTheNumber from '../components/takeTheNumber.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/quiz',
      name: 'Math',
      component: MathQuiz
    },
    {
      path: '/guess-the-number',
      name: 'Gues Game',
      component: TakeTheNumber
    }
  ],
})

export default router
