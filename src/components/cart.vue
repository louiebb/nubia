<template>
  <div class="cart flexbox">
    <cart-fill v-show="data.length>0"></cart-fill>
    <cart-null v-show="data.length==0"></cart-null>
  <div class="bottom"></div>
  </div>
</template>

<script>
import CartFill from './common/cart/cartFill'
import CartNull from './common/cart/cartNull'

export default {
  name: 'cart',
  data () {
    return {
      data:[]
    }
  },
  components:{
    CartFill,CartNull
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
