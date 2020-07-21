import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInfo from '../components/UserInfo.vue'
import Survey from '../components/Survey.vue'
import LastPage from '../components/LastPage.vue'
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
  },
  {
    path: '/endSurvey',
    name: 'LastPage',
    component: LastPage
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
