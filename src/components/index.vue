<template>
  <div class="main">
    <banner class="banner"></banner>
    <nowFilms></nowFilms>
    <router-link :to="{ name: 'films'}"  class="moreNowFilms" tag="div">更多电影即将上映</router-link>
    <div class="line"></div>
    <div class="upcomingWord">即将上映</div>
    <upcommingFilms></upcommingFilms>
    <router-link :to="{ name: 'films'}"  class="moreNowFilms" tag="div">更多电影即将上映</router-link>
  </div>
</template>

<script>
import banner from '../views/banner.vue';
import nowFilms from '../views/nowFilms.vue';
import upcommingFilms from '../views/upcommingFilms.vue';
export default {
  components: {
    nowFilms,
    upcommingFilms,
    banner
  },
  methods: {

  }
}
</script>

<style scoped>
  .main {
    background: #EBEBEB;
    padding-bottom: .3rem;
  }
  .main .banner {
    width: 100%;
  }
  .main .moreNowFilms{
    width: 1.6rem;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    margin: 0 auto;
    border: 1px solid #aaa;
    color: #616161;
    border-radius: .15rem;
    font-size: .12rem;
  }
  .main .line {
    border-top: 1px solid #a8a8a8;
    margin: .3rem 0;
    position: relative;
  }
  .main .upcomingWord{
    margin: 0 auto;
    margin-top: -.4rem;
    height: .2rem;
    width: .7rem;
    background: #a7a7a7;
    color: #eee;
    font-size: .12rem;
    line-height: .2rem;
    text-align: center;
    border-radius: .05rem;
  }
</style>
