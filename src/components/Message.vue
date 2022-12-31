<template>
  <v-alert dense text type="success" class="mb-8">
      {{msg }}
    </v-alert>
</template>

<script>
export default {
  name:"Message",
  props:{
    msg: String
  }
}
</script>