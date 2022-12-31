<template>
  <v-form class="formulario  ">
    <Message :msg="msg" v-show="msg"/>

    <label for="nome" class="d-flex font-weight-bold mt-5">Insira seu nome:</label>
    <v-text-field label="Nome" hint="Digite seu nome aqui." v-model="nome" color="red"></v-text-field>
    <label for="pao" class="d-flex font-weight-bold mt-5">Escolha o pão:</label>
    <v-select label="Pão" v-model="pao" color="red" :items="paes" item-text="tipo" item-value="id"></v-select>
    <label for="carne" class="d-flex font-weight-bold mt-5">Escolha a carne:</label>
    <v-select :items="carnes" item-text="tipo" item-value="id" label="Carne" v-model="carne" color="red"></v-select>
    <label for="opcionais" class="d-flex font-weight-bold mt-5">Selecione os Opcionais:</label>
    <v-spacer class="opc">
      <v-checkbox color="red" :label="opc.tipo" v-model="opcionais" v-for="opc in opcionaisData" :key="opc.id"
        :value="opc.tipo"></v-checkbox>
    </v-spacer>
    <v-btn @click="createHamburguer" color="error" class="mb-10 mt-10">
      Cadastrar seu Hambúrguer
    </v-btn>

  </v-form>
</template>

<script>
import Message from "./Message.vue"
  export default {
    name: "BurguerForm",
    components:{
      Message
    },
    data() {
      return {
        nome: null,
        paes: null,
        carnes: null,
        opcionaisData: null,
        pao: null,
        carne: null,
        opcionais: [],
        msg: null,
      }
    },
    methods: {
      async getIngredientes() {
        const req = await fetch('http://localhost:3000/ingredientes');
        const data = await req.json();

        this.paes = data.paes;
        this.carnes = data.carnes;
        this.opcionaisData = data.opcionais;

      },
      async createHamburguer(e){
        e.preventDefault();

        switch (this.carne) {
          case 1:
            this.carne="Maminha"
            break;
         case 2:
            this.carne="Alcatra"
            break;
         case 3:
            this.carne="Picanha"
            break;
         case 4:
            this.carne="Veggie burger"
            break;
        
          default:
            break;
        } 

        //paes
        switch (this.pao) {
          case 1:
            this.pao="Italiano Branco"
            break;
         case 2:
            this.pao="3 Queijos"
            break;
         case 3:
            this.pao="Parmesão e Orégano"
            break;
         case 4:
            this.pao="Integral"
            break;
        
          default:
            break;
        }
        const data ={
          nome: this.nome,
          pao: this.pao,
          carne: this.carne,
          opcionais: Array.from(this.opcionais),
          status: "Solicitado"
        }

        const dataJSON = JSON.stringify(data);

        const req = await fetch('http://localhost:3000/burgers', {
          method: "POST",
          headers: { "content-type":"application/json"},
          body: dataJSON
        });

        const res = await req.json();

        this.msg = `Olá ${res.nome}, seu pedido foi enviado com sucesso!!` 
        setTimeout(() => {
          this.msg = null
        }, 3000);

        this.nome = "";
        this.pao = "";
        this.carne = "";
        this.opcionais = [];

      }
    },
    mounted() {
      this.getIngredientes();
    }
  }
</script>

<style scoped>
  .formulario {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  label {
    border-left: 4px solid red;
    padding: 5px;
  }

  .opc {
    flex-wrap: wrap;
    display: grid;
    /* grid: repeat(2, 60px) / auto-flow 80px; */
    grid-template-columns: repeat(auto-fit, 80px);
    align-items: center;
    gap: 10px 50px;

  }
</style>