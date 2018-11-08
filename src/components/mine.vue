<template>
 <div class="all">
    <div class="top_headerImg">
    <div class="top_headerImg_left">
      <img src="https://pic.maizuo.com/usr/default/maizuomoren66.jpg">
    </div>
    <div class="top_headerImg_right">
      <p class="phoneUser">手机用户:{{userNickName}}</p>
      <p class="ID">ID:<span>{{userPhone}}</span></p>
      <p class="back" @click="backIndex()"><a href="##">退出</a></p>
    </div>
    </div>
    <!-- 列表部分 -->
    <div class="content_list">
      <ul class="list">
        <li>
          <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>影票订单</span></div>
          <div class="list_right"><span>0</span>张   ></div>
        </li>
          <li>
            <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>影票待付订单</span></div>
            <div class="list_right"><span>0</span>张  ></div>
          </li>
          <li>
            <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>商城订单</span></div>
            <div class="list_right"><span>0</span>张   ></div>
          </li>
      </ul>
    </div>
    <div class="content_middle_list">
       <ul class="middle_list">
        <li class="list">
          <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>我的现金券</span></div>
          <div class="list_right"><span>0</span>张   ></div>
        </li>
         <li class="list">
          <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>我的现金券</span></div>
          <div class="list_right"><span>0</span>张   ></div>
        </li>
         <li class="list">
          <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>我的现金券</span></div>
          <div class="list_right"><span>0</span>张   ></div>
        </li>
      </ul>
    </div>
    <div class="content_list">
      <ul class="list">
        <li>
          <div class="list_left"><i class="iconfont icon-shenqingfapiao"></i><span>设置</span></div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axiox from 'axios';
import cookies from 'vue-cookies';
export default {
  data(){
    return{
      userNickName:'',//昵称
      userPhone:'',//手机号
    }
  },
 methods:{
    getContent(){
      const api_proxy = 'https://bird.ioliu.cn/v1/?url=';
      axiox.get(api_proxy+'https://m.maizuo.com/v4/api/me?__t=1541554315948')
      .then(result=>{
        console.log(result);
      })
    },
     getUser(){
       this.userNickName=cookies.get('userInfo').nickname;
       this.userPhone=cookies.get('userInfo').phone;
      console.log(cookies.get('userInfo'));
    }
  },
  mounted(){
    this.getContent();
    this.getUser();//获取cookie值
  },
  //点击退出时清除cookie值，退出到登录页面
  backIndex(){
    this.$router.push('/index');
    console.log(1);
  }
};
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
.top_headerImg {
  width: 100%;
  overflow: hidden;
  height: 1.52rem;
  background-color: #303030;
  color: #fff;
  padding: 0.36rem 0.12rem 0.24rem 10%;
  box-sizing: border-box;
  overflow: hidden;
}
.top_headerImg_left img {
  width: 0.92rem;
  height: 0.92rem;
  border-radius: 50%;
  margin-right: 0.14rem;
  float: left;
}
.top_headerImg_right {
  margin-top: 0.16rem;
  float: left;
}
.phoneUser {
  width: 2rem;
  font-size: 0.14rem;
}
.back a {
  font-size: 0.12rem;
  color: #ffbd80;
  text-decoration: underline;
}

/* 列表部分 */
.content_list {
  /* height: 1rem; */
  background: #ebebeb;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.content_list .list {
  width: 100%;
  overflow: hidden;
}
.content_list .list li {
  background: #fff;
  margin: 0.14rem 0;
  height: 0.6rem;
  padding: 0 0.12rem;
  box-sizing: border-box;
  line-height: 0.6rem;
}
.content_list .list li span {
  margin-top: 0.14rem;
  line-height: 0.35rem;
  display: block;
  float: left;
}
.icon-shenqingfapiao {
  font-size: 0.24rem;
  display: inline;
  color: #7bcdcc;
  margin-right: 0.1rem;
  /* float: left; */
}
.icon-youjiantou{
  line-height: .6rem;
  display: inline-block;
  margin-top: .05rem;
  font-size: .2rem;
}
.list_left {
  float: left;
}
.list_right {
  height: 100%;
  float: right;
  margin-right: .15rem;
}
.list_right span {
  color: #ffbd80;
  margin-right: 0.03rem;
}

.middle_list .list{
  width:100%;
  height: .6rem;
  /* line-height: .6rem; */
  align-items: center;
  padding-right: .3rem;
  padding-top: .15rem;
}
.middle_list .list{
  margin:0 .12rem;
  border-bottom: 1px solid #F0F0F0;
}
</style>

