import { defineComponent, h } from "vue";

import styl from "./index.module.styl";

export default defineComponent({
  name: "TodoListItem",
  props: {
    title: String,
    isActive: Boolean,
  },
  emits: ["check", "del"],
  setup(props, { emit }) {
    const checkComponent = () => {
      const isActiveArr = [styl.check] as any[];
      if (props.isActive) isActiveArr[1] = styl.check_activity;
      return h("div", {
        class: isActiveArr,
        onClick: check(),
      });
    };
    const check = () => {
      emit("check");
    };
    const delComponent = () => {
      return h("div", {
        class: styl.del,
        innerHTML: "删除",
        onClick: () => del(),
      });
    };
    const del = () => {
      emit("del");
    };
    return () =>
      h(
        "div",
        {
          class: styl.item,
          style: props.isActive ? "filter:gray;filter:grayscale( 100% )" : "",
        },
        [
          checkComponent(),
          h("div", {
            class: styl.content,
            innerHTML: props.title,
          }),
          delComponent(),
        ]
      );
  },
});
