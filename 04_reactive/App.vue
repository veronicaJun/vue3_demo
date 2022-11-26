<template>
  <h1>信息</h1>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h3>工作:{{person.job.type}}</h3>
  <h3>薪水:{{person.job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
</template>

<script>
import {ref, reactive} from 'vue';
export default {
  name: 'App',
  setup(){
    // 普通的数据
    // let name = '张三'
    // let age = 18

    // 响应式数据
    // let name = ref('张三')
    // let age = ref(18)
    // let job = ref({
    //   type: '前端工程师',
    //   salary: '30k'
    // })

    // reactive
    // let job = reactive({
    //   type: '前端工程师',
    //   salary: '30k'
    // })
    // let hobby = reactive(['1','2','3'])

    let person = reactive({
      name : '张三',
      age : 18,
      job : {
        type: '前端工程师',
        salary: '30k'
      },
      hobby : ['1','2','3']
    })

    function changeInfo() {
      // name.value = '李思'
      // age.value= 28

      // ref
      // job.value.type = '后端工程师'
      // job.value.salary = '50k'

      //reactive
      // console.log(job);
      // job.type = '后端工程师'
      // job.salary = '50k'

      // hobby[0] = 999;
      // console.log(hobby);

      //reactive
      console.log(person)
    }

    return {
      person,
      changeInfo
    }

  }
}
</script>

