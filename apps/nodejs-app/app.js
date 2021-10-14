const express = require('express')
const { auth, requiresAuth } = require('express-openid-connect');
require('dotenv').config()
const profileRoute = require('./profileRoute')
const todoListRoute = require('./todolistRoute')

const app = express()

const port = process.env.PORT || 3000

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'TODO App' : 'Logged out, go to http://localhost:3000/login')
})

app.use('/profile', requiresAuth(), profileRoute)
app.use('/todolist', requiresAuth(), todoListRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
