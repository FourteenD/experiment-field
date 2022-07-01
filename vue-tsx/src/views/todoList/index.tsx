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
    const searchContent = $ref("");
    let content = $ref<any>();
    const todoList = $ref<Type.TodoList>([]);

    const addTodoItem = (title: string) => {
      if (!title) return;
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
    watch(
      () => searchContent,
      (nVal) => {
        if (nVal.length) {
          let str = ["", ...nVal, ""].join(".*");
          let reg = new RegExp(str);
          const res = todoList.filter((item) => {
            return reg.test(item.title);
          });
          setTodoList(res);
        } else {
          setTodoList(todoList);
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
