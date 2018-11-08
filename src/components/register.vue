<template>
  <div>
    <header>
      <h1>
        <div class="nav">
          三
        </div>
        <div class="login">注册</div>
      </h1>
      <div class="h-right">
        <div class="city">城市</div>
        <div class="user">用户</div>
      </div>
    </header>
    <section class="login-view">
      <form>
        <div class="form-grop">
          <input type="text" placeholder="输入手机号" v-model="phone" @blur="regPhone">
          <div class="input-bg"></div>
          <p v-if="isPhone">请输入正确的手机号</p>
        </div>
        <div class="form-grop">
          <input type="password" placeholder="输入密码" v-model="password" @blur="regPassword">
          <div class="input-bg"></div>
          <p v-if="isPassword">请输入6-20位非空密码</p>
        </div>
        <div class="form-grop">
          <input type="password" placeholder="确认密码" v-model="pwd" @blur="isSame">
          <div class="input-bg"></div>
          <p v-if="isPwd">密码不一致</p>
        </div>
        <div class="form-grop">
          <input type="text" placeholder="输入昵称" v-model="nickname" @blur="regNickname">
          <div class="input-bg"></div>
          <p v-if="isNickname">昵称只能3-8个</p>
        </div>
        <button class="submit" @click="addUser">注册</button>
        <!-- <a href="javascript:;" @click="addUser">提交</a> -->
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      phone: '',
      password: '',
      nickname: '',
      pwd: '',
      isPhone: false,
      isPassword: false,
      isPwd: false,
      isNickname: false,
    }
  },
  methods: {
    addUser () {
      var phone = this.phone;
      var password = this.password;
      var nickname = this.nickname;
      axios.post('/api/user/addUser',{
        phone: phone,
        nickname: nickname,
        password: password
      }).then((result) => {
        if (result.data.code == 100) {
          this.$router.push('/login');
        }
      })
    },
    regPhone () {
      var reg = /^1[3578]\d{9}$/;
      if (!reg.test(this.phone)) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
        axios.get('/api/user/onlyUser',{
          params: {
            phone:this.phone
          },
        }).then((result) => {
          console.log(result);
          if (result.data.length != 0){
            alert('该用户已注册')
          }
        })
      }
    },
    regPassword () {
      var reg = /^\S{6,20}$/;
      if (!reg.test(this.password)) {
        this.isPassword = true;
      } else {
        this.isPassword = false;
      }
    },
    isSame () {
      if (this.password !== this.pwd) {
        this.isPwd = true;
      } else {
        this.isPwd = false;
      }
    },
    regNickname () {
      var reg = /^\S{3,8}$/;
      if (!reg.test(this.nickname)) {
        this.isNickname = true;
      } else {
        this.isNickname = false;
      }
    }
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
