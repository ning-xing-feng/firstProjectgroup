<template>
    <div class="film-list">
       <ul class="films-form">
           <li v-for='(item,index) in jock'  
           :key='index'>
           <router-link :to="/detailFilms/ + item.id" class="film_info">
               <img :src="item.poster.origin" alt="">
               <div class="info_right">
                  <p> <span class='filmName'>{{ item.name}}</span> <span class="gra"> 》 </span> </p>
                  <p> <span class="filmInfo">{{ item.intro}}</span></p>
                  <p><span class="premiereAt">{{ item.premiereAt}} </span> <span class="premiereAt">首映</span>  </p>  
                </div>
           </router-link>
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
        axios.get(api+'https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7')
          .then(result => {
            var res=result.data.data.films;
            console.log(result)

            for(var i=0;i<res.length;i++){
                var oDate = new Date(res[i].premiereAt)
                var oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth()+1,
                    oDay = oDate.getDate(),
                    oWeek=oDate.getDay(),
                    oHour = oDate.getHours(),
                    oMin = oDate.getMinutes(),
                    oSen = oDate.getSeconds(),
                    oTime =oMonth+'月'+oDay+'日 星期'+oWeek
                    res[i].premiereAt=oTime
            }
            console.log(oTime)
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
    overflow: hidden;
}
.filmName{
    float: left;
    color: #000;
    width: 80%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
}
.gra{
    float: right;
    line-height: 32px;
    color: #dce5ef;
    margin-right: 30px;
}
.filmInfo{
    float: left;
    color: #8e8e8e;
    font-size: 12px;
}
.premiereAt{
    float: left;
    margin-right: 20px;
    line-height: 24px;
    color: #ffb375;
    font-size: 12px;
}


</style>

