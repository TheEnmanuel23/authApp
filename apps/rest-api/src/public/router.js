const express = require('express')

const router = express.Router()

const publicData = [
  {
    id: '1',
    name: 'public item 1',
  },
  {
    id: '2',
    name: 'public item 2',
  },
]

router.get('/', (req, res) => {
  res.json({ data: publicData })
})

router.post('/', (req, res) => {
  publicData.push(req.body)
  res.json(req.body)
})

router.get('/:id', (req, res) => {
  const item = publicData.find(item => item.id === req.params.id)

  if (!item) {
    return res.status(404).send(`Item with id ${req.params.id} not found`)
  }

  res.json(item)
})

module.exports = router
