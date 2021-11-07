<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.tid">
      <div class="department">
        <h1>{{product.tDept}}</h1>
      </div>
      <div class="name">
        <h2>{{product.tFname}} {{product.tMiddlename}} {{product.tLname}}</h2> 
      </div>
      <div class="review">
          <p>Number of Reviews:     {{product.tNumRatings}}</p>
      </div>
      <div class="reputation">
          <p>{{product.rating_class}}</p>
      </div>
      <div class="last">
        <div class="price">
          <h2>{{product.overall_rating}}</h2>
        </div>
        <div>
          <button class="auto"><a @click="select(product)">Favorite</a></button>
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array,
  },
  methods: {
    select(product) {
      this.$root.$data.cart.push(product);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  /*grid-template-columns: 1fr 1fr 1fr 1fr;*/
  justify-content: space-around;
  width: 100%;
  /*width: 1200px; */
}

.product {
  display: grid; 
  border: solid black; 
  
  /*grid-template-rows: 1fr 5vw 3vw 3vw 5vw;*/
  margin: 1em;
  /*margin-top: 50px;*/
  /*width: 300px;*/
}

.department {
  display: grid; 
  background: #0062b8;
  color: #000;
  /*height: 10vw;*/
}

.department h1 {
  justify-self: center;
  align-self: center;
  color: white; 
}

.name {
  padding: 0 6px; 
}

.name h2{
  font-size: 2vw;
}

.review {
  font-size: 1.6vw;
  padding: 0 6px; 
}

.reputation {
  font-size: 1.8vw;
  padding: 0 40px; 
}

.last {
  display: grid; 
  grid-template-columns: 1fr 1fr;
}

.price {
  padding: 0 40px; 
  font-size: 1vw;
  color: red; 
}

button {
  /*height: 70px;
  width: 80px; 
  */
  background: #000;
  color: white;
  border: none;

}
@media all and (min-width:390px) and (max-width: 700px) {
 .products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  /*grid-template-columns: 1fr 1fr 1fr 1fr;*/
  justify-content: space-around;
  width: 100%;
  /*width: 1200px; */
}

.product {
  display: flex; 
  border: solid black; 
  width: 70%;
  margin-left: 0;
  margin-right: 0;

  margin-bottom: 4px;
}

.product {
  display: grid; 
  border: solid black; 
  
  /*grid-template-rows: 1fr 5vw 3vw 3vw 5vw;*/
  margin: 1em;
  /*margin-top: 50px;*/
  /*width: 300px;*/
}

.department {
  display: grid; 
  background: #0062b8;
  color: #000;
  /*height: 10vw;*/
}

.department h1 {
  justify-self: center;
  align-self: center;
  color: white; 
}

.name {
  padding: 0 6px; 
  margin: 0;
}

.name h2{
  text-align: center;
  font-size: 40px;
  margin: 0;
}

.review {
  text-align: center;
  font-size: 30px;
  margin: 0;
}
.review p{
  margin: 0;
}

.reputation {
  font-size: 32px;
  text-align: center;
  margin: 0;
}
.reputation p{
  margin: 0;
}

.last {
  display: block; 
  margin: 0;
}

.price {
  margin: 0;
  padding: 0; 
  font-size: 28px;
  text-align: center;
  color: red; 
}
.price h2{
  margin: 0;
  padding: 0; 
}
button {
  /*height: 70px;
  width: 80px; 
  */
  margin: 0;
  background: #000;
  color: white;
  border: none;
  text-align: center;
  width: 50%;
  margin-left: 25%;
  height: 40px;
  margin-bottom: 2px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
}


</style>
/*
  computed: {
    emptyCart() {
      if (this.$root.$data.cart.length === 0) {
        this.emptyCart = true; 
      }
    }
  }*/