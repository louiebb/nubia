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
          <li v-for="(item,idx) in shoujilist" :key="idx" @click="showDetail(item.id)">
            <img :src="item.imgurl" />
            <p>{{item.text}}</p>
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
          <li v-for="(item,idx) in peijianlist" :key="idx" @click="showDetail(item.id)">
            <img :src="item.imgurl" />
            <p>{{item.text}}</p>
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
          <li v-for="(item,idx) in zhoubianlist" :key="idx" @click="showDetail(item.id)">
            <img :src="item.imgurl" />
            <p>{{item.text}}</p>
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
      dataPhone:[],
      dataAcc:[],
      dataZb:[],
      datalist: [
        {
          imgurl: "./static/img/category/hongmo1.png",
          text: "6GB+64GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        }
      ],
      shoujilist: [
        {
          imgurl: "./static/img/category/hongmo1.png",
          text: "6GB+64GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        
      ],
      peijianlist: [
        {
          imgurl: "./static/img/category/hongmo1.png",
          text: "6GB+64GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        }

      ],
      zhoubianlist: [
        {
          imgurl: "./static/img/category/hongmo1.png",
          text: "6GB+64GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        },
        {
          imgurl: "./static/img/category/hongmo2.png",
          text: "8GB+128GB"
        }
      ]

    };
  },
   created () {
    this.$axios.get('/api/show/page/catePhone').then( x => {
      if (x.data) {
        let aa;
      console.log(x.data);

        aa = x.data.replace(/\-|pic\/|\_/g,'');
        aa = JSON.parse(aa);
      // this.dataPhone =JSON.parse(x.data)
      
      console.log(aa);

      }
    })
  },
  methods:{
    showDetail(id){
				this.$router.push({
          name:'goodDetail',
          params:{id}
        });
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
