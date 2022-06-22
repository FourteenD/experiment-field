import { defineComponent } from "vue";

import NavBar from "@/components/NavBar";

export default defineComponent({
  name: "Home",
  setup() {
    return () => (
      <>
        <NavBar></NavBar>
      </>
    );
  },
});
