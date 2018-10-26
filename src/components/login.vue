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
        <form class="container_02">
            <div class="account_box">
                <font-awesome-icon icon="user" class="icon-cont02" />
                <input  placeholder="邮箱/手机号码/用户" class="input_box" v-model.trim="account" />
                <span class="tips" v-show="accountTipIsShow" style="color:red;">用户名不能为空</span> 
            </div>
            <div class="password_box">
                <font-awesome-icon icon="key" class="icon-cont02" />
                <input placeholder="密码" class="input_box" style="margin-top:10px;" v-model.trim="password"/>
                <span class="tips" v-show="passwordTipIsShow" style="color:red;">密码名不能为空</span>
                <span class="yzm"><a style="color:#e8380d;text-decoration:none;" href="#">手机验证码登录</a></span>
                <mt-button type="danger" class="btn_submit" @click="login">立即登录</mt-button>
                
            </div>
            
        </form>
            <div class="line_box"> 
                <span class="line"></span>
                <span class="text">其他方式登录</span>
                <span class="line"></span>
            </div>
            <div class="third-login">
                <label class="login-rem">
                    <a href="#" class="pic qq">
                    </a>
                    <a href="#" class=" pic weibo"></a>
                    <a href="#" class="pic alipay"></a>
                </label>
            </div>
            <div class="btn-bottom">
                <router-link :to="{name: 'register'}">
                    <span>去注册</span>
                </router-link>
                <span style="color:#ddd">|</span>
                <a href="#" class="fs2">忘记密码?</a>
            </div>
    </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
        account:'',
        password:'',
        accountTipIsShow: false,
        passwordTipIsShow: false
    }
    },
    methods: {
        login() {
            if(this.account === ''){
                this.accountTipIsShow = true;
            }else{
                this.accountTipIsShow = true;
            }

            if (this.password === '') {
                this.passwordTipIsShow = true;
            } else {
                this.passwordTipIsShow = true;
            }
            //账户密码匹配正确跳转到登录成功页面.
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container_01{
        width: 50%;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 40px;
    }
  .img-responsive{width:144px;height:23px;}
  .container_02{
        width: 75%;
        margin: 0 auto;
        padding: 0 1em;
  }
    .input_box{
        position: relative;
        line-height: 20px;
        padding: 10px 0 10px 30px;
        width: 80%;
        display: inline-block;
        font-size: 14px;
        margin-bottom: 12px;
        border-radius: 12px;
        color: #313131;
        border: 1px solid #ddd;
        background: #fff;
    }
    .icon-cont02{
        position: relative;left:32px;
        font-size:20px;z-index: 10;
    }
    .yzm{
        float:right;
        text-align: right;
        margin: 10px 0;
        margin-bottom: 15px;
    }
    .btn_submit{
        width: 92%;
        text-align: center;
        cursor: pointer;
        margin-bottom: 16px;
        display: block;
        font-size: 16px;
        min-height: 40px;
        line-height: 20px;
        padding: 10px;
        border-radius: 10px;
        margin-left:20px;
    }
    .line_box{
        height: 40px;
        width: 270px;
        background-color:#fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:20px auto;
    }
    .line{
        height: 1px;
        flex-grow: 1;
        background-color:#ccc;
    }
    .text {
        margin: 0 10px;
        font-size:16px;
    }
    .third-login {
        width:70%;
        overflow: hidden;
        margin: 5px auto;
	}
    .pic{
        display: inline-block;margin-right:20px; position:relative;left:60px;
    }
    .qq {
        background: url(/static/login_register/third_login_1.png) no-repeat 0 0;
        width: 35px;
        height: 35px;
        background-size: cover;
	}
    .weibo {
        background: url(/static/login_register/third_login_1.png) no-repeat -35px 0;
        width: 35px;
        height: 35px;
        background-size: cover;
    }

   .alipay {
        background: url(/static/login_register/third_login_1.png) no-repeat -70px 0;
        width: 35px;
        height: 35px;
        background-size: cover;
    }
    .btn-bottom {
        position: absolute;
        bottom: 80px;
        text-align: center;
        width: 100%;
        text-decoration:none;
        
    }
    a{text-decoration: none;color:#e8380d;}

</style>
