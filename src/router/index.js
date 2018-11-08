import Vue from 'vue'
import Router from 'vue-router'

import index from '../components/index.vue'
import films from '../components/films.vue'
import mine from '../components/mine.vue'
import FilmNow from '../components/film-now.vue'
import FilmSoon from '../components/film-soon.vue'
import movies from '../components/movies.vue'
import outCard from '../components/outCard.vue'
import city from '@/components/city.vue'
import detailFilms from '@/views/detailFilms.vue'
import register from '@/components/register.vue'
import login from '@/components/login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: index
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
          path:'',
          name:'FilmNow',
          component:FilmNow
        }
      ]
    },
    {
      path:'/mine',
      name: 'mine',
      component:mine
    },
    {
      path:'/movies',
      name: 'movies',
      component:movies
    },
    {
      path:'/outCard',
      name: 'outCard',
      component:outCard
    },
    {
      path:'/city',
      name:'city',
      component:city
    },
    {
      path:'/detailFilms/:id',
      name: 'detailFilms',
      component: detailFilms
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
