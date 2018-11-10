<template>
  <div id="app">
    <div class="z-header">
      <div class="mz-header">
      <div class="header-left" @click="defaultNav = !defaultNav">
        <a class="listIcon fa fa-bars"></a>
        <a class="mtitle">{{ mztitle }}</a>
      </div>
      <div class="header-right" @click="defaultNav = false">
        <router-link to="/city" class="address">{{ cityName }}<i class="fa fa-angle-down"></i></router-link>
        <router-link to="/mine" class="mine fa fa-user-o"></router-link>
      </div>
    </div>
    </div>
    <div class="content-mask" v-show="defaultNav" @click="defaultNav = false"></div>
    <transition>
      <div class="mz-nav" v-show="defaultNav">
        <ul class="navList">
          <li v-for="(item,index) in navList"
            :key="index"
            @click="defaultNav = false;">
            <router-link :to="item.router">{{ item.name }}<i class="fa fa-angle-right"></i></router-link>
          </li>
        </ul>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
import {mapState} from 'vuex'
export default {
  name: 'App',
    computed: {
    ...mapState([
      'hone',
      'file',
      'cinema',
      'center',
      'card',
      'login',
      'register'
    ])
  },
   data() {
    return {
      defaultNav: false,
      navList: [
        {
          name: '首页',
          router: '/index',
          mztitle: '卖座电影'
        },
        {
          name: '影片',
          router: '/films',
          mztitle: '卖座电影'
        },
        {
          name: '影院',
          router: '/movies',
          mztitle: '全部影院'
        },
        {
          name: '我的',
          router: '/mine',
          mztitle: '我的'
        },
        {
          name: '卖座卡',
          router: '/outCard',
          mztitle: '查询/绑定/激活卖座卡'
        }
      ],
      mztitle: '卖座电影',
      cityName: '深圳'
    };
  },
  methods:{
    getTitle () {
      var tit = window.location.hash
      // console.log(tit)
      console.log(tit.slice(2));
      if (tit.slice(2) === '') {
        tit = this.hone
      } else if (tit.slice(2) === 'index'){
        tit = this.hone
      } else if (tit.slice(2) === 'movies') {
        tit = this.cinema
        // console.log(tit);
      } else if (tit.slice(2) === 'outCard') {
        tit = this.card
      } else if (tit.slice(2) === 'mine') {
        tit = this.center
      } else if (tit.slice(2) === 'register') {
        tit = this.register
      } else if (tit.slice(2) === 'login') {
        tit = this.login
      } else {
        tit = this.file
      }
      this.mztitle = tit
    }
  },
  created(){
    this.cityName = cookies.get('cityNews').cityName;
    this.getTitle ();
  },
  updated () {
    this.cityName = cookies.get('cityNews').cityName;
    this.getTitle ();
  },
}
</script>
<style scoped>
@import '../static/css/layout.css';
@import '../static/css/font/iconfont.css';
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
.z-header {
  height: .5rem;
}
.mz-header {
  display: flex;
  justify-content: space-between;
  background: #282828;
  color: #999;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.14rem;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
}
.mz-header .header-left {
  display: flex;
}
.mz-header .listIcon {
  width: 0.5rem;
  height: 0.5rem;
  text-align: center;
  line-height: .5rem;
  border-right: 1px solid #222;
  box-shadow: 1px 0 1px #363636;
}
.mz-header .mtitle {
  padding: 0 0.14rem;
  color: #fff;
}
.mz-header .header-right {
  display: flex;
  align-items: center;
}
.mz-header .header-right .address {
  padding: 0 0.06rem;
  color: #999;
}
.mz-header .header-right .fa-angle-down{
  padding-left: .04rem;
}
.mz-header .header-right .mine {
  width: 0.5rem;
  text-align: center;
  color: #999;
  font-size: .16rem;
}
.content-mask {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0.5rem;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.mz-nav {
  height: 100%;
  width: 2.65rem;
  color: #999;
  position: fixed;
  left: 0;
  top: 0.5rem;
  z-index: 102;
}
.navList {
  height: 100%;
  background: #282828;
}
.navList li:first-child {
  border-top: 1px solid #222;
  box-shadow: 0 -1px 1px #363636;
}
.navList li {
  padding: 0 0.16rem;
  border-bottom: 1px dotted #333;
  align-items: center;
}
.fa-angle-right{
  line-height: .5rem;
  font-size: .18rem;
}
.navList li a {
  line-height: 0.5rem;
  color: #999;
  display: flex;
  justify-content: space-between;
}

</style>
<style scoped>
.v-enter {
  transform: translateX(-100%);
}

.v-enter-active {
  transition: transform 0.5s;
}

.v-leave-active {
  transition: transform 0.5s;
}

.v-leave-to {
  transform: translateX(-100%);
}
</style>

