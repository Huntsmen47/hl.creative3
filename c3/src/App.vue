<template>
<div id="app">
  <div class="menu">
    <div class="search">
      <router-link to="/">
        <h1>Rate My BYU Professors Data</h1> 
      </router-link>
    </div>
    <div class="side">
      <router-link to="/rating">
        <div class="rating">
          <img src="/images/rating.png">
          <div class="text">
            <p>Rating</p>
          </div>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="cart">
          <img src="/images/up.png">
          <div class="text2">
            <p>Favorite: {{numberOfItems}}</p>
          </div>
          
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer"><a href="https://github.com/BYU-CS-260-Spring-2021/lab-3b-grocery-store-ekdlsks7437">Git Repo</a></div>
</div>
</template>


<script>
export default {
  name: 'App',
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;  
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'PT Sans Narrow', sans-serif;
}

body {
  margin: 0;
}

a:link, a:visited,  a:hover, a:active
{
    /*
    Commented out because it was causing problems on mobile.
    color: #000000;
    */
    text-decoration: none;
}

.menu {
  display: grid;
  background-color: #002e5d;
  grid-template-rows: 2fr 1fr; 
  
}

.search {
  display: grid;
  justify-self: center;
  align-self: center;
}

.search h1 {
  color: white; 
  font-size: 3vw;
}

.side {
  display: grid; 
  grid-template-columns: 1fr 1fr;

}


.rating {
  display: grid; 
  margin-right: 10%;
}

.rating img {
   width: 10%; 
   align-self: end;
   justify-self: end;
}

.text {
  display: grid; 
  align-self: end;
  justify-self: end;
}

.text p{
  color: white; 
}

.cart {
  margin-left: 10%;
}
.cart img{
  justify-self: center;
  align-self: center;
  width: 10%; 
}

.text2 {
  display: grid; 
  align-self: end;
  justify-self: end;
}

.text2 p{
  color: white; 
}

.footer {
  border-top: solid black;
  display: grid;
  margin-top: 10vw;
  padding-top: 2vw;
  justify-content: center;
  font-size: 2vw;
}
</style>


