<template>
  <div id="app">
    <!-- <ListaInstalar id = "lista-instalar"></ListaInstalar>
    <ListaComponents id = "lista-components"></ListaComponents> -->
    <button @click="count++">Click </button>
    {{ count }}
  </div>
</template>

<script>
import ListaComponents from './components/ListaComponents.vue';
import ListaInstalar from './components/ListaInstalar.vue';
window.Vue = require('vue');
export default {
  name: 'App',
  components: {
    ListaComponents,
    ListaInstalar
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* border-width: medium;
  border-style: solid;
  border-color: #00f; */
}
#lista-components {
  border-width: medium;
  border-style: solid;
  border-color: #00f;

  width:95%;
  height:auto;
  border:2px solid black;
  padding:10px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100%;
}

#lista-instalar {
  border-width: medium;
  border-style: solid;
  border-color: #00f;
  
  width:95%;
  height:auto;
  border:2px solid black;
  padding:10px;
  
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 100%;
}
</style>
