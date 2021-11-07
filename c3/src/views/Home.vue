<template>
<div>
  <div class="wrapper">
    <div class="guide"> Search by </div>
    <div class="search-filter">
      <div>
        <input type="radio" id="fName" name="searchBy" value="fName" v-model="searchBy"
        checked>
        <label for="fName"><b>First Name</b></label>
      </div>
      <div>
        <input type="radio" id="lName" name="searchBy" value="lName" v-model="searchBy">
        <label for="lName"><b>Last Name</b></label>
      </div>
      <div>
        <input type="radio" id="dment" name="searchBy" value="dment" v-model="searchBy">
        <label for="dment"><b>Department</b></label>
      </div>
    </div>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
    <div class="divider"></div>
  </div>
  <div v-if="searchText != ''">
    <ProductList :products="products" />
  </div>
  <div class="initial" v-else>
    <h1>Welcome to BYU Professors World!</h1>
    <h2>Choose Search Category First!</h2>
    <h2>Type BYU Professors by Name or Department!</h2>
  </div>
</div>
</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
   return {
     searchText: '',
     searchBy: '',
   }
 },
 method: {
   ifEmpty() {
     return "Please choose seach by category first!"
   }
 },
 computed: {
   products() {
      if (this.searchBy === 'fName') {
          return this.$root.$data.products.filter(product => (product.tFname.toLowerCase().search(this.searchText.toLowerCase()) >= 0)); 
      }
      else if (this.searchBy === 'lName') {
        return this.$root.$data.products.filter(product => (product.tLname.toLowerCase().search(this.searchText.toLowerCase()) >= 0)); 
      }
      else if (this.searchBy === 'dment') {
        return this.$root.$data.products.filter(product => (product.tDept.toLowerCase().search(this.searchText.toLowerCase()) >= 0)); 
      }
      return this.$root.$data.products.filter(product => (product.tLname.toLowerCase().search("Clement") >= 0)); 
     
   },
 }
}
</script>

<style scoped>

.wrapper {
  display: grid;
  grid-template-rows: 1fr 0fr;
  align-items: center;
  justify-content: center;
}


.guide {
  display: grid; 
  justify-self: center;
  font-size: 1.7vw;
}

.search-filter {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 1vw;
  font-size: 1.3vw;
}

.search {
  border: 4px solid #ccc;
  border-radius: 4px;
  width: 120%;
  
}


.initial {
  display: grid; 
  justify-self: center;
  align-self: center;
  margin-top: 5vw;
  background-color: #0062b8; 
  color: white; 
  font-size: 1.3vw;
}

.initial h1 {
  display: grid; 
  justify-self: center;
  align-self: center;
}

.initial h2 {
  display: grid; 
  justify-self: center;
  align-self: center;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
