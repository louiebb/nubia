<template>
  <div class="user" >
    <router-link :to="{name: 'login'}">
      <mt-button type="default">{{msg}}</mt-button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'user',
  methods: {
  },
  data () {
    return {
      msg: '登录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
