<template>
<div class="cinema_list">
    <ul  >
        <li id="regin_header" @click="open()" 
        v-for="(item,index) in cinemas"
        :key='index' >
        <p class="region"> {{item}}</p>
         <div 
            v-for="(it,intr) in cinemaList"
            :key="intr"
            v-if="item===cinemaList[intr].district.name"
            id="div"
            class="cinemas_titie_list">
            <router-link :to="{ name: 'detailMovie', params: { id: it.id }}"
            tag="div"> 
                <div class="cinema-title"> {{it.name}} <i class="icon iconfont icon-zuowei"></i><i class="icon iconfont icon-tong"></i> </div>
                <div class="cinema-title-address">{{it.address}}</div>
                <div class="away">距离未知</div>
            </router-link>
        </div>
        </li>
    </ul>

</div>

</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'
const api = 'https://bird.ioliu.cn/v1/?url='
export default {
    data () {
        return{
                cinemaList:[],
                isShow:-1
        }
    },
    created () {
        var cityId=cookies.get('cityNews').cityId;
         axios.get(api+'https://m.maizuo.com/v4/api/cinema',{
             params:{
                 cityId:cityId
             }
         })
         .then(result=>{
             var res=result.data.data.cinemas;
             this.cinemaList=res;
         })
    },
    methods:{
        open (e){
        
            var li=document.getElementById('regin_header')
            var p=document.getElementsByClassName('region')
            var div =document.getElementById('div')
         
                var e =e ||event
                var target=e.target
                //console.log(target.nodeName)
                if (target.getAttribute('class')==='region') {
                    if(target.parentNode.children[1].className=="cinemas_titie_list"){
                        target.parentNode.children[1].setAttribute('class','cinemas_list')
                    }else if(target.parentNode.children[1].className=="cinemas_list"){
                        target.parentNode.children[1].setAttribute('class','cinemas_titie_list')
                    }
                } 
        }

    },
    computed : {
          cinemas (){
            var cinemainfo=this.cinemaList
            var cinemaArr=[];
            for(var i =0;i<cinemainfo.length;i++){
                 if(cinemaArr.indexOf(cinemainfo[i].district.name)== -1){
                        cinemaArr.push(cinemainfo[i].district.name)
                  }
            }
             return cinemaArr
          }
    }
}
</script>



<style>
.cinema_list{
    height: 100%;
    background: #ebebeb;
}
.region{
    /* height: .5rem; */
    color: #636363;
    padding-left:0.16rem ;
    line-height: 0.4rem;
    background: #e1e1e1;
    border-bottom: 0.01rem solid #ffffff;
}
.cinemas_titie_list{
    display: none;
}
 .cinemas_list{
    display: block !important; 
    padding: 0.1rem 0 0.12rem 0.16rem;
    border-bottom: 0.01rem solid #e1e1e1;
    background: #ffffff;
}
.cinema-title{
    height: 0.3rem;
    line-height: 0.3rem;
    width: 50%;
    color: #333;
    font-size: 0.15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.cinema-title-address,.away{
    font-size: 0.12rem;
    line-height: 0.2rem;
    color: #ccc;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}
.icon-zuowei{
    color: #ec5323;
    font-size: 0.25rem;
    margin-top:0.05rem;
    line-height: 0.3rem;
    position: relative;
    top: 0.008rem;
}
.icon-tong{
    color: #2196f3;
    font-size: 0.3rem;
    margin-top:0.05rem;
    line-height: 0.3rem;
    position: relative;
    top: 0.02rem;
}
</style>

