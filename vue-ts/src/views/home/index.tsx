import { defineComponent, ref } from "vue";



export default defineComponent({
  name: 'Home',
  setup() {
    type todoItme = {
      name: string,
      state: 'unfinish' | 'finish'
    }
    const todoList = $ref<Array<todoItme>>([])
    const addItme = () => {
      todoList.push({
        name: '我是代办事项',
        state: 'unfinish',
      })
    }
    return () => {
      return <><div>Home</div></>
    }
  }
})
