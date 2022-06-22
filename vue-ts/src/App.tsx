import { defineComponent } from 'vue'
import { setRemSize } from "@/utils/rem";

export default defineComponent({
  name: 'App',
  setup() {
    setRemSize()
  },
  render() {
    return <router-view></router-view>
  }
})
