<template>
   <div class="nav">
    <nav class="navbar d-flex align-center justify-space-between ml-8">
        <router-link to="/"> <img :src="logo" :alt="alt" id="logo"></router-link>
      <div class="mr-8">
        <v-btn class="mr-8" ><router-link to="/" style="text-decoration: none;"><v-icon class="mr-2">mdi-home</v-icon>Home</router-link></v-btn>
        <v-btn ><router-link to="/pedidos" style="text-decoration: none;"><v-icon class="mr-2">mdi-cart</v-icon>Pedidos</router-link></v-btn>
      </div>
    </nav>
      
      
    </div>
</template>

<script>
export default{
  name:"Navbar",
  props:["logo", "alt"]
}
</script>

<style scoped>
#logo{
  width: 50px;
}
.nav{
  background-color: #1e1e1e;
  padding: 20px;
}

.nav a {
  color: rgb(0, 0, 0);
}


</style>