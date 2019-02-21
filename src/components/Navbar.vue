<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';

@Component({})

export default class Navbar extends Vue {
}
</script>

<template>
  <div>
    <v-toolbar color="cyan" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
  
      <v-toolbar-title class="white--text">Головна сторінка</v-toolbar-title>
      
      <v-spacer></v-spacer>
  
      <v-toolbar-items>
        
        <v-btn flat>Рейтинги</v-btn>
        <v-btn flat>Новини</v-btn>
        <v-btn flat to="/people">Люди</v-btn>
     
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<style scoped lang="scss">

</style>
