<template>
  <div class="cart flexbox">
    <cart-fill v-show="data.length>0"></cart-fill>
    <cart-empty v-show="data.length==0"></cart-empty>
  <div class="bottom"></div>
  </div>
</template>

<script>
import CartFill from './common/cart/cartFill'
import CartEmpty from './common/cart/cartEmpty'

export default {
  name: 'cart',
  data () {
    return {
      data:[1]
    }
  },
  components:{
    CartFill,CartEmpty
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
