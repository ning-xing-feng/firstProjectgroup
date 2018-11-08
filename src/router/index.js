import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import index from '../components/index.vue'
import films from '../components/films.vue'
import mine from '../components/mine.vue'
import FilmNow from '../components/film-now.vue'
import FilmSoon from '../components/film-soon.vue'
import movies from '../components/movies.vue'
import outCard from '../components/outCard.vue'
import detailFilms from '../components/detailFilms'

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
      //film的子路由
      children:[
        {
          //正在上影
          path:'film-now',
          name:'FilmNow',
          component:FilmNow
        },
        {
          //即将上影
          path:'film-soon',
          name: 'FilmSoon',
          component:FilmSoon
        },
        {
          path:'detailFilms/ :id',
          name:'detailFilms',
          component:detailFilms
        },
        {
          path:'',
          component:FilmNow
        }
      ]
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
    }
  ]
})
