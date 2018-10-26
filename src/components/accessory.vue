<template>
  <div class="accessory">
    <div class="nav">
      <mt-header title="配件">
        <router-link to="/" slot="left">
          <font-awesome-icon icon="chevron-left" />
        </router-link>
        <router-link to="/" slot="right">
          <font-awesome-icon icon="equals" />
        </router-link>
      </mt-header>
      <mt-navbar v-model="active">
        <mt-tab-item id="allModels" @click.native="getAccessoryInfo" >
            全部机型
          <font-awesome-icon icon="caret-down" class="caret-down" />
        </mt-tab-item>
        <mt-tab-item id="newArrival" @click.native.stop="sortBySid" >最新上架</mt-tab-item>
        <mt-tab-item id="price" @click.native.stop="sortByPrice" >
            价位
            <font-awesome-icon icon="arrow-up"  class="price-arrow" v-show="priceIconShow"/>
            <font-awesome-icon icon="arrow-down" class="price-arrow" v-show="!priceIconShow"/>            
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="main">
        <mt-tab-container v-model="active">
          <mt-tab-container-item id="allModels">
            <mt-cell v-for="(info,idx) in infos" :key="idx" :title="info.name" />
            <div class="main_pic">
               <li class="ass_img" v-for="(product,idx) in allModelsData" :key="idx" >
                 <img :src="'//oss.static.nubia.cn/'+product.image" />
                 <div class="info">
                   <p>{{product.product_name}}</p>
                   <p>{{product.price}}元</p>
                 </div>
                </li>                  
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="newArrival">
            <div class="main_pic">
              <li class="ass_img" v-for="(product,idx) in items" :key="idx">
                <img :src="'//oss.static.nubia.cn/'+product.image" />
                <div class="info">
                  <p>{{product.product_name}}</p>
                  <p>{{product.price}}元</p>
                </div>
              </li>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="price">
            <div class="main_pic">
              <li class="ass_img" v-for="(product,idx) in priceData" :key="idx">
                <img :src="'//oss.static.nubia.cn/'+product.image" />
                <div class="info">
                  <p>{{product.product_name}}</p>
                  <p>{{product.price}}元</p>
                </div>
              </li>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>  
          
   </div>
  <div class="blank"></div>
  </div>
</template>

<script>
  import '../style/sass/accessory.scss';
  export default {
    name: 'accessory',
    data() {
      return {
        active: "allModels",
        infos: [],
        items:[],
        priceIconShow: false,
        priceArrowIsShow: false,
        allModelsData: [],
        priceData:[],
        status: true
      }
    },

    methods: {
        getAccessoryInfo() {
          this.$axios.get('/api/show/page/phoneType', {
            headers: {
              "content-type": "",
              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
            }
          }).then(res => {
            let infos = res.data.data.result;
            this.infos = infos;
          }
        )
      },
      getAccessoryImg(){
        this.$axios.get('api/show/page/searchAcc',{
          headers: {
            "content-type": "",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
          }
        }).then(res => {
          let items = res.data.data.result;
          this.items = items;
          this.allModelsData = [...this.items]
          this.priceData = [...this.items]
          console.log(items);
        })
      },
      sortBySid() {
        this.items.sort((a, b) => {
          return (b.sid - a.sid);
        })
        console.log(this.items)
      },
      sortByPrice() {
        this.priceIconShow = !this.priceIconShow;
        if(this.status === false){
          this.priceData.sort((a, b) => {
            return (b.price - a.price);
          })
        }else{
          this.priceData.sort((a, b) => {
            return (a.price - b.price );
          })
        }
        this.status = !this.status
        console.log(this.priceData)        
      }
  },
    created() {
      this.getAccessoryImg();
    },
    // computed(){
          //可根据status判断navbar状态在main-container容器返回数据,然后渲染.
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>