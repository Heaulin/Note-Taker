const express = require ('express')
const {join} = require ('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Use routes folder to get api routes for notes page.
app.use(require('./routes'))

// routes to index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, './public/index.html'))
})
app.listen(process.env.PORT || 3000)