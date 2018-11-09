<template>
  <div class="all">
      <div class="top_header">
      <router-link to='/city'>选择城市</router-link>
      <router-link to='/city'>深圳D</router-link>
    </div>
  <div class="city_list">
    <ul class="city_list_top">
      <li class="cities">GPS定位你所在的城市</li>
      <li class="GPSCity">{{ city }}</li>
      <li class="cities">热门城市</li>
      <li class="delCites">
          <span v-for="(item,index) in NoticeCites"
          :key="index"
          @click="getNoticeCities(item)">{{ item.name}}</span>


<!--         <router-link to='/index' tag='span'>北京</router-link>
        <router-link to='/index' tag='span'>上海</router-link>
        <router-link to='/index' tag='span'>广州</router-link>
        <router-link to='/index' tag='span'>深圳</router-link> -->
      </li>
      <li class="cities">按字母排序</li>
    </ul>
    <ul class="words">
      <li v-for="(item,index) in words"
      :key="index"
      @click="returnTop(item)">{{item}}</li>
    </ul>
  </div>
  <!-- 城市的按字母分类 -->
  <div index-city-list>
    <div class="data-reactid" v-for="(item,index) in wordsTwo"
    :key="index" >
      <div class="city-index-title" :id="item">{{item}}</div>
      <div>
      <div class="city-index-detail" >
        <div class="city-index-detailEvery" v-for="(item,cities) in allArrTwo[index]"
      :key="cities"
      @click="getCities(item)">{{item.name}}</div>
      </div>
      </div>
    </div>
  </div>

  </div>
</template>
<script>
import axiox from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      words: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      wordsTwo: [], //去空的字母
      everyArr: [], //每一字母所开头的城市
      allArr: [], //所有的以每一个字母开头的城市的集合
      allArrTwo: [], //去空的数
      city: "",
      cityname: "",
      NoticeCites: [
        {
          name: "北京",
          id: 12
        },
        {
          name: "上海",
          id: 11
        },
        {
          name: "广州",
          id: 13
        },
        {
          name: "深圳",
          id: 10
        }
      ]
    };
  },
  methods: {
    getContent() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      axiox
        .get(api_proxy + "https://m.maizuo.com/v4/api/city?__t=1541556779061")
        .then(result => {
          var res = result.data.data.cities;
          for (var i = 0; i < this.words.length; i++) {
            //字母
            for (var j = 0; j < res.length; j++) {
              //data数据
              if (this.words[i] == res[j].pinyin.charAt(0)) {
                //字母匹配
                this.everyArr.push(res[j]);
              }
            }
            this.allArr.push(this.everyArr);
            this.everyArr = [];
          }
          for (var i = 0; i < this.allArr.length; i++) {
            if (!this.allArr[i].length == 0) {
              this.allArrTwo.push(this.allArr[i]);
              this.wordsTwo.push(this.allArr[i][0].pinyin.charAt(0));
            }
          }
          console.log(this.wordsTwo);
          console.log(this.allArrTwo);
        });
    },
    // 获取城市定位
    getCityPosittion() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      axiox
        .get(
          api_proxy +
            "https://apis.map.qq.com/ws/location/v1/ip?ip=113.92.93.53&key=TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU"
        )
        .then(res => {
          this.city = res.data.result.ad_info.city;
          //将城市信息保存早cookie中
          var cityName = { cityName: this.city };
          console.log(res.data.result.ad_info.city);
        });
    },
    //获取城市id 信息
    getCities(item) {
      cookies.set("cityName", cityName);
      var cityName = { cityName: item.name, cityId: item.id };
      this.cityname = item.name;
      cookies.set("cityNews", cityName);
      console.log(cityName);
      this.$router.push("/index");
    },
    //实现锚点
    returnTop(index) {
      document.querySelector(`#${index}`).scrollIntoView(true);
    },
    //热门城市点击跳转，信息保存到cookie中
    getNoticeCities(item) {
      console.log(item);
      var cityName = { cityName: item.name, cityId: item.id };
      cookies.set("cityNews", cityName);
    }
  },
  mounted() {
    this.getContent();
    this.getCityPosittion();
  }
};
</script>
<style>
.GPSCity {
  color: #e29421;
}
.all {
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
  padding: 0 0.2rem;
  line-height: 0.5rem;
  color: #ccc;
}

.city_list_top li {
  height: 0.47rem;
  line-height: 0.47rem;
  padding-left: 15px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.cities {
  background-color: #ebebeb;
}
.delCites {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.delCites span {
  display: block;
  width: 25%;
  text-align: center;
}
.words {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #cccccc;
}
.words li {
  width: 25%;
  text-align: center;
  height: 0.47rem;
  line-height: 0.47rem;
  border-bottom: 1px solid #cccccc;
  font-size: 0.16rem;
}

/* 城市列表 */
.data-reactid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.city-index-title {
  width: 100%;
  padding-left: 15px;
  font-size: 14px;
  line-height: 40px;
  background-color: #ebebeb;
  margin-top: -1px;
}
.city-index-detail {
  display: flex;
  width: 3.75rem;
  background-color: #fff;
  flex-direction: row;
  flex-wrap: wrap;
}
.city-index-detail .city-index-detailEvery {
  width: 25%;
  font-size: 16px;
  line-height: 46px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  color: #838383;
  border-bottom: #ebebeb 1px solid;
}
</style>
