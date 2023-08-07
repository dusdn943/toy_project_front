import { createRouter, createWebHistory } from 'vue-router'

import SignUpRouter from './signUp'

const routes = [
  ...SignUpRouter,

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
