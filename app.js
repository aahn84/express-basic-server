const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/ping', (req, res, next) => {
  res.status(200).json({message: 'PONG!'})
})

app.use((err, req, res, next) => {
  res.status(status).json({error: err})
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Not found'}})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
