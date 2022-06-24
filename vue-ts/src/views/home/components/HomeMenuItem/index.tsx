import { defineComponent, defineEmits } from "vue";

import styl from "./index.module.styl";

export default defineComponent({
  name: 'HomeMenuItem',
  props: {
    emoji: {
      type: String,
      default: '📅'
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  setup(props) {
    return () => (
      <div class={styl.item}>
        <div class={styl.item__emoji}>{props.emoji}</div>
        <div class={styl.item__title}>{props.title}</div>
      </div>
    );
  }
});
