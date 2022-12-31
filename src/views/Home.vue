<template>
  <div>
  <Banner/>
  <v-container class="text-center mt-10">
    <h1 class="text-center mb-10">Monte seu Hambúrguer aqui</h1>

    <BurguerForm/>

  </v-container>
</div>
</template>

<script>
import Banner from "../components/Banner.vue"
import BurguerForm from "../components/BurguerForm.vue"
  export default {
    name: 'Home',
    components:{
      Banner,
      BurguerForm,
    },
    metaInfo: {
    title: "Cadastro | Make your hamburguer",
    meta: [
      {
        property: "og:title",
        content: "Cadastro | Make your hamburguer",
      },
    ],
  },
}
</script>
