const express = require('express')
const router = express.Router()

let todoList = [{
  id: '1',
  name: 'test 1',
  description: 'description 1',
  done: false
}]

router.get('/', (req, res) => {
  res.send(todoList)
})

router.get('/:id', (req, res) => {
  res.send(todoList.find(item => item.id === req.params.id))
})

router.post('/', (req, res) => {
  res.send(todoList.push(req.body.todo))
})

router.put('/:id', (req, res) => {
  const newTodo = todoList.find(item => item.id === req.params.id)
  newTodo.done = true
  res.send(newTodo)
})

router.delete('/:id', (req, res) => {
  todoList = todoList.filter(item => item.id !== req.params.id)
  res.send({ deleted: true, item: req.params.id })
})

module.exports = router
