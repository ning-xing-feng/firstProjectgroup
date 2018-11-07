<template>
  <div class="hello">
    <header class="header"></header>
    <h1>{{msg}}</h1>
    <router-link to="films">影院</router-link>
    <router-link to="index">主页</router-link>
    <router-link to="mine">在线</router-link>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 50px;
  width: 100%;
  background: #000;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  margin-left:15px;
}
a {
  color: #42b983;
}
</style>
