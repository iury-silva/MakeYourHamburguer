<template>
  <v-app>
    <div>
    <Navbar :logo="logo_src" :alt="app_name"/>
    <v-fade-transition mode="out-in" appear>
    <router-view />
    </v-fade-transition>
    <Footer />
  </div>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
      Navbar: () => import("@/components/Navbar.vue"),
      Footer: () => import("@/components/Footer.vue"),
    },
    data(){
      return{
        logo_src: "/img/logo.png",
        app_name: "logo"
      }
    }
  };
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/gotham');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Gotham', sans-serif;

}
</style>