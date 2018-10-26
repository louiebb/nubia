<template>
    <div class="register">
        <div class="layout" >
            <h2>手机号注册</h2>
            <hr>
            <div class="input_box input_mobile" >
                <input type="number"  class="con_inputbox" v-model="phone"  placeholder="请输入您的手机号码" @input="testIsPhone">
                <font-awesome-icon icon="times" class="icon-times" @click="deleteNumber" v-show="phoneIsShow"/>
                <span class="mobiletips" v-show="mobileTipIsShow" style="color:red;">手机号码格式不正确</span>
            </div>
            <div class="input_box input_password">
                <input type="text" v-model="pwd" class="con_inputbox"  @input="testIsPwd" placeholder="6-16个字符(数字、字母、符号至少包含两种)" v-if="!iconEyeIsshow">
                <font-awesome-icon icon="eye-slash" class="icon-eye" v-if="!iconEyeIsshow" @click="showPwd"/>
                <input type="password" v-model="pwd" class="con_inputbox" @input="testIsPwd" placeholder="6-16个字符(数字、字母、符号至少包含两种)" v-if="iconEyeIsshow" >
                <font-awesome-icon icon="eye" class="icon-eye"  v-if="iconEyeIsshow"  @click="showPwd"/>
                <span class="passwordtips" v-if="passwordTipIsShow" style="color:red;">密码格式不正确</span>
            </div>
            <div class="input_box " style="width:60%;">
                <input type="text" class="con_inputbox" placeholder="请输入图片验证码">
                <div class="yzm_box" style="position:relative;">
                    <input class="yzm" type="button" id="code" @click="getYzm" v-model="yzm" />
                </div>
            </div> 
            <div class="input_box " style="width:60%;">
                <input type="text" class="con_inputbox" placeholder="请输入手机验证码">
            </div>
            <div class="btn_box" style="position:relative;">
               <mt-button type="danger" class="btn_send" @click.native="sendPhoneYzm">发送验证码</mt-button> 
            </div>
            <p class="tips_title" style="font-size:12px;text-align:center;">注册即表示您同意遵守努比亚帐户的
                <a href="#" class="first agreement" >用户协议</a>和
                <a href="#" class="first agreement">隐私协议</a>
            </p>
            <div class="register_box">
                <mt-button type="danger" class="btn_register" >
                    <router-link :to="{name: 'register'}"><span style="color:#fff;">去注册</span></router-link>
                </mt-button>
            </div>
        </div>
       

    </div>
</template>

<script>
    import Vue from 'vue';


    export default {
        name: 'register',
        data() {
            return {
                phone:'',
                pwd:'',
                yzm:'',
                phoneIsShow:false,
                iconEyeIsshow:false,
                mobileTipIsShow:false,
                passwordTipIsShow:false,
            }
        },
        methods:{
            deleteNumber(){
                this.phone = '',
                this.phoneIsShow = false;
            },
            testIsPhone(){
                this.phoneIsShow = true;
                this.phone = this.phone.slice(0,11);
                if (this.phone.length === 11){
                    if (!(/^1[34578]\d{9}$/.test(this.phone))) {this.mobileTipIsShow = true}
                    else{ this.mobileTipIsShow = false }
                }else {
                    this.mobileTipIsShow = false;
                }
                
              
            },
            showPwd(){
              this.iconEyeIsshow = !(this.iconEyeIsshow);  
            },
            testIsPwd(){ 
               this.pwd = this.pwd.slice(0,16);
               if(this.pwd.length === 16){
                  if (!(/^(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$).{6,16}$/.test(this.pwd))) 
                  this.passwordTipIsShow = true;
                  else{this.passwordTipIsShow = false;}
               } else {
                   this.mobileTipIsShow = false;
               }
               
               
            },
            getYzm() {
                this.yzm = ''
                let code = ''
                var codeLength = 4
                var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
                for (var i = 0; i < codeLength; i++) {
                    var index = Math.floor(Math.random() * 36);
                    code += random[index]
                }
                this.yzm = code
            },
            sendPhoneYzm(){
                if(this.phone.length<11) this.mobileTipIsShow = true;
                if (this.pwd.length < 6) this.mobileTipIsShow = true;  
        
            }
        },
        created(){
            this.getYzm();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .layout{
        width: 90%;
        margin: 0 auto;
        padding: 0;
    }
    .input_box{
        padding-top: 20px;
        width: 100%;
        display:block;
    }
    .input_mobile{
        position: relative;
    }
    .input_password{
        position: relative;
    }

    .con_inputbox{
        width:100%;
        height: 40px;
        line-height: 20px;
        padding: 10px;
        box-sizing: border-box;
        display: block;
        font-size: 14px;
        border-radius: 12px;
        color: #313131;
        border: 1px solid #a4a4a4;
        background: #fff;
    }
    .icon-times{
        position: absolute;
        top:32px;
        left:304px;
        font-size:16px;
    }
    .icon-eye{
        position: absolute;
        top:32px;
        left:304px;
        font-size:16px;
    }
    .yzm{
       position:absolute;top:-40px;left:220px;border:1px solid blue;width:100px;height:36px;
    }
    .btn_send{
        position:absolute;top:-40px;left:220px;border-radius: 20px;
    }
    .tips_title{
        color: #999;
        font-size: 14px;
        line-height: 1.5;
        margin: 30px 0 10px;
    }
    a{text-decoration: none;color:#f34;}
    .btn_register{width:330px;border-radius: 20px;}


</style>