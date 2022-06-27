import { defineComponent, watch } from "vue";
import Input from "../Input";

import styl from "./index.module.styl";

export default defineComponent({
  name: "AddInput",
  props: {
    confirmText: {
      type: String,
      default: "添加",
    },
  },
  emits: ["confirm"],
  setup(props, { emit }) {
    const content = $ref<string>("");
    const confirm = () => {
      emit("confirm", content)
    }
    return () => (
      <div class={styl.wrap}>
        <div class={styl.input_wrap}>
          <Input v-model={content}></Input>
        </div>
        <div onClick={() => confirm()} class={styl.add}>
          {props.confirmText}
        </div>
      </div >
    )
  },
})
