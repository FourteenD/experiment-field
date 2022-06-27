import { defineComponent, type ExtractPropTypes, defineProps } from "vue";

import styl from "./index.module.styl";

export default defineComponent({
  name: 'HomeMenuItem',
  props: {
    emoji: String,
    title: String
  },
  emits: ['click'],
  setup(props, { emit }) {
    const click = () => {
      emit('click');
    }
    return () => (
      <div onClick={click} class={styl.item}>
        <div class={styl.item__emoji}>{props.emoji}</div>
        <div class={styl.item__title}>{props.title}</div>
      </div>
    )
  }
});
