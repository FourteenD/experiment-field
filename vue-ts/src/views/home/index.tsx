import { defineComponent } from "vue";

import style from "./index.module.styl";

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
      return <><div class={style.title}>Home</div></>
    }
  }
})
