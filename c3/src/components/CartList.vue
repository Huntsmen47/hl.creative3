<template>
<div class="wrapper">
  <div class="products">
      <h1 v-if="emptyCart">Cart is Empty!</h1>
    <div v-else class="product" v-for="product in carts" :key="product.tid">
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
          <button class="auto"><a @click="select(product)">Remove</a></button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    carts: Array,
  },
  methods: {
    select(product) {
      let removedItemIndex = this.$root.$data.cart.indexOf(product);

        this.$root.$data.cart.splice(removedItemIndex, 1); 
    }
  },
  computed: {
      emptyCart() {
          if (this.$root.$data.cart.length === 0) {
              return true; 
          }
          else  {
              return false; 
          }
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  width: 1200px; 
}

.product {
  display: grid; 
  border: solid black; 
  grid-template-rows: 1fr 5vw 3vw 3vw 5vw;
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.department {
  display: grid; 
  background: #0062b8;
  color: #000;
  height: 10vw;
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
  height: 70px;
  width: 80px; 
  background: #000;
  color: white;
  border: none;

}


</style>
