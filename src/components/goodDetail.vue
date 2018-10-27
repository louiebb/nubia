<template>
  <div class="goodDetail flexbox">
    <div class="container">
    <mt-header title="商品详情">
      <router-link to="/" slot="left">
        <!-- <font-awesome-icon icon="chevron-left" />
         -->
        <span class="icon icon-back"></span>
      </router-link>
      <router-link to="/" slot="right">
        <!-- <font-awesome-icon icon="shopping-cart" class="iconcart"/> -->
        <!-- <font-awesome-icon icon="equals" /> -->
        <span class="icon icon-cart" style="font-size:26px;"></span>
        <span class="icon icon-menu"></span>
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
      <!-- 间隙 -->
      <div class="jianxi"></div>
      <!-- 送货 -->
      <div class="address" style="padding:10px;">
        <div class="songzhi">送至
          <font-awesome-icon icon="map-marker-alt" />
          <span>&nbsp;广东省 广州市 荔湾区</span>
          <font-awesome-icon icon="chevron-right" class="choose-right"/>
        </div>
        <div class="xianhuo" style="padding:10px 0;" >
          <span>现货</span>
          <span>19:00前下单，预计10月25日12:00点前送达</span>
        </div>
      </div>
      <!-- 间隙 -->
      <div class="jianxi"></div>
      <div class="good-canshhu">
        <!-- 颜色 -->
        <div class="goods-color" style="padding:6px 12px;">
          <div class="good-color">
            <span style="font-size:16px;">颜色</span>
          </div>
          <div>
            <span class="select-color"><span class="color-dot" style=""></span>  曜石黑</span>
          </div>
        </div>
        <!-- 规格 -->
        <div class="goods-spec" style="padding:6px 12px;">
          <div class="good-spec">
            <span style="font-size:16px;">规格</span>
          </div>
          
          <div>
            <span class="select-spec">8GB+128GB</span>
          </div>
        </div>
        <!-- 套装 -->
        <div class="goods-suit" style="padding:6px 12px;">
          <div class="good-suit">
            <span style="font-size:16px;">套装</span>
          </div>
          
          <div>
            <span class="select-suit1">8GB+128GB</span>
            <span class="select-suit2">8GB+128GB</span>

          </div>
        </div>
        <!-- 服务 -->
        <div class="goods-service" style="padding:6px 12px;">
          <div class="good-service">
            <span style="font-size:16px;">保障服务(可选)</span>
          </div>
          
          <div>
            <span class="select-service1">红魔电竞游戏手机8G+128G屏碎宝（1年保修1次）129.00元/年</span>
            <span class="select-service2">红魔电竞游戏手机8G+128G屏碎宝（半年保修1次）89.00元/年</span>

          </div>
        </div>
        <!-- 为您推荐 -->
        <div class="recommend">
          <div class="text-recommend">为您推荐</div>
          <div class="good-slide">
            <ul>
              <li v-for="(item,idx) in dataRecommend" :key="idx">
                <img :src="baseImgUrl+item.imageurl"/>
                <p>{{item.product_name}}</p>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div style="height:1000px;"></div>
      <div class="bottom"></div>
      </div>
    

    
     

      
    </div>


  </div>
</template>
<script>
import "../style/sass/goodDetail.scss";
export default {
  data() {
    return {
      swipepic: [
        { imgurl: "./static/img/category/shouji1.png" },
        { imgurl: "./static/img/category/shouji2.png" },
        { imgurl: "./static/img/category/shouji3.png" },
        { imgurl: "./static/img/category/shouji4.png" }
      ],
      baseImgUrl: "https://oss.static.nubia.cn/",
      id: this.$route.query.goodId,
      loading: false,
      selectedGood: [],
      dataRecommend: []
    };
  },

  created() {
    this.fetchData(),
      this.$axios
        .get(
          "https://oss.static.nubia.cn/productdetail/1001/m/1.phtml?1540389775685"
        )
        .then(x => {
          console.log(111, x.data);
          // let index = x.data.lastIndexOf('code')-2;
          // let data = x.data.slice(index);
          // data = JSON.parse(data);
          this.datapicture = x.data;
          // Array.prototype.push.apply(shoujilist, shoujilist);
          console.log(112, this.dataRecommend);
        }),
      this.$axios
        .get("/api/show/product/getRecommendProduct?productId=717&source=1", {
          headers: {
            "content-type": "",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
          }
        })
        .then(x => {
          console.log(111, x.data);
          // let index = x.data.lastIndexOf('code')-2;
          // let data = x.data.slice(index);
          // data = JSON.parse(data);
          this.dataRecommend = x.data.data.result;
          // Array.prototype.push.apply(shoujilist, shoujilist);
          console.log(112, this.dataRecommend);
        });
  },

  methods: {
    fetchData() {
      this.loading = true;

      //拿到查询字段，商品的id后进行http请求
      var id = this.id;
      this.$axios.get("/api/goods/" + id).then(
        response => {
          this.selectedGood = response.data.data;
        },
        error => {
          console.log(error);
        }
      );

      this.loading = false;
    }
  }
};
</script>
