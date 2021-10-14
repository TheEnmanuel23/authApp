import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Button, Form } from "react-bootstrap"
import { TodoType } from "../utils/types"
import { addTodo } from "../utils/db";

export type PropsTodoForm = {
  values?: TodoType,
  handleSubmit: (newTodos: TodoType[]) => void
}

export const defaultTodo = {
  id: '',
  name: '',
  description: '',
  done: false
}

const TodoForm = ({ values = defaultTodo, handleSubmit }: PropsTodoForm) => {
  const [state, setState] = useState<TodoType>(values)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }


  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newTodo = { ...state, id: uuidv4() }
    const todos = addTodo(newTodo)
    handleSubmit(todos)
    setState(defaultTodo)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="todo.field">
        <Form.Control size="lg" placeholder="e.g. Sprint planning" name="name" value={state.name} onChange={onChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control size="sm" placeholder="Description" name="description" value={state.description} onChange={onChange} />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Add
      </Button>
    </Form>
  )
}

export default TodoForm
