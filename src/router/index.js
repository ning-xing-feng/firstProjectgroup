import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '../components/index.vue'
import films from '../components/films.vue'
import mine from '../components/mine.vue'
import movies from '../components/movies.vue'
import outCard from '../components/outCard.vue'

// 自己添加
import detailFilms from '@/views/detailFilms.vue'

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


    // 改动
    {
      path:'/detailFilms/:id',
      name: detailFilms,
      component: detailFilms
    }
  ]
})
