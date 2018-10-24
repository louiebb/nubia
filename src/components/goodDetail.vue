<template>
  <div class="goodDetail">
    <mt-header title="商品详情">
      <router-link to="/" slot="left">
        <font-awesome-icon icon="chevron-left" />
      </router-link>
      <router-link to="/" slot="right">
        <font-awesome-icon icon="shopping-cart" class="iconcart"/>
        <font-awesome-icon icon="equals" />
      </router-link>
    </mt-header >
    <div class="xiangqingtu">
      <mt-swipe :auto="8000">
        <mt-swipe-item v-for="(item,idx) in swipepic" :key="idx" >
          <img :src="item.imgurl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 间隙 -->
    <div class="jianxi"></div>
    <!-- 手机详细信息 -->
    <div class="details">
      <div class="detail-title">
        <span>红魔竞技游戏手机</span>
        <span>曜石黑</span>
        <span>6GB+64GB</span>
        <span class="last-icon"> 
          <font-awesome-icon icon="share-alt" />
        </span>
      </div>
      <div class="detail-jiangjia">
      <span style="color: rgb(255, 77, 77); font-size: 18px; font-weight: 800;">10.20日上午10:00【6GB+64GB 直降200】</span>
      </div>
      <div class="jiaqian">
        <div class="pdt-price" style="color: rgb(255, 77, 77); display: inline-block;">￥2299.00元</div>
        <del class="pdt-orig-price" style="color: rgb(153, 153, 153);">￥2499.00元</del>
      </div>
      <div class="cuxiao">
        <p>促销</p>
        <!-- 间隙   &  -->
        <div class="jianxi-zeng"></div>
         <!-- 赠牛豆 -->
         <div>
           <span class="zeng">赠牛豆</span><span> 购买完成可获得与支付金额相同数目的牛豆</span><br>
           <span class="zeng">包邮</span><span>  普通和青铜会员满59、白银满39、黄金以上包邮</span>
         </div>
      </div>
      
    

    
     

      
    </div>


  </div>
</template>
<script>
import '../style/sass/goodDetail.scss'
export default {
  data(){
      return {
        swipepic:[
          {imgurl: "./static/img/category/shouji1.png"},
          {imgurl: "./static/img/category/shouji2.png"},
          {imgurl: "./static/img/category/shouji3.png"},
          {imgurl: "./static/img/category/shouji4.png"}
        ],
        id: this.$route.query.goodId,
        loading: false,
        selectedGood: []
      }
    },

  created(){
    this.fetchData();
  },

  methods:{
    fetchData(){
      this.loading = true;

      //拿到查询字段，商品的id后进行http请求
      var id = this.id;
      this.$axios.get('/api/goods/' + id)
        .then(response => {
          this.selectedGood = response.data.data;
        }, error => {
          console.log(error);
        })

      this.loading = false;
    }
  }
}
</script>
