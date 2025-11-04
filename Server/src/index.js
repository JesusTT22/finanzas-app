const express = require('express')
const app = express()
const port = 3000
const routes = require('./api/endPoints.js')

app.use('/', routes);

app.listen(port, () => {
    console.log(`El puerto se encuentra en ${port}`)
})