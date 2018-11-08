<template>
  <div class="all">
      <div class="top_header">
      <router-link to='/city'>选择城市</router-link>
      <router-link to='/city'>深圳D</router-link>
    </div>
  <div class="city_list">
    <ul class="city_list_top">
      <li class="cities">GPS定位你所在的城市</li>
      <li>深圳</li>
      <li class="cities">热门城市</li>
      <li class="delCites">
        <span>北京</span>
        <span>上海</span>
        <span>广州</span>
        <span>深圳</span>
      </li>
      <li class="cities">按字母排序</li>
    </ul>
    <ul class="words">
      <li v-for="(item,index) in words"
      :key="index">{{item}}</li>
    </ul>
  </div>
  </div>
</template>
<script>


import axiox from 'axios';
export default {
  data(){
    return{
      words:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      everyArr:[],//每一字母所开头的城市
      allArr:[],//所有的以每一个字母开头的城市的集合
  }
  },
methods:{
    getContent(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axiox.get(api_proxy+'https://m.maizuo.com/v4/api/city?__t=1541556779061')
      .then(result=>{
        var res=result.data.data.cities;
        console.log(res);
        console.log(res[0].pinyin.charAt(0));
        for(var i=0;i<this.words.length;i++){//字母
          for(var j=0;j<res.length;j++){//data数据
            if(this.words[i]==res[j].pinyin.charAt(0)){//字母匹配
                this.everyArr.push(res[j]);
            }
          }
            this.allArr.push(this.everyArr);
            this.everyArr=[];
        }
        console.log(this.allArr);
      })
    }
  },
  mounted(){
    this.getContent();
  }
}
</script>
<style>
.all{
  width: 100%;
  overflow: hidden;
}
.top_header {
  width: 100%;
  height: 0.5rem;
  background: black;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 .2rem;
  line-height: .5rem;
  color: #ccc
}
.city_list{
  margin-top: .5rem;
}
.city_list_top li{
  height: .47rem;
  line-height: .47rem;
  padding-left: 15px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;

}
.cities{
  background-color: #ebebeb;
}
.delCites{
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding: 0 .2rem;
  box-sizing: border-box;
}
.delCites span{
  display: block;
  width: 25%;
  text-align: center
}
.words{
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #cccccc;
}
.words li{
  width: 25%;
  text-align: center;
  height: .47rem;
  line-height: .47rem;
  border-bottom: 1px solid #cccccc;
  font-size: .16rem;


}
</style>
