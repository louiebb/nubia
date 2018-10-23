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
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
import '../style/sass/goodDetail.scss'
export default {
  data(){
      return {
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
