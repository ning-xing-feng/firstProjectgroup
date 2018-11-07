<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      // nowFilms : []
    }
  },
  methods: {
    getNowFilmsList(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      var id = this.$route.params.id;
      axios.get(api_proxy+'https://m.maizuo.com/v4/api/film/'+id)
        .then(result => {
          console.log(result);
          // var res = result.data;
          // if(res.msg === 'ok') {
          //   this.nowFilms=res.data.films;
          //   // console.log(this.nowFilms)
          // }
        }).catch(error=>{
          console.log(error);
        })
    }
  },
  created () {
    this.getNowFilmsList();
  },
  mounted () {
    console.log(this.$route.params.id);
  }
}
</script>
<style>


</style>

