const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// index page route
app.get('/', (req, res) => {
  res.render('index')
})

// show page route
app.get('/:moreInfo', (req, res) => {
  const moreInfoPage = req.params.moreInfo
  res.render('show', { moreInfoPage })
})

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
})