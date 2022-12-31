<template>
  <v-container class="text-center mt-10">
    <h1 class="mb-10">Pedidos</h1>
    <Dashboard/>
  </v-container>
</template>

<script>
import  Dashboard from "@/components/Dashboard.vue";
  export default {
    name: 'Pedidos',

    components: {
      Dashboard
    },
  }
</script>
