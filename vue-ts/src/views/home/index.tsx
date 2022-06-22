import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Home',
  setup() {
    const todoList = ref([])
    const addItme = () => {
      todoList.value.push({
        name: '我是代办事项'
      })
    }
    return () => {
      return <><div>Home</div></>
    }
  }
})
