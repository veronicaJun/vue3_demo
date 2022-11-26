<template>
  <h1>信息</h1>
  <h2 v-show="person.name">姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h3 v-show="person.sex">性别:{{person.sex}}</h3>
  <h3>工作:{{person.job.type}}</h3>
  <h3>薪水:{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeInfo">修改信息</button>
  <button @click="addSex">添加一个 sex 属性</button>
  <button @click="deleteName">删除一个  name 属性</button>
</template>

<script>
import {ref, reactive} from 'vue';
export default {
  name: 'App',
  setup(){
    let person = reactive({
      name : '张三',
      age : 18,
      job : {
        type: '前端工程师',
        salary: '30k'
      },
      hobby : ['抽烟','喝酒','烫头']
    })

    function changeInfo() {
      person.name = '李思'
      person.age= 28

      person.job.type = '后端工程师'
      person.job.salary = '50k'
      person.hobby[0] = '学习';
    }

    function addSex() {
      person.sex = '男'
    }

    function deleteName(){
      delete person.name
    }

    return {
      person,
      changeInfo,
      addSex,
      deleteName
    }

  }
}
</script>

