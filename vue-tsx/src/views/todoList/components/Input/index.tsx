import { defineComponent, watch } from "vue";

import styl from "./index.module.styl";

export default defineComponent({
  props: {
    maxLength: {
      type: Number,
      default: 10,
    },
    placeholder: {
      type: String,
      default: "添加任务",
    },
  },
  setup(props, { emit }) {
    let content = $ref<string>("");
    watch(() => content, () => {
      content = content.replace(/\s*/g, "").substring(0, props.maxLength);
      emit("update:value", content);
    }, { deep: true });
    return () => (
      <input placeholder={props.placeholder} class={styl.input} v-model={content} type="text"></input>
    )
  },
})
