const express = require('express')
const app = express()
const port = 3000

// static 
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.redirect('/movies')
})
app.get('/movies', (req, res) => {
  res.send('listing movies')
})
app.get('/movie/:id', (req, res) => {
  const id = req.params.id
  res.send(`read movie:${id}`)
})
app.listen(port, () => {
  console.log('express server running on <http://localhost>:${port}')
})