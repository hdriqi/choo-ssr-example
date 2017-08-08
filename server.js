import express from 'express'
import client from './src/routes.js'

const app = express()

app.use(express.static('static'))
app.set('view engine', 'pug')

app.get('*', function (req, res) {
  let html = client.toString(req.url)
  res.render('index', { root: html })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})