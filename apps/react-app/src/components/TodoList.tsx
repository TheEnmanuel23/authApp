import { useEffect, useState } from "react"
import { BsFillTrashFill, BsFillCheckCircleFill } from "react-icons/bs";
import { Button, ListGroup } from "react-bootstrap"
import styled from "styled-components"
import { TodoType } from "../utils/types"
import { getTodoList, removeTodo, updateTodo } from "../utils/db";

const TodoName = styled.p`
  font-size: 20px;
  margin: 0;
`

const TodoDescription = styled.p`
  font-size: 12px;
  margin: 0;
`

const TodoItem = ({
  todo,
  onDelete,
  onDone
}: {
  todo: TodoType,
  onDelete: () => void
  onDone: () => void
}) => {


  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      <div>
        <TodoName>{todo.name}</TodoName>
        <TodoDescription>{todo.description}</TodoDescription>
      </div>
      <div>
        {!todo.done && (
          <Button className="me-3" variant='outline-success' onClick={onDone}>
            <BsFillCheckCircleFill />
          </Button>
        )}
        <Button variant='outline-danger' onClick={onDelete}>
          <BsFillTrashFill />
        </Button>
      </div>
    </ListGroup.Item>
  )
}

const TodoList = ({ todoList: todoListUpdated }: { todoList: TodoType[] }) => {
  const [todoList, setTodoList] = useState<TodoType[]>([])

  useEffect(() => {
    setTodoList(todoListUpdated)
  }, [todoListUpdated])

  useEffect(() => {
    const savedData = getTodoList()
    setTodoList(savedData)
  }, [])

  const deleteItem = (todo: TodoType) => {
    const todoListUpdated = removeTodo(todo.id)
    setTodoList(todoListUpdated)
  }

  const onDone = (todo: TodoType) => {
    const todoListUpdated = updateTodo({ ...todo, done: true })
    setTodoList(todoListUpdated)
  }


  return (
    <ListGroup variant="flush">
      {todoList.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => deleteItem(todo)}
          onDone={() => onDone(todo)}
        />
      ))}
    </ListGroup>
  )
}

export default TodoList
