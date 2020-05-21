import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInfo from '../components/UserInfo.vue'
import Survey from '../components/Survey.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserInfo',
    component: UserInfo
  },
  {
    path: '/survey',
    name: 'Survey',
    component: Survey
  }
]

const router = new VueRouter({
  routes
})

export default router
