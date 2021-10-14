import { TodoType } from "./types";

export const addTodo = (todo: TodoType) => {
  const savedTodoList = getTodoList()
  const todoListUpdated = [todo, ...savedTodoList,]
  localStorage.setItem('todolist', JSON.stringify(todoListUpdated))
  return todoListUpdated
}

export const getTodoList = () => {
  const savedData = localStorage.getItem('todolist')
  return JSON.parse(savedData || "[]")
}

export const removeTodo = (todoId: string) => {
  const savedTodoList = getTodoList()
  const todoListUpdated = savedTodoList.filter((todo: TodoType) => todo.id !== todoId)
  localStorage.setItem('todolist', JSON.stringify(todoListUpdated))
  return todoListUpdated
}

export const updateTodo = (todo: TodoType) => {
  const savedTodoList = getTodoList()
  const todoListUpdated = savedTodoList.map((item: TodoType) => {
    if (item.id === todo.id) {
      return todo
    }

    return item
  })

  localStorage.setItem('todolist', JSON.stringify(todoListUpdated))
  return todoListUpdated
}
