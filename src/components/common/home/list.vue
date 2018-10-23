<template>
  <div :class="'list '+listData.class">
      <div class="row" :key="idx" v-for="(item,idx) in listData.data">
        <div class="cell" :key="i.id" v-for="i in item">
          <a href="#">
            <div class="img">
              <img :src="baseUrl+i.small_image" alt="">
            </div>
            <div class="describe text">
              <span class="title">{{i.title}}</span>
              <span class="slogan" v-html="i.sub_title"></span>
            </div>
            <div class="price text">
              <sup >&yen;</sup>
              <span>{{i.block_products.price}}元</span>
              <span class="line">|</span>
              <del>{{i.block_products.original_price}}</del>
            </div>
          </a>
        </div>
      </div>
      <div class="more">
        <a :href="listData.link.url">
          <span>{{listData.link.content}}&nbsp;&gt;</span>
        </a>
      </div>
    </div>
</template>

<script>

export default {
  name: 'list',
  props:['listData'],
  data () {
      return {
         baseUrl:'https://oss.static.nubia.cn/',
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
