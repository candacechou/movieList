const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('express app for movies')
})

app.listen(port, () => {
  console.log('express server running on <http://localhost>:${port}')
})