<template>
<div class="films">
  <header>
    <title class="title-nav">三</title>
  </header>
  <nav>
     <router-link to="/films/film-now">正在上映</router-link>
      <router-link to="/films/film-soon">即将上映</router-link>
  </nav>
 <router-view></router-view>
</div>
</template>

<script>
export default {

};
</script>
<style>
header{
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
}
.title-nav{
  color: #999;
  width: 50px;
  height: 50px;
  border-right: 1px solid #222; 
}
nav{
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-self:center;
  border-bottom: 1px #fe6e00 solid;
  margin: 50px  auto 0;
}
a{
  flex: 1;
  color: #222;
  display: inline-block;
  line-height: 50px;
  font-size: 17px;
  text-decoration: none;
}
.router-link-active{
  color: #fe6e00;
  box-sizing: border-box;
  border-bottom: #fe6e00 solid 3px;
}

</style>


