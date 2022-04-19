<template>
<div id="lista-components">
    <h1>Wiki Vue 2 Components</h1>
    <ul>
        <li>
            <h1>Arquivo Buttons.vue</h1>
            <p>É um arquivo que representa um coponente, ele deve ter um nome e ser importado em components</p>
            <ButtonVue></ButtonVue>
        </li>

        <li>
            <h1>Arquivo components.js</h1>
            <ul>
                <li>
                    <h1>Button String</h1>
                    <p>Cria as tags html por meio de uma string template contendo o código html do componente</p>
                    <ButtonString></ButtonString>
                </li>
                
                <li>
                    <h1>Button X Template</h1>
                    <p>Basicamente faz a parte de back end no arquivo components.js e o front fica no script da pagina</p>
                    <ButtonXTemplate></ButtonXTemplate>
                </li>

                <li>
                    <h1>Button In Line</h1>
                    <p>Faz a parte do back end no arquivo components.js e dentro da tag é colocado o template podendo chamar metodos e variaveis do back</p>
                    <ButtonInLine inline-template>
                        <button @click="clicar">Clicou ButtonInLine {{ count }} times</button>
                    </ButtonInLine>
                </li>
                
                <li>
                    <h1>Button Render</h1>
                    <p>Renderiza o template no proprio componente no back endm, renderozamdp o elemento com render e retornar um create elemente que precisa passar parametros para criar a tag nao achei muito funcional na real</p>
                    <ButtonRender></ButtonRender>
                </li>

                <li>
                    <h1>Button JSX</h1>
                    <p>Escreve html no js, então é só colocar o render para retornar direto o html</p>
                    <ButtonJSX></ButtonJSX>
                </li>
            </ul>
        </li>
    </ul>
</div>
</template>
<script>
import ButtonVue from "./ButtonVue.vue";
//tudo que for externo é aqui que importa
// import exemplo from "./exemplo";

//sempre exporta um objeto que significa a configuração do componente
export default {
    name: "ListaComponents",  
    components: {
        ButtonVue,
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

