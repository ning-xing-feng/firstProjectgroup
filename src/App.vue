<template>
  <div id="app">
    <div class="z-header">
      <div class="mz-header">
      <div class="header-left" @click="defaultNav = !defaultNav">
        <a class="listIcon">三</a>
        <a class="mtitle" :mtitle="mztitle">{{ mztitle }}</a>
      </div>
      <div class="header-right" @click="defaultNav = false">
        <a class="address">深圳</a>
        <router-link to="/mine" class="mine">我的</router-link>
      </div>
    </div>
    </div>
    <div class="content-mask" v-show="defaultNav" @click="defaultNav = false"></div>
    <transition>
      <div class="mz-nav" v-show="defaultNav">
        <ul class="navList">
          <li v-for="(item,index) in navList" :key="index" @click="defaultNav = false">
            <router-link :to="item.router">{{ item.name }}<i>></i></router-link>
          </li>
        </ul>
      </div>
    </transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultNav: false,
      navList: [
        {
          name: '首页',
          router: '/index'
        },
        {
          name: '影片',
          router: '/films'
        },
        {
          name: '影院',
          router: '/movies'
        },
        {
          name: '我的',
          router: '/mine'
        },
        {
          name: '卖座卡',
          router: '/outCard'
        },
      ],
      mztitle: '卖座电影'
    };
  },
  // props: {
  //   mtitle: {
  //     type: String,
  //     // default: "卖座电影"
  //   }
  // }
};
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
.z-header{
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
  border-right: 1px solid #222;
  box-shadow: 1px 0 1px #363636;
}
.mz-header .mtitle {
  padding: 0 0.14rem;
  color: #fff;
}
.mz-header .header-right {
  display: flex;
}
.mz-header .header-right .address {
  padding: 0 0.06rem;
}
.mz-header .header-right .mine {
  width: 0.5rem;
  text-align: center;
  color: #999;
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
  z-index: 2;
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

