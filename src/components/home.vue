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
    <div class="gallery"></div>
    <div class="advertisement"></div>
    <div class="list phone"></div>
    <div class="list other">
          <router-link :to="{name: 'accessory'}">
            <mt-button type="default"><span>查看更多配件</span></mt-button>
          </router-link>
    </div>
  </div>
</template>
<script>
import '../style/sass/home.scss'
export default {
  name: 'home',
  data () {
    return {
      shopname:'nubia商城',
      data:[]
    }
  },
  created () {
    this.$axios.get('/api/block?pageType=5').then( x => {
      if (x.data) {
      this.data = x.data.data
      console.log(this.data);

      }
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
