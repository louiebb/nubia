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
export default {
  name: "category",
  data() {
    return {
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
  methods:{
    showDetail(id){
				this.$router.push({
          name:'goodDetail',
          params:{id}
        });
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-header {
  height: 1.6rem;
  background-color: #fff;
  color: #464646;
  font-size: .69rem;
}
/*红魔竞技手机    &   手机     */
.nub-title {
  height: 1.6rem;
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  font-size: .53rem;
  padding-left:.8rem;
}
.nub-title span {
  height: 1.36rem;
  line-height: 1.36rem;
  font-size: .53rem;
}
.nub-jingji .nub-jingji-ul {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  margin:0 .48rem;
}
.nub-jingji .nub-jingji-ul li{
  width: 25%;
  float: left;
  margin-top: .69rem;
  padding-right: 2px;
  box-sizing: border-box;
  min-height: 4.16rem;
  vertical-align: middle;
      list-style: none;
}
.nub-jingji .nub-jingji-ul li img{width:2rem;}

/*间隙*/
.jianxi{height:3px;background-color:#eeeeee}
</style>
