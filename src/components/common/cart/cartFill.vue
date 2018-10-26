<template>
  <div class="cartFill flexbox">
    <div class="top">
      <nub-header :data="headerData"></nub-header>
    </div>
    <div class="container">
      <div class="content" style="height:1000px">
    </div>
    </div>
  </div>
</template>

<script>
import NubHeader from '../header'
import '../../../style/sass/cartFill.scss'
export default {
  name: 'cartFill',
  data () {
    return {
      headerData:{
        class:'header',
        title:'购物车',
        icon:{
          left:'chevron-left',
          right:'equals'
        }
      }

    }
  },
  components:{
    NubHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
