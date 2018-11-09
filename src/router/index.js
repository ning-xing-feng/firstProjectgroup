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
import detailMovie from '@/views/detailMovie.vue'
import cookies from 'vue-cookies'

Vue.use(Router)

 const router =  new Router({
  routes: [
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/films',
      // name: 'films',
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
          component:FilmNow
        }
      ]
    },
    {
      path:'/mine',
      name: 'mine',
      meta: { needLogin: true },
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
    },
    {
      //正在上影
      path:'/detailMovie/:id',
      name:'detailMovie',
      component:detailMovie
    },
    {
      path: '',
      redirect: '/index'
    },
  ]
})
router.beforeEach(function (to, from, next) {
  /* console.log(to)
  console.log(document.cookie.username) */
  if (to.meta.needLogin) {
    if (cookies.get('userInfo')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router;
