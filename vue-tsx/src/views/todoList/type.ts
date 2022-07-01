export type TodoItem = {
  title: string,
  state: "unfinished" | "finished",
}
export type TodoList = Array<TodoItem>
