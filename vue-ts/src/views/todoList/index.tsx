import { defineComponent, watch } from "vue";

import AddInput from "./components/AddInput";

import NavBar from "@/components/NavBar";

export default defineComponent({
  name: "TodoList",
  setup() {
    type todoItem = {
      text: string,
      isComplete: boolean,
    }
    const unfinished = $ref<Array<todoItem>>([])
    const finished = $ref<Array<todoItem>>([])

    const todoList = $ref([...unfinished, ...finished])
    watch(todoList, (nVal, oVal) => {
      console.log(nVal, oVal);
    })
    return () => (
      <>
        <NavBar title="Todo List"></NavBar>
        <AddInput></AddInput>
      </>
    )
  },
});
