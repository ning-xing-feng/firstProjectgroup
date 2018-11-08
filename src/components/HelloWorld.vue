<template>
    <nav>
      <router-link to='mine'>我的</router-link>
      <router-link to ='outCard'>卡片</router-link>
    </nav>
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

</style>
