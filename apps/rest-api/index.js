const express = require('express')
const cors = require('cors')
const jwtCheck = require("./utils/check-auth");
const publicRoutes = require('./src/public/router')
const privateRoutes = require('./src/private/router')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.use('/public', publicRoutes)
app.use('/private', jwtCheck, privateRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

