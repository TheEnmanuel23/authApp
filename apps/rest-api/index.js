const http = require('http');
const express = require('express')
const cors = require('cors')
const { port } = require('./config/env.dev')
const jwtCheck = require("./utils/check-auth");
const publicRoutes = require('./src/public/router')
const privateRoutes = require('./src/private/router')
const setupGraphqlServer = require('./src/graphql/router');

const app = express()
const httpServer = http.createServer(app);

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

setupGraphqlServer(httpServer, app)
app.use('/public', publicRoutes)
app.use('/private', jwtCheck, privateRoutes)

httpServer.listen({ port }, () => {
  console.log(`🚀 Rest Server ready at http://localhost:${port}`);
})
