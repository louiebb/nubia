<template>
  <div class="home container" id="home">
    <div class="header-home">
      <div class="left">
        <a href="#" :title="shopname" class="logo">
          <span><img src="https://static.nubia.cn/mobile/images/m-logo.png" style="width: 100%;"></span>
        </a>
      </div>
      <div class="tit"></div>
      <div class="right">
        <a href="/account" class="login login-in">
         <font-awesome-icon  icon="user" />
        </a>
      </div>
    </div>
    <mt-swipe class="gallery" :auto="6000">
      <mt-swipe-item class="nub-item" :key="item.id" v-for="item in data[501]">
        <a href=""></a>
        <img :src="baseUrl+item.small_image" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="advertisement">
      <div class="box">
        <div class="left" :key="item.id"  v-for="item in data[502]">
           <a href="#">
            <img :src="baseUrl+item.small_image" alt="">
           </a>
        </div>
        <div class="right">
          <div class="row" :key="item.id"  v-for="item in data[503]">
            <a href="#">
              <img :src="baseUrl+item.small_image" alt="">
            </a>
          </div>
          <div class="row" :key="item.id"  v-for="item in data[504]">
            <a href="#">
              <img :src="baseUrl+item.small_image" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <nub-ad :adData="{class:'ad',title:'热销机型',data:data[504]}"></nub-ad>

    <nub-list :listData="{class:'phone comm',link:{url:'#',content:'查看更多商品'},data:phone}"></nub-list>

    <nub-ad :adData="{class:'ad',title:'金选配件',data:data[508]}"></nub-ad>

    <nub-list :listData="{class:'accessory comm',link:{url:'#',content:'查看更多配件'},data:accessory}"></nub-list>
  </div>
</template>
<script>
import '../style/sass/home.scss'
import NubAd from "./common/home/ad"
import NubList from "./common/home/list"
export default {
  name: 'home',
  data () {
    return {
      baseUrl:'https://oss.static.nubia.cn/',
      shopname:'nubia商城',
      data:{
        506:[],
        505:[]
      },
    }
  },
  created () {
    this.$axios.get('/api/block?pageType=5').then( x => {
      if (x.data) {
      this.data = x.data.data
      }
    })


  },
  methods:{
    getSpecial(obj,num){
      let phoneList = [];
      for (let i = 0, len = obj.length; i < len; i+=num) {
          phoneList.push(obj.slice(i,i+num));
      }
      return phoneList;
    }
  },
  computed:{
    phone:{
      get(){
          return this.getSpecial(this.data[506],2);
      },
    },
    accessory:{
       get(){
          return this.getSpecial(this.data[505],2);
      },
    }
  },
  components:{
    NubAd,
    NubList
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
