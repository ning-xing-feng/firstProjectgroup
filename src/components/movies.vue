<template>
<div class="cinema_list">
    <ul id="regin_header" >
        <li v-for="(item,index) in cinemas"
        :key='index'  >
        <p class="region" @click="open()"> {{item}}</p>
            <router-link to="/movies"
            tag="div"
            v-for="(it,intr) in cinemaList"
            :key="intr"
            v-if="item===cinemaList[intr].district.name"
            class="region_cinemas"
            v-show="isShow">
            <p class="cinema-title"> {{it.name}}</p>
            <p class="cinema-title-address">{{it.address}}</p>
            <p class="away">距离未知</p>
            </router-link>
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
            isShow:false
        }
    },
    created () {
        console.log(cookies.get('cityNews'));
        var cityId=cookies.get('cityNews').cityId;
        console.log(cityId)
         axios.get(api+'https://m.maizuo.com/v4/api/cinema',{
             params:{
                 cityId:cityId
             }
         })
         .then(result=>{
             console.log(result);
             var res=result.data.data.cinemas;
             this.cinemaList=res;
             console.log(this.cinemaList)
         })
    },
    methods:{
        open (e){
            var e =e ||event
            var target=e.target;
            this.isShow = !this.isShow;
            if (target.nodeName.toLowerCase() === 'p'){
                console.log(target.lastChild)

                console.log(this.isShow);

                // parentNode.className.search(childName)
            }

            // var ul=document.getElementById('regin_header')
            // ul.onclick = function(e){
            //     var e =e ||event
            //     var target=e.target
            //     //console.log(target.nodeName)
            //     if (target.nodeName.toLowerCase() == 'li') {
            //         console.log(2)
            //     }
            //  }
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
             console.log(cinemaArr)
             return cinemaArr
            // cinemainfo.forEach(function(item,index,array){
            //     if(cinemainfo.indexOf(item.district.name,index+1)==-1){
            //         cinemaArr.push(item.district.name)
            //     }
            // })
            // return cinemaArr
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
.region_cinemas{
    background: #ffffff;
    padding: 0.1rem 0 0.12rem 0.16rem;
    border-bottom: 0.01rem solid #e1e1e1;
}
.cinema-title{
    line-height: 0.3rem;
    width: 50%;
    font-size: 0.16rem;
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
</style>

