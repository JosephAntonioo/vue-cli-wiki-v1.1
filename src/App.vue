<template>
  <div id="app">
    <!-- <ListaInstalar id = "lista-instalar"></ListaInstalar>
    <ListaComponents id = "lista-components"></ListaComponents> 
    <DataEMounted id = "data-e-mounted"></DataEMounted> -->
  </div>
</template>

<script>
import ListaComponents from './components/ListaComponents.vue';
import ListaInstalar from './components/ListaInstalar.vue';
import DataEMounted from './components/DataEMounted.vue';
window.Vue = require('vue');
export default {
  name: 'App',
  components: {
    ListaComponents,
    ListaInstalar,
    DataEMounted
},
  data() {
    return {
      count: {
        x: 0,
      },
    }
  },
  mounted() {
    // console.log(this)
    this.$set(this.count, 'y', 1);
    this.count = {...this.count, ...{a: 2, b: 3}};
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

#data-e-mounted {
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
