import { defineComponent } from "vue";

import NavBar from "@/components/NavBar";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
      <>
        <NavBar title='首页'></NavBar>
      </>
    );
  },
});
