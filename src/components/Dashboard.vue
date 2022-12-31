<template>
    <v-container class="main">
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            N°
          </th>
          <th class="text-center">
            Cliente
          </th>
          <th class="text-center">
            Pão
          </th>
          <th class="text-center">
            Carne
          </th> 
          <th class="text-center">
            Opcionais
          </th>
          <th class="text-center">
            Status
          </th>
          <th class="text-center">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="burger in burgers"
          :key="burger.nome"
        >
          <td>{{ burger.id }}</td>
          <td>{{ burger.nome }}</td>
          <td>{{ burger.pao }}</td>
          <td>{{ burger.carne }}</td>
          <td>{{ burger.opcionais.toString() }}</td>
          <!-- <td><v-select :items="status" item-text="tipo" item-value="id" class="status"></v-select></td> -->
          <td><select name="status" class="status text-center"> 
            
            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{s.tipo}}</option>
            </select></td>
          <td><v-tooltip bottom><template v-slot:activator="{ on, attrs }"><v-btn @click="burgerDelete(burger.id)" fab elevation="3" color="error" small v-on="on" v-bind="attrs" class="remove"><v-icon>mdi-minus</v-icon></v-btn></template><span>Cancelar</span></v-tooltip></td>  
        </tr>
      </tbody>
    </template>
  </v-simple-table>

    </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data(){
    return{
      burgers:null,
      burger_id:null,
      status:[],
    }
  },
  methods:{
    async getPedidos(){
      const req = await fetch("http://localhost:3000/burgers");

      const data = await req.json();  
      
      this.burgers = data;

      this.getStatus();
    },

    async getStatus(){

      const req = await fetch("http://localhost:3000/status");

      const data = await req.json();

      this.status = data;
    },

    async burgerDelete(id){

      const req = await fetch(`http://localhost:3000/burgers/${id}`,{
        method:"DELETE"
      });

      const res = await req.json();

      //msg


      this.getPedidos();


    }
  },
  mounted(){
    this.getPedidos();
  }
}
</script>

<style scoped>
.main{
  height: 100vh;
}
.status{
  width: 200px;
  margin: auto;
  border: 1px solid rgb(88, 88, 88);
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
}
.remove{
  transition: 0.2s ease-in-out;
}
.remove:hover{
  transform: scale(1.1);
}
</style>