<template>
  <div class="home" id="home">
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
      <!-- <div class="nub-item" v-for="item in data[501]" :key="item.id">
          <img :src="baseUrl+item.small_image" alt="">
      </div> -->
    </div>
    <div class="list phone"></div>
    <div class="list other"></div>
  </div>
</template>
<script>
import '../style/sass/home.scss'
export default {
  name: 'home',
  data () {
    return {
      baseUrl:'https://oss.static.nubia.cn/',
      shopname:'nubia商城',
      data:[]
    }
  },
  created () {
    this.$axios.get('/api/block?pageType=5').then( x => {
      if (x.data) {
      this.data = x.data.data
      console.log(this.data[501]);
      }
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
