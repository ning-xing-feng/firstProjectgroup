import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '../components/index.vue'
import films from '../components/films.vue'
import mine from '../components/mine.vue'
import movies from '../components/movies.vue'
import outCard from '../components/outCard.vue'

import register from '@/components/register.vue'
import login from '@/components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/films',
      component:films,
    },
    {
      path:'/mine',
      component:mine
    },
    {
      path:'/movies',
      component:movies
    },
    {
      path:'/outCard',
      component:outCard
    },
    {
      path: '/register',
      component:register
    },
    {
      path: '/login',
      component:login
    }
  ]
})
