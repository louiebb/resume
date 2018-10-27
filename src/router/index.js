import Vue from 'vue'
import Router from 'vue-router'
import Project from '@/page/project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Project',
      component: Project
    }
  ]
})
