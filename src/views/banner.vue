<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide" v-for="(item,index) in billboards" :key="index">
        <img src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg" alt="">
      </div> -->
      <div class="swiper-slide">
        <!-- <img :src="billboards[0].imageUrl" alt=""> -->
        <img src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import axios from 'axios';
export default {
  data () {
    return {
      billboards : []
    }
  },
  methods: {
    getbillboards(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/billboard/home?__t=1541508404536')
        .then(result => {
          // console.log(result);
          var res = result.data;
          if(res.msg === 'ok') {
            this.billboards=res.data.billboards;
            // console.log(this.billboards);
          }else{

          }
        }).catch(error=>{
          console.log(error);
        })
    }
  },
  created () {
  },
  mounted () {
    this.getbillboards();
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      observer: true,
      autoplayDisableOnInteraction: false,
      runCallbacksOnInit: true
    })
  }
}


</script>
<style scoped>
  .swiper-slide img{
    width: 100%;
    /* width: .3rem; */
  }
</style>
