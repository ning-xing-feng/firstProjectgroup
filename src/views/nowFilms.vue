<template>
  <div>
    <ul class="nowFilms">
       <!-- <router-link :to="{ name: 'play', params: { name: item.id }, query: { name: '张三', age: 18} }">{{ item.name }}</router-link> -->
      <li v-for="(item,index) in nowFilms"
        :key="index">
        <!-- <router-link to="{ name: 'detailFilms', params: { id: item.id }"> -->
        <router-link :to="'detailFilms/' + item.id">
          <img :src="item.cover.origin" alt="">
          <div class="nowBottom">
            <div class="filmsLeft">
              <p class="filmname">{{ item.name }}</p>
              <p class="count">
                <span class="cinemaCount">{{ item.cinemaCount }}家影院上映</span>
                <span class="watchCount">{{ item.watchCount }}人购票</span>
              </p>
            </div>
            <div class="filmGrade">{{ item.grade }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      nowFilms : []
    }
  },
  methods: {
    getNowFilmsList(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/film/now-playing?__t=1541497592704&page=1&count=5')
        .then(result => {
          // console.log(result);
          var res = result.data;
          if(res.msg === 'ok') {
            this.nowFilms=res.data.films;
            // console.log(this.nowFilms)
          }else{

          }
        }).catch(error=>{
          console.log(error);
        })
    }
  },
  created () {
    this.getNowFilmsList();
  }
}
</script>
<style scoped>
  .main{
    background: #EBEBEB;
  }
  .nowFilms {
    padding: .17rem;
    padding-bottom: 0;
  }
  .nowFilms li{
    width: 3.41rem;
    margin-bottom: .17rem;
    background: #FFF;
  }
  .nowFilms li img{
    width: 100%;
  }
  .nowFilms li .nowBottom{
    padding: .05rem .15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .12rem;
  }
  .nowFilms li .nowBottom .filmname{
    color: #333;
    line-height: 1;
  }
  .nowFilms li .nowBottom .count{
    color: #9a9a9a;
  }
  .nowFilms li .nowBottom .filmGrade{
    color: #f78360;
    font-size: .2rem;
  }
</style>
