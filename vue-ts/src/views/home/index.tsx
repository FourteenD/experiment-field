import { defineComponent } from "vue";

import NavBar from "@/components/NavBar";

import HomeMenuItem from "./components/HomeMenuItem";
import { log } from "console";

export default defineComponent({
  name: "Home",
  setup() {
    const menuList = $ref([
      {
        emoji: '📅',
        title: "TodoList",
      },
      {
        emoji: '📅',
        title: "TodoList",
      },
      {
        emoji: '📅',
        title: "TodoList",
      },
      {
        emoji: '📅',
        title: "TodoList",
      },
      {
        emoji: '📅',
        title: "TodoList",
      },
      {
        emoji: '📅',
        title: "TodoList",
      },
    ])

    return () => (
      <>
        <NavBar title='首页'></NavBar>
        {
          menuList.map(item => {
            return <HomeMenuItem emoji={item.emoji} title={item.title}></HomeMenuItem>
          })
        }
      </>
    );
  },
});
