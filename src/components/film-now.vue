<template>
    <div class="film-list">
       <ul class="films-form">
           <li v-for='(item,index) in jock'  
           :key='index'>
           <div class="film_info">
               <img :src="item.poster.origin" alt="">
               <div class="info_right">
                  <p> <span class='filmName'>{{ item.name}}</span> <span class="grade">{{ item.grade}}  </span> </p>
                  <p> <span class="filmInfo">{{ item.intro}}</span></p>
                  <p><span class="filmCount">{{ item.watchCount}} 家影院上映</span> <span class="watchCount">{{ item.cinemaCount}} 买过</span></p>  
                </div>
           </div>
           
           
           
           </li>
       </ul>
    </div>
</template>
<script>
import axios from 'axios'
const api = 'https://bird.ioliu.cn/v1/?url='
export default {
    data (){
        return{
            jock:[]
        }
    },
    created () {
        axios.get(api+'https://m.maizuo.com/v4/api/film/now-playing?page=1&count=14')
          .then(result => {
            var res=result.data.data.films;
            console.log(result)
            this.jock=res;
          })
    }
}
</script>
<style>
.films-form li{
    list-style: none;
    width: 90%;
    margin: 0 auto;
    height: 125px;
    border-bottom: 1px #c9c9c9 dashed;

}

.film_info{

    padding: 20px 0;
    display: flex;
    
}
.info_right{
    width: 100%;
}
img{
    width: 60px;
    height: 100%;
}
p{
    text-align: start;
    margin-left: 15px;
    line-height: 32px;
    overflow: hidden
}
.filmName{
    float: left;
    line-height: 32px;
    color: #000;
}
.grade{
    float: right;
    line-height: 32px;
    color: #fc7103;
    margin-right: 30px;
}
.filmInfo{
    float: left;
    color: #8e8e8e;
    font-size: 12px;
}
.filmCount,.watchCount{
    float: left;
    margin-right: 20px;
    line-height: 24px;
    color: #8e8e8e;
    font-size: 12px;
}

</style>

