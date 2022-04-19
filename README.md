# vue-cli-wiki-v1.1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Introdução ao Vue.js
* O que é?
	* Framework progressivo, usa em conjunto com outros frameworks e bibliotecas, e fornece Single Page Application
* Criador por?
	* Evan You(Google) em 2013/2014
* Como funciona?
	* Renderização declarativa
* Composição de componentes 
* Visibilidade do google Nuxt.js Gridsome VuePress
* Desenvolvimento hibrido NativeScript/Quasar/Vue Native(Converte o codigo para o react native)
# Conhecendo o Vue CLI 
	npm install -g @vue/cli
	vue create vue-wiki-cli
# Vue CLI UI
	vue ui
# Src
	Arquivo main.js é o iniciador do projeto Vue, seleciona o elemento html e injeta o código do componente vue
	Arquivo App.vue arquivo default 
# Código Index.html
	<!DOCTYPE html>
	<html lang = "en">
	<head>
	...
	</head>
	<body>
		<div id="app">
			{{mesage}}
			<button @click="message = 'Ola' ">Escreve Ola</button>

		</div>
		<script src="https://cdn.jsdelivr.net/npm/vue@3.2.33"></script>
		<script>
			const app = new Vue({
				el: "#App",
				data: {
					message: 'Hello DIO',
				},
			});
		</script>
	</body>
	
# Código HelloWorld.vue
	<template>
	  <div class="hello">
	    <h1>{{ msg }}</h1>
	    <button @click="msg = 'Ola' ">Escreve Ola</button>

	  </div>
	</template>
	<script>

	export default {
	  name: 'HelloWorld',
	  props: {
	    msg: String,
	  },
	};
	</script>
	<!-- Add "scoped" attribute to limit CSS to this component only -->
	<style scoped lang="scss">
	h3 {
	  margin: 40px 0 0;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
	</style>

# O que são componentes?
	* Todo trecho de código que representam uma parte do sistema, por exemplo um header com botões, uma 
	barra de pesquisa um botão. Basicamente trechos de código que dão algum significado para a aplicação.
	
	App.vue é um componente, porém é um componente que vai englobar outros, componente root/container

	Primeiro componente a ser criado <ButtonView> em template
	Importa na parte de script 
		import ButtonVue from './ButtonVue.vue';

	Em ButtonVue.vue
	<template>
	<button @click="clicar">
		Clicou {{ count }} times
	</button>

	</template>
	<script>
	//tudo que for externo é aqui que importa
	Import exemplo from './exemplo';

	//sempre exporta um objeto que significa a configuração do componente
	export default {
		name: 'ButtonName',
		//Data é uma função que retorna count que é a contagem, basicamente o estado do componente
		data(){
			return {
				count:0,
			}
		},
		methods: {
			click() {
				this.count++
			}

		}
	}

	</script>

# Exemplo Arquivo ButtonVue.vue
	<template>
	  <button @click="clicar">Clicou {{ count }} times</button>
	</template>
	<script>
	//tudo que for externo é aqui que importa
	// import exemplo from "./exemplo";
	//sempre exporta um objeto que significa a configuração do componente
	export default {
	  name: "ButtonName",
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
	
# Exemplo Arquivo App.vue
	<template>
	  <div id="app">
	    <ButtonView></ButtonView>
	    <ButtonString></ButtonString>
	  </div>
	</template>
	<script>
	import ButtonVue from './ButtonVue.vue';
	export default {
	  name: 'App',
	  components: {
	    ButtonVue,
	  }
	}
	</script>
	<style>
	#app {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 100vh;
	}
	</style>

# Exemplo Arquivo component.js
	import Vue from 'vue';
	//criar template por string
	Vue.component('ButtonString', {
	    template: '<button @click="clicar">Clicar {{count}} vezes </button>', 
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
	
# Maneiras de criar e usar um componente:
## 1ºArquivo .vue é o componente
	é basicamente criar um arquivo com o nome do componente com um export default no final contendo o nome do
	arquivo/componente um data com os dados para serem armazenados/criados e um methods para manter os metodos;

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
## 2ºArquivo para registro de components.js
	cria um arquivo components.js importa Vue from vue, e registra os components por aqui. Pode carregar no template uma tag html de button por exemplo e assim o componente já está todo pronto no registro ou registrar o componente com um id/name de uma tag html tipo #button -x-template e usar apenas a parte de data e methods para tratar;

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

## 3ºArquivo App.vue renderiza os components
	<template>
	  <div id="app">
	    <p>Hello World</p>
	    <ButtonVue></ButtonVue>
	    <ButtonString></ButtonString>
	    <ButtonTemplateString></ButtonTemplateString>
	    <ButtonXTemplate></ButtonXTemplate>
	  </div>
	</template>
	<script>
	import ButtonVue from './ButtonVue.vue';
	window.Vue = require('vue');
	export default {
	  name: 'App',
	  components: {
	    ButtonVue,
	  }
	}
	</script>
	<style>
	#app {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  height: 100vh;
	}
	</style>






