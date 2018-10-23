<template>
  <div :class="adData.class">
      <div class="title">
        <span>{{adData.title}}</span>
        <div class="photobar" :key="item.id"  v-for="item in adData.data">
            <a href="#">
              <img :src="baseUrl+item.small_image" alt="">
            </a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ad',
  props:['adData'],
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
