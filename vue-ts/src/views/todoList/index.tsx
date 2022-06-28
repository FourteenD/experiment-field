import { defineComponent, watch } from "vue";
import * as Type from "./type";

import Bottom from "./components/Bottom";
import NavBar from "@/components/NavBar";
import TodoListItem from "./components/TodoListItem";
import Input from "./components/Input";

import styl from "./index.module.styl";
export default defineComponent({
  name: "TodoList",
  setup() {
    let content = $ref<any>();
    const todoList = $ref<Type.TodoList>([]);

    const addTodoItem = (title: string) => {
      todoList.push({
        title,
        state: "unfinished",
      });
      setTodoList(todoList);
    };
    const removeTodoItem = (index: number) => {
      todoList.splice(index, 1);
      setTodoList(todoList);
    };

    const toggleTodoItem = (index: number) => {
      todoList[index].state =
        todoList[index].state === "finished" ? "unfinished" : "finished";
      todoList.push(todoList[index]);
      todoList.splice(index, 1);
      setTodoList(todoList);
    };

    const setTodoList = (e: Type.TodoList) => {
      content = e.map((item, index) => (
        <TodoListItem
          key={index}
          title={item.title}
          isActive={item.state == "finished"}
          onDel={() => removeTodoItem(index)}
          onCheck={() => toggleTodoItem(index)}
        ></TodoListItem>
      ));
    };
    const searchContent = $ref("");
    watch(
      () => searchContent,
      (nVal, oVal) => {
        if (nVal.length) {
          todoList.filter((item) => {
            return;
          });
        }
      },
      { deep: true, immediate: true }
    );

    return () => (
      <>
        <NavBar title="Todo List"></NavBar>
        <div class={styl.search}>
          <Input v-model={searchContent} placeholder="Search..."></Input>
        </div>
        {content}
        <Bottom onConfirm={(e) => addTodoItem(e)}></Bottom>
      </>
    );
  },
});
