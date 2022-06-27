import { defineComponent, onMounted } from "vue";

import { useRouter } from 'vue-router'

import NavBar from "@/components/NavBar";
import HomeMenuItem from "./components/MenuItem";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter()
    const menuList = $ref([
      {
        emoji: '📅',
        title: "TodoList",
        path: "/todoList",
      },
    ])
    const item = menuList.map((item, index) =>
      <HomeMenuItem onClick={() => clickHandler({ item, index })} emoji={item.emoji} title={item.title}></HomeMenuItem>
    )
    const clickHandler: (...args: any[]) => void = ({ item }) => {
      router.push(`@/views${item.path}`)
    }
    return () => (
      <>
        <NavBar title='Home'></NavBar>
        {item}
      </>
    );
  },
});
