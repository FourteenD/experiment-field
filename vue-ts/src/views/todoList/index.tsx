import { defineComponent } from "vue";
import * as Type from "./type";

import AddInput from "./components/Bottom";
import NavBar from "@/components/NavBar";
import TodoListItem from "./components/TodoListItem";


export default defineComponent({
  name: "TodoList",
  setup() {
    const unfinished = $ref<Type.TodoList>([])
    const finished = $ref<Type.TodoList>([])
    const todoList = $computed(() => [...unfinished, ...finished])

    const addTodoItem = (title: string) => {
      unfinished.push({
        title,
        state: "unfinished",
      })
    }
    const removeTodoItem = (index: number) => {
      unfinished.splice(index, 1)
    }
    return () => (
      <>
        <NavBar title="Todo List"></NavBar>
        {
          todoList.map((item) =>
            <TodoListItem></TodoListItem>
          )
        }
        <AddInput onConfirm={(e) => addTodoItem(e)}></AddInput>
      </>
    )
  },
});
