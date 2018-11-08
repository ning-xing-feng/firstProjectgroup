<template>
  <div class="main">
    <img :src="detailFilms.cover.origin" alt="">
    <h2>影片简介</h2>
    <div class="filmInfo">
      <div class="director">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span>{{ detailFilms.director }}</span></div>
      <div class="actors">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：<span v-for="(item,index) in detailFilms.actors" :key="index">{{ item.name }} | </span></div>
      <div class="nation">地区语言：<span>{{ detailFilms.nation }}({{ detailFilms.language }})</span></div>
      <div class="category">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{ detailFilms.category }}</div>
      <div class="premiereAt">上映日期：{{ new Date(detailFilms.premiereAt).getMonth()+1 +'月' + new Date(detailFilms.premiereAt).getDate() + '日上映'}}</div>
      <div class="synopsis">{{ detailFilms.synopsis }}</div>
    </div>
    <router-link to="" class="buyTickets">立即购票</router-link>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      detailFilms : [],
      mztitle: ''
    }
  },
  methods: {
    getDetailFilms(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      var id = this.$route.params.id;
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/film/'+id)
        .then(result => {
          // console.log(result);
          var res = result.data;
          if(res.msg === 'ok') {
            this.detailFilms=res.data.film;
            this.mztitle=this.detailFilms.name;
            // console.log(this.mztitle);
            // console.log(this.detailFilms)
          }
        }).catch(error=>{
          console.log(error);
        })
    }
  },
  created () {
    this.getDetailFilms();
  },
  mounted () {
    // console.log(this.$route.params.id);
  }
}
</script>
<style scoped>
  .main{
    font-size: .12rem;
    background: #ebebeb;
    color: #333;
    padding-bottom: .2rem;
  }
  .main img{
    width: 100%;
  }
  .main h2{
    font-size: .16rem;
    font-weight: 100;
    padding-left: .04rem;
    margin: .16rem auto;
    border-left: 16px solid RGB(228, 200, 156);
  }
  .filmInfo{
    padding-left: .2rem;
  }
  .filmInfo>div {
    margin-bottom: .1rem;
  }
  .filmInfo .actors{
    /* display: flex; */
    overflow: hidden;
    white-space: nowrap;
    margin-right: .1rem;
  }
  .filmInfo .synopsis {
    padding-right: .2rem;
    margin-bottom: .3rem;
  }
  .buyTickets {
    display: flex;
    justify-content: center;
    width: 1.56rem;
    height: .36rem;
    border-radius: .18rem;
    background: #fe8233;
    line-height: .36rem;
    color: #FFF;
    font-size: .14rem;
    margin: 0 auto;
  }
</style>

