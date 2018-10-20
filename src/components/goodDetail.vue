<template>
  
</template>
<script>
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
      this.$http.get('/api/goods/' + id)
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
