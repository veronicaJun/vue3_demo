// 工厂函数 createApp Vue2 Vue 构造函数
import { createApp } from 'vue' 
import App from './App.vue'

createApp(App).mount('#app')

/*
vue2 写法
    import Vue from 'vue'
    import App from './App.vue'
    new Vue({
        render: h => h(App),  // h 为 createElement
    }).$mount('#app')
*/