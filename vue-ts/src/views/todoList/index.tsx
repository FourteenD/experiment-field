import { defineComponent } from "vue";

import style from "./index.module.styl";

export default defineComponent({
  name: "Home",
  setup() {
    type todoItem = {
      name: string;
      state: "notFinish" | "finish";
    };
    const todoList = $ref<Array<todoItem>>([]);
    const addItem = () => {
      todoList.push({
        name: "我是代办事项",
        state: "notFinish",
      });
    };
    return () => {
      return (
        <>
          <div class={style.title}>Home</div>
        </>
      );
    };
  },
});
