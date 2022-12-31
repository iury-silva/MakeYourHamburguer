<template>
    <div id="banner">
      <div>
        <h1 class="slogan ml-8 text-center white--text">Make Your Hamburguer</h1>
        <v-divider class="whitez ml-8"></v-divider>
      </div>
    </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>

<style scoped>

#banner{
  height: 700px;
  width: 100%;
  background-size: cover;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../public/img/burger.jpg');
  background-position: 0 -300px;
  display: flex;
  align-items: center;
  
}
.whitez{
  background-color: white;
}
.slogan{
  font-size: 58px;
}
</style>