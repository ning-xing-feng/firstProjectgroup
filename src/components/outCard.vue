<template>
  <div>
      <div class="content_list">
        <ul>
           <li class="content_listTwo" v-for="(item,index) in tabs"
          :key="index" @click="curTab=item.id"
          :class="{'current':curTab==item.id}"> {{item.name}}</li>
        </ul>
      </div>
      <div class="content_form">
        <div class="content_form_One" v-if="curTab=='outCard'">
          <div class="Every">
            <label>卡号：</label><input type="text" placeholder="请输入卡号">
            <div class="content_line"></div>
          </div>
          <div class="Every">
            <label>密码：</label><input type="text" placeholder="请输入密码">
             <div class="content_line"></div>
          </div>
        </div>
        <div class="content_from_Two" v-else-if="curTab=='elcCard'">
           <div class="Every">
            <label>卡号：</label><input type="text" placeholder="请输入卡号">
            <div class="content_line"></div>
           </div>
        </div>
      </div>
      <div class="btn">查询</div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      curTab: "outCard",
      tabs: [
        {
          id: "outCard",
          name: "卖座卡"
        },
        {
          id: "elcCard",
          name: "电子卖座卡"
        }
      ]
    };
  },
};
</script>
<style>
.current {
  border-bottom: 3px solid #fe8233;
  z-index: 10;
  color: #fe8233;
}
.top_header {
  width: 100%;
  height: 0.5rem;
  background: black;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
  overflow: hidden;
  position: fixed;
  top: 0;
}

.content_list ul {
  width: 100%;
  background-color: #fff;
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  font-size: 0.16rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #fe8233;
}
.content_list li {
  width: 50%;
  float: left;
  cursor: pointer;
  box-sizing: border-box;
}
.content_listTwo {
  border-right: 1px solid #fe8233;
}
.content_form {
  margin-top: 0.3rem;
  padding: 0 0.32rem;
}
.content_form .Every {
  margin-top: 0.3rem;
  font-size: 0.15rem;
  line-height: 0.34rem;
}
.Every input {
  border: none;
  outline: none;
}
.content_form label {
  font-weight: normal;
  line-height: 0.34rem;
  margin: 0 0.15rem 0 0.1rem;
  float: left;
}
.content_line {
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: #ccc;
  height: 0.05rem;
  margin-top: -0.05rem;
}
.btn {
  width: 1.6rem;
  margin: 0.25rem auto 0.3rem;
  border-radius: 0.18rem;
  background-color: #fe8233;
  height: 0.36rem;
  color: #fff;
  font-size: 0.14rem;
  line-height: 0.36rem;
  border: none;
  text-align: center;
  margin-top: 0.46rem;
}
</style>


