<template>
  <div class="user" >
    <router-link to="/login" >
        <mt-button type="default" @click.native="loginPage">user</mt-button>
    </router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'user',
  methods: {
    loginPage () {
      this.$router.push('/user/login')
    }
  },
  data () {
    return {
      msg: 'user'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
