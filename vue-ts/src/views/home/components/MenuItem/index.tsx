import { defineComponent, type ExtractPropTypes, defineProps } from "vue";

import styl from "./index.module.styl";

const props = {
  emoji: String,
  title: String
};
export type Props = ExtractPropTypes<typeof props>;

export default defineComponent({
  name: 'HomeMenuItem',
  props: props,
  setup(props) {
    return () => (
      <div class={styl.item}>
        <div class={styl.item__emoji}>{props.emoji}</div>
        <div class={styl.item__title}>{props.title}</div>
      </div>
    );
  }
});
