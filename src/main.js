import { createApp, h } from 'vue'
import Vue from 'vue'
import App from './App.vue'

import './components.js';


new Vue({
    render: h => h(App),
}).$mount('#root')

