<template>
  <div class="cinemaDetail">
    <img src="../assets/cinema.png" alt="" class="banner">
    <ul class="detailInfo">
      <li v-for="(item,index) in cinemaInfo"
        :key="index">
        <i :class="'icon fa fa-'+item.icon"></i>
        <div class="infoRight">
          <div>
            <h2>{{ item.h2 }}</h2>
            <p>{{ item.h2Info }}</p>
          </div>
          <div class="btn" v-if="item.btn">{{ item.btn }}</div>
        </div>
      </li>
    </ul>
    <ul class="services">
      <li v-for="(item,index) in services"
        :key="index"
        :class="{'active': active === item.name}"
        @click="getContent(item.name,item.description)">
        <i :class="{'current': active === item.name,'icon fa fa-film':true} "></i>
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
    <div class="content">{{ content }}</div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      detailMovies : [],
      mztitle: '',
      services: [],
      cinemaInfo: [
        {
          icon:'wheelchair-alt',
          h2: '订座票',
          h2Info: '选好场次及座位，到影院自助取票',
          btn: '立即订座'
        },
        {
          icon:'ticket',
          h2: '通兑票',
          h2Info: '有效期内到影院前台兑换影票',
          btn: '立即订票'
        },
        {
          icon:'location-arrow',
          h2: '',
          h2Info: '',
          // btn: ''
        },
        {
          icon:'phone',
          h2: '',
          h2Info: '',
          // btn: ''
        },
      ],
      active: '',
      content: ''
    }
  },
  methods: {
    getDetailMovies(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      var id = this.$route.params.id;
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/cinema/' + id)
        .then(result => {
          // console.log(result);
          var res = result.data;
          if(res.msg === 'ok') {
            this.detailMovies=res.data.cinema;
            this.services=res.data.cinema.services;
            this.cinemaInfo[2].h2 = this.detailMovies.address;
            this.cinemaInfo[3].h2 = this.detailMovies.telephones[0];
            this.active = res.data.cinema.services[0].name;
            this.content = res.data.cinema.services[0].description;
            console.log(this.services);
          }
        }).catch(error=>{
          console.log(error);
        })
    },
    getContent(name,content){
      this.active = name;
      this.content = content;
    }
  },
  created () {
    this.getDetailMovies();
  },
  mounted () {
    // console.log(this.$route.params.id);
  }
}
</script>
<style scoped>
  .cinemaDetail{
    width: 100%;
    overflow: hidden;
    background: #EBEBEB;
  }
  .cinemaDetail .banner{
    width: 100%;
  }
  .cinemaDetail .detailInfo li{
    width: 100%;
    display: flex;
    height: 1.15rem;
    padding: 0 .17rem;
    justify-content: flex-start;
    align-items: center;
  }
  .cinemaDetail .detailInfo li .icon{
    margin-right: .17rem;
    font-size: .3rem;

  }
  .fa-wheelchair-alt{
    color: #ff8160;
  }
  .fa-ticket{
    color: #40b5b5;
  }
  .fa-location-arrow{
    color: #40b5b5;
  }
  .fa-phone{
    color: #df8f9f
  }
  .cinemaDetail .detailInfo{
    margin-bottom: .15rem;
    background: #F9F9F9;
  }
  .cinemaDetail .detailInfo li .infoRight{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #d6d6d6 dotted;
    flex: 1;
    height: 100%;
    align-items: center;
  }
  .infoRight>div h2{
    font-size: .15rem;
    font-weight: 100;
    color: #000;
    margin-bottom: .08rem;
    line-height: .2rem;
  }
  .infoRight>div p{
    font-size: .13rem;
    color: #737373;
  }
  .infoRight>div.btn{
    height: .34rem;
    width: .94rem;
    line-height: .34rem;
    color: #FFF;
    background: #fe8233;
    text-align: center;
    border-radius: .17rem;
    font-size: .13rem;
  }
  .services{
    display: flex;
    padding: 0 .17rem;
    background: #F9F9F9;
    height: .8rem;
    align-items: center;
  }
  .services li{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-bottom: 1px #d6d6d6 dotted;
    color: #d6d6d6;
  }
  .icon{
    font-size: .3rem;
  }
  .services li .name{
    color: #737373;
  }
  .content{
    height: .5rem;
    background: #F9F9F9;
  }
  .current{
    color: #fe8233;
  }
  .services .active{
    border-bottom: .03rem solid #fe8233;
  }
  .content{
    font-size: .13rem;
    color: #737373;
    padding: 0 .17rem;
    overflow: auto;
    padding-bottom: .17rem;
  }
</style>
