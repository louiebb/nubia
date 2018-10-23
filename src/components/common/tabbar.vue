<template>
  <mt-tabbar :fixed="true" class="tabbar" v-model="selected">
  <mt-tab-item :id="tab.key" :key="tab.key" v-for="tab in tabs">
    <!-- <img slot="icon" src="../../assets/100x100.png"> -->
    <div class="icon">
       <router-link :to="tab.link" slot="icon" tag="span" class="iconfont">
        <font-awesome-icon  :icon="tab.iconfont" />
       </router-link>
    </div>
    {{tab.value}}
  </mt-tab-item>
</mt-tabbar>
</template>

<script>
// import '../../style/sass/tab.scss'
export default {
  name: 'tabbar',
  data () {
    return {
      selected: 'home',
      tabs: [
        {
          key: 'home',
          value: '首页',
          iconfont: 'home',
          link: '/home'
        }, {
          key: 'category',
          value: '分类',
          iconfont: 'list',
          link: '/category'
        }, {
          key: 'discover',
          value: '发现',
          iconfont: 'shopping-cart',
          link: '/discover'
        }, {
          key: 'cart',
          value: '购物车',
          iconfont: 'shopping-cart',
          link: '/cart'
        }, {
          key: 'user',
          value: '我的',
          iconfont: 'user',
          link: '/user'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tabbar {
  max-width: 720px;
  margin: 0px auto;
  z-index: 999;
  background: #f4f3ef;
  height: 1.386rem;
  margin: 0 auto;
  div.mint-tab-item-label{
    height: 100%;
  }
}

.icon {
  display: block;
  font-size: .666rem;
  text-align: center;
  height: .75rem;
  line-height: .75rem;
}
</style>
