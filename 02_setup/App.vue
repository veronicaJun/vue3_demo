<template>
  <h1>信息</h1>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
// import {h} from 'vue';
export default {
  name: 'App',
  setup(){
    let name = '张三'
    let age = 18

    function sayHello(){
      console.log(`我叫${name},我${age}岁,你好呀`)
    }
    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数(渲染函数)
    // return ()=> h('h1','娃哈哈')
  }
}
</script>

