import Vue from 'vue';
//AQUI REGISTRA OS COMPONENTS DA APLICAÇÃO 
//criar template por string
Vue.component('ButtonString', {
    template: '<button @click="clicar">Clicar ButtonString {{count}} vezes </button>', 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
})

//pode ter varios components dentro de components.js ajuda 
Vue.component('ButtonTemplateString', {
    template: '<button @click="clicar">Clicar ButtonTemplateString {{count}} vezes </button>', 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
})

//pode ter varios components dentro de components.js ajuda 
Vue.component('ButtonXTemplate', {
    template: '#button-x-template', 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
})

//inline template
//nesse caso não precisa de template pois já está no App.vue
Vue.component('ButtonInLine', { 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
})

//Renderiza o template no proprio componente por meio de renderizar o elemento com render e retornar um create elemente nao achei muito funcional na real
Vue.component('ButtonRender', { 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
    render(createElement){
        return createElement(
           'button',
           {
               on: {
                   click: () => this.count++
               }
           },
           [
               'Clicar ButtonRender ' + this.count + ' vezes'
           ]
        )
    },
})

//Escrever html no js, então é só colocar o render para retornar direto o html
//Para o JSX precisa escrever o html mais parecido com react
Vue.component('ButtonJSX', { 
    data(){
        return{
            count: 0,
        };
    },
    methods: {
        clicar(){
            this.count++;
        },
    },
    render(){
        return (
            <button onClick={this.clicar}>Clicar ButtonJSX {this.count} vezes </button>
        )

    },
})
