<template>
    <div>
        <h1>Revitalidade e controle de estado</h1>
        <h2>Data()</h2>
        <p>A propriedade data() dos components Vue é uma das formas de atingir a reatividade.</p>
        <p>Data() é uma função que retorna um objeto que é onde as variáveis são declaradas.</p>
        <p>Components são pedaços de código que podem ser reaproveitados.</p>
        <p>Se a gente criasse variaveis de maneira onde fossem objetos puros iamos ter estados que ao serem reaproveitados
            em outros components se forem alterados seria alterado em outro.
            <strong>Por isso que o Vue quando cria o objeto data pede para que seja uma function.</strong></p>
        <h2>Mounted()</h2>
        <p>Usado quando o component já está montado, então só executa a função mounted no final do component.</p>
        <p>Faz parte do ciclo de vida do Vue.</p>
        <ul>
            <h3>Como o Vue rastreia essas variáveis para por essa reatividade no nosso component?</h3>
            <li>Usamos a propriedade mounted para passar um console.log(this)</li>
            <li>O this dentro do component significa a instancia Vue daquele component</li>
            <li>Uma delas é o count, na instancia do vue ele transformou esse count que estava dentro da propriedade data em uma variável, ou seja a gente consegue acessar esse cara pelo this</li>
        </ul>
        <h3>Como o Vue transformou a variavel count em data para que a gente consiga trabalhar com ela?</h3>
        <p>Basicamente o que o vue faz quando define objeto em data ele vai percorrer cada propriedade do objeto e vai criar getter e setters que de maneira que quando a gente editar essa variavel o vue vai conseguir identificar que ouve uma mudança. Sendo assim conseguimos acessar o this.set_count ou melhor this.count, só de fazer this.count = X ele já altera.</p>
        <p>Como o vue consegue implementar algumas coisas na instancia global dele ele não deixa criar algumas variaveis como $count1 e $_count2 o view da warning pq variaveis iniciadas em $ e _ pode dar conflito com as propriedades internas do vue.</p>
        <h4>Masss...</h4>
        <p>ele até deixa criar, porém não vai te dar acesso a ela puramente então não deixa editar, nem renderizar.<br>
        Mas caso realmente precise ele deixar manipular ela se acessar o $data que ai o vue expoe isso pra gente. o vue pega o data e expoe com essa variavel $data, o warning deixa de existir e renderiza, não consegue editar $propriedade precisa do $data.$count para o ++ funcionar.
        </p>

        <h3>E se a variavel que a gente quer por reatividade não for puro como um numero uma string ou um objeto, ou seja ter propriedades dentro dele?</h3>
        <p>Trocar count para um objeto com uma propriedade x e o valor zero e imprimir o count.x++</p>
        <p>Então com o resultado disso temos que o vue realmente vai percorrer todas as propriedades e vai colocar getters e setters para elas, ou seja a gente consegue simplesmente acessar uma propriedade interna do nosso objeto e editar ela como se fosse um valor qualquer. Assim deixa muito mais simples o código se precisar editar uma propriedade aninhada dentro de um objeto. Assim fica simples e reativo.</p>
        <p>Se já instanciou component e não colocou uma propriedade nele, e tentar colocar uma propriedade no mounted e colocar um y = 0 e imprimir no template ele não vai renderizar, pq uma vez que a instancia do vue está criada a gente não consegue mais definir valores para ela.</p>
        <ul>
            <h3>O que a gente pode fazer para criar uma propriedade apenas quando o estado for montado?</h3>
            <li>Isso é bom para quando a gente for criar reatividade dinamica por exemplo</li>
            <li>O vue fornece a função set() Vue.Set() que é para definir variaveis no sistema reativo</li>
            <li>Mas como estamos dentro do objeto temos o atalho this.$set()</li>
            <li>Então definimos this.$set(this.count, 'y', 1)</li>
            <li>Pode ser que precise de varias propriedades de uma só vez</li>
            <li>Então vamos no this.count e falamos para ele receber uma cópia dele mesmo e adicionamos por exemplo uma variavel { a: 1, b:2}
                <ul><li>this.count = {...this.count, ...{a : 1,b: 2}}</li></ul>
            </li>

            <li>Isso é possivel pq o count já é reativo a gente simplesmente alterou o objeto que a gente tinha</li>
            <li>O data uma vez criado não consegue mais receber reatividade</li>
            <li>
                Então se a gente precisar ter variaveis dinamicas por exemplo:
                <ul>
                    <li>Define variavel no root que vai receber todas essas novas variaveis dinamicas pq ai essa variavel criada vai ser reativa e consequentemente editada</li>
                    <li>Entao consegue adicionar propriedades dinamicas no component</li>
                </ul>
            </li>
            <li>Uma vez criada a propriedade podemos colocar ela</li>
            <li>No button por exemplo @click="count.a++"</li>
            <li>Isso faz com que incremente a propriedade/variável a</li>
            <li>Pq ele entendeu que quando a gente fez isso ele já mapeou essa reatividade pra gente</li>
        </ul>

        <hr>
        <ul>
            <h3>Lembretes</h3>
            <li>Utilizar data como função que retorna um objeto.</li>
            <li>Inicializar as variáveis que imaginamos que vamos precisar durante a utilização e o ciclo de vida do seu componente.
                Para evitar qualquer problema de tentar acessar uma propriedade ou criar uma nova que não tenha sido declarada e assim não gerar nenhum problema
            </li>
        </ul>
        <p></p>
        <button @click="count.x++">Click x</button>
        <button @click="count.y++">Click y</button>
        <button @click="count.a++">Click a</button>
        <button @click="count.b++">Click b</button>
        {{ count }}
        <!-- {{ y }} -->
    </div>
</template>
<script>
//tudo que for externo é aqui que importa
// import exemplo from "./exemplo";

//sempre exporta um objeto que significa a configuração do componente
export default {
    name: 'DataEMounted',
    components: {

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
};
</script>

