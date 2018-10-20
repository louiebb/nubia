<template>
    <div class="home">
        <div class="container_01">
            <router-link to='/'>
                <img
                    src="http://static.nubia.cn/mobile/images/m_logo.png"
                    alt="nubia_logo"
                    class="img-responsive">
            </router-link>
        </div>
        <form action="#" class="container_02">
            <input  placeholder="邮箱/手机号码/用户" class="input_box"/>
        </form>
    </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_01{width: 50%;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;}
  .nubia_logo{text-align:center;}
  .img-responsive{width:144px;height:23px;}
  .container_02{
    width: 75%;
    margin: 0 auto;
    padding: 0 1em;
    }
    .input_box{
    position: relative;
    line-height: 20px;
    padding: 10px;
    width: 100%;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 12px;
    border-radius: 12px;
    color: #313131;
    border: 1px solid #ddd;
    background: #fff;
    }
</style>
