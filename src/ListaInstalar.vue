<template>
<div id="lista-instalar">
    <h1>Instalar Vue.js</h1>
    <ul>
        <li>Ter o Node.js instalado</li>
        <li>Vue.js: npm install vue</li>
        <li>VueCli.js: npm install -g @vue/cli</li>
        <li>vue --version</li>
        <li>npm update -g @vue/cli</li>
    </ul>

    <h1>Criar projeto limpo Vue.js</h1>
    <ul>
        <li>vue create nome-projeto</li>
        <li>Manually select features</li>
        <h1>Opções mas não marca nada se quiser limpo</h1>
        <ul>
            <li>Babel</li>
            <li>TypeScript</li>
            <li>PWA Support</li>
            <li>Router</li>
            <li>Vuex</li>
            <li>CSS Pre-processors</li>
            <li>Linter / Formatter</li>
            <li>Unit Testing</li>
            <li>E2E Testing</li>
        </ul>    
    </ul>
</div>
</template>
<script>
// import ButtonVue from "./ButtonVue.vue";
//tudo que for externo é aqui que importa
// import exemplo from "./exemplo";

//sempre exporta um objeto que significa a configuração do componente
export default {
    name: "ListaInstalar",  
    components: {
        // ButtonVue,
    },
  //Data é uma função que retorna count que é a contagem, basicamente o estado do componente
    data() {
        return {
        //   count: 0,
        };
    },
    methods: {
        // clicar() {
        //   this.count++;
        // },
    },
};
</script>

<style scoped>

</style>

