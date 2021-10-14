import { useState } from "react"
import TodoForm, { defaultTodo } from "../../components/TodoForm"
import TodoList from "../../components/TodoList"
import { TodoType } from "../../utils/types"

const Todo = () => {
  const [todoList, refreshTodoList] = useState<TodoType[]>([])

  const handleSubmit = (todos: TodoType[]) => {
    refreshTodoList(todos)
  }

  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default Todo

