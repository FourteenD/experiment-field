import { defineComponent } from "vue";
import styl from "./index.module.styl";

export default defineComponent({
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  setup(props) {
    return () => (
      <>
        <div class={styl.title}>{props.title}</div>
      </>
    );
  },
});
