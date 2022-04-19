<template>
  <button @click="clicar">Clicou ButtonVue {{ count }} times</button>
</template>
<script>
//tudo que for externo é aqui que importa
// import exemplo from "./exemplo";

//sempre exporta um objeto que significa a configuração do componente
export default {
  name: "ButtonVue",
  //Data é uma função que retorna count que é a contagem, basicamente o estado do componente
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clicar() {
      this.count++;
    },
  },
};
</script>

