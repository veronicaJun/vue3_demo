<template>
  <h1>信息</h1>
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h3>工作:{{job.type}}</h3>
  <h3>薪水:{{job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: 'App',
  setup(){
    // 普通的数据
    // let name = '张三'
    // let age = 18

    // 响应式数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: '前端工程师',
      salary: '30k'
    })

    function changeInfo() {
      name.value = '李思'
      age.value= 28
      job.value.type = '后端工程师'
      job.value.salary = '50k'
    }

    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>

