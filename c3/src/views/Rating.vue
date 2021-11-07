<template>
<div class = "wrapper">
  <h2 class="head">Search a department to find the top 5 rated Professors</h2>
  <div class="search">
    <form class="pure-form">
      <i class="fas fa-search"></i><input v-model="searchText" />
    </form>
  </div>
  <div v-if="searchText != ''">
  <ProductList :products="products" />
  </div>
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Rating',
  components: {
    ProductList
  },
  data() {
   return {
     searchText: '',
   }
 },
 method: {

 },
 computed: {
   products() {
        var jArray = this.$root.$data.products.filter(product => (product.tDept.toLowerCase().search(this.searchText.toLowerCase()) >= 0));
        var nArray = [];
        for (var i = 0; i < jArray.length; i++) {
          if (nArray.length === 5) {
            nArray = nArray.sort(function(a, b) {
        return  b.tNumRatings-a.tNumRatings ;
});
            return nArray;
          }
          if (jArray[i].overall_rating === '5.0') {
             nArray.push(jArray[i]);
           }
        }
        return nArray;
   },
 }
}
</script>

<style scoped>
.wrapper{
    display: grid;
    align-items: center;
    justify-content: center;
}
.head{
  text-align: center;
}


</style>
