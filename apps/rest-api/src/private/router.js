const express = require("express");

const router = express.Router();

const data = [
  {
    id: '1',
    name: 'private item 1',
  },
  {
    id: '2',
    name: 'private item 2',
  },
  {
    id: '3',
    name: 'private item 3',
  }
]

router.get('/', (req, res) => {
  res.json(data)
})

router.post('/', (req, res) => {
  data.push(req.body)
  res.json(req.body)
})

router.get('/:id', (req, res) => {
  const item = data.find(item => item.id === req.params.id)
  if (!item) {
    return res.status(404).send(`Item with id ${req.params.id} not found`)
  }

  res.json(item)
})

module.exports = router
