import { defineComponent } from "vue";
import * as Type from "./type";

import Bottom from "./components/Bottom";
import NavBar from "@/components/NavBar";
import TodoListItem from "./components/TodoListItem";

export default defineComponent({
  name: "TodoList",
  setup() {
    const todoList = $ref<Type.TodoList>([]);

    const addTodoItem = (title: string) => {
      todoList.push({
        title,
        state: "unfinished",
      });
    };
    const removeTodoItem = (index: number) => {
      todoList.splice(index, 1);
    };

    const toggleTodoItem = (index: number) => {
      todoList[index].state =
        todoList[index].state === "finished" ? "unfinished" : "finished";
      todoList.push(todoList[index]);
      todoList.splice(index, 1);
    };

    return () => (
      <>
        <NavBar title="Todo List"></NavBar>
        {todoList.map((item, index) => (
          <TodoListItem
            key={index}
            title={item.title}
            isActive={item.state == "finished"}
            onDel={() => removeTodoItem(index)}
            onCheck={() => toggleTodoItem(index)}
          ></TodoListItem>
        ))}
        <Bottom onConfirm={(e) => addTodoItem(e)}></Bottom>
      </>
    );
  },
});
