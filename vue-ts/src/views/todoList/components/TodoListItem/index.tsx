import { defineComponent, h } from "vue";

import styl from "./index.module.styl";

const todoListItemProps = {
  title: String,
  isCheck: Boolean,
  isActive: Boolean,
};
const props = defineProps(todoListItemProps)
export default defineComponent({
  name: "TodoListItem",
  setup() {
    return () =>
      h(
        "div",
        {
          class: "wrap",
          innerHTML: "list-item",
        }
      )
  },
})
