import { defineComponent } from "vue";

import styl from "./index.module.styl";

export default defineComponent({
  setup() {
    return () => (
      <div class={styl.wrap}>
        <div class={styl.input_wrap}>
          <input placeholder="添加任务" class={styl.input} type="text"></input>
        </div>
        <div class={styl.add}>
          添加
        </div>
      </div>
    )
  },
})
