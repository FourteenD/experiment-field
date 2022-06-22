import { defineComponent } from "vue";
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
        <div>{props.title}</div>
      </>
    );
  },
});
