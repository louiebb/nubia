<template>
  <div class="category">
    <mt-header title="商品">
      <router-link to="/" slot="left">
        <font-awesome-icon icon="chevron-left" />
      </router-link>
      <router-link to="/" slot="right">
        <font-awesome-icon icon="equals" />
      </router-link>
    </mt-header >
    <!-- 红魔竞技手机 -->
    <div class="nub-first-title">
      <div class="nub-title"><span>红魔竞技游戏手机</span></div>
      <div class="nub-jingji">
        <ul class="nub-jingji-ul">
          <li v-for="(item,idx) in datalist" :key="idx" @click="showDetail(item.id)">
            <img :src="item.imgurl" />
            <p>{{item.text}}</p>
		    	</li>
        </ul>
      </div>
    </div>

    <!-- 间隙 -->
    <div class="jianxi"></div>
    <!-- 手机 -->
    <div class="nub-first-title">
      <div class="nub-title"><span>手机</span></div>
      <div class="nub-jingji">
        <ul class="nub-jingji-ul">
          <li v-for="(item,idx) in dataPhone" :key="idx" @click="showDetail(item.product_id)">
            <img :src="baseImgUrl+item.image_id" />
            <p>{{item.product_name}}</p>
		    	</li>
        </ul>
      </div>
    </div>

    <!-- 间隙 -->
    <div class="jianxi"></div>
    <!-- 配件 -->
    <div class="nub-first-title">
      <div class="nub-title"><span>配件</span></div>
      <div class="nub-jingji">
        <ul class="nub-jingji-ul">
          <li v-for="(item,idx) in dataAcc" :key="idx" @click="showDetail(item.cate_id)">
            <img :src="baseImgUrl+item.image_id" />
            <p>{{item.cate_name}}</p>
		    	</li>
        </ul>
      </div>
    </div>

    <!-- 间隙 -->
    <div class="jianxi"></div>

    <!-- 周边产品 -->
    <div class="nub-first-title">
      <div class="nub-title"><span>周边产品</span></div>
      <div class="nub-jingji">
        <ul class="nub-jingji-ul">
          <li v-for="(item,idx) in dataZb" :key="idx" @click="showDetail(item.product_id)">
            <img :src="baseImgUrl+item.image_id" />
            <p>{{item.product_name}}</p>
		    	</li>
        </ul>
      </div>
    </div>

    <!-- 间隙 -->
    <div class="jianxi"></div>
    
  </div>
</template>

<script>
import '../style/sass/catagory.scss'
export default {
  name: "category",
  data() {
    return {
      baseImgUrl:'https://oss.static.nubia.cn/',
      dataPhone:[],
      dataAcc:[],
      dataZb:[],
      datalist: [
        {
          imgurl: "./static/img/category/hongmo1.png",
          text: "6GB+64GB",
          id:717
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB",
          id:717
        }
      ]

    };
  },
   created () {
    this.$axios.get('/api/show/page/catePhone').then( x => {
      let index = x.data.lastIndexOf('code')-2;
      let data = x.data.slice(index);
      data = JSON.parse(data);
      this.dataPhone = data.data.result;
      // Array.prototype.push.apply(shoujilist, shoujilist);
      // console.log(112,this.shoujilist);

    }),
    this.$axios.get('/api/show/page/cateAcc').then( x => {
      let index = x.data.lastIndexOf('code')-2;
      let data = x.data.slice(index);
      data = JSON.parse(data);
      this.dataAcc = data.data.result;
      // Array.prototype.push.apply(shoujilist, shoujilist);
      // console.log(113,this.peijianlist);

    }),
    this.$axios.get('/api/show/page/cateZb').then( x => {
      let index = x.data.lastIndexOf('code')-2;
      let data = x.data.slice(index);
      data = JSON.parse(data);
      this.dataZb = data.data.result;
      // Array.prototype.push.apply(shoujilist, shoujilist);
      // console.log(114,this.zhoubianlist);

    })
    
  },
  methods:{
    showDetail(id){
				this.$router.push({path: './goodDetail'})
      },
    selectGood(){
      router.push({
        path: 'goods',
        query:{goodId:this.goods.id}})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
