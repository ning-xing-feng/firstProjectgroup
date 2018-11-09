<template>
  <div>
    {{ detailMovies.address }}
    {{ detailMovies.name }}
    {{ detailMovies.services }}
    {{ detailMovies.telephones }}
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data () {
    return {
      detailMovies : [],
      mztitle: '',
      origin:''
    }
  },
  methods: {
    getDetailMovies(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      // var id = this.$route.params.id;
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/cinema/8428')
        .then(result => {
          console.log(result);
          var res = result.data;
          if(res.msg === 'ok') {
            this.detailMovies=res.data.cinema;
            // this.origin=this.detailMovies.logoUrl;
            // console.log(this.mztitle);
            console.log(this.detailMovies);
          }
        }).catch(error=>{
          console.log(error);
        })
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
<style>

</style>
