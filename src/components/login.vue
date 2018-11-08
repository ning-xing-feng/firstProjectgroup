<template>
  <div>
    <section class="login-view">
      <form>
        <div class="form-grop">
          <input type="text" placeholder="输入手机号" v-model="phone">
          <div class="input-bg"></div>
        </div>
        <div class="form-grop">
          <input type="password" placeholder="输入密码" v-model="password">
          <div class="input-bg"></div>
        </div>
        <button class="submit" @click="sub">登录</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    sub () {
      var phone = this.phone;
      var password = this.password;
      axios.post('/api/user/login',{
        phone: phone,
        password: password,
      }).then((result) => {
        if (result.data.code == 100) {
          this.$router.push('/index');
          var userInfo = {phone:phone,nickname:result.data.data};
          cookies.set('userInfo',userInfo);
        }
      })
    },
  }
}
</script>

<style scoped>
header {
  height: 0.5rem;
  line-height: 0.5rem;
  background: #282828;
  display: flex;
  justify-content: space-between;
  color: #999;
}
header h1 {
  display: flex;
  font-size: 0.14rem;
  font-weight: normal;
}
.nav {
  width: 0.48rem;
  text-align: center;
  border-right: 1px solid #222;
  box-shadow: 1px 0 1px #363636;
}
.login {
  color: #fff;
  padding: 0 0.1rem;
}
.h-right {
  display: flex;
  font-size: 0.14rem;
}
.city {
  padding: 0 0.06rem;
}
.user {
  width: 0.48rem;
  text-align: center;
}
.login-view {
  background: #f6f6f6;
  min-height: 100%;
  width: 100%;
  position: absolute;
}
.login-view form {
  padding: 0 0.31rem;
}
.form-grop {
  margin-top: 0.3rem;
  position: relative;
}
.form-grop input {
  border: 0;
  outline: none;
  background: #f6f6f6;
  width: 100%;
  height: 0.34rem;
  padding: 0.06rem 0.12rem;
  color: #555;
  font-size: 0.14rem;
  box-sizing: border-box;
}
.input-bg {
  position: absolute;
  top: 0.2rem;
  width: 100%;
  height: 0.12rem;
  border: 1px solid #c4c4c4;
  border-top: 0;
}
.submit {
  width: 1.63rem;
  background: #fe8233;
  color: #fff;
  font-size: 0.15rem;
  padding: 0.08rem 0.12rem;
  margin: 0.6rem auto;
  display: block;
  border: 0;
  outline: none;
  border-radius: 0.36rem;
}
</style>
