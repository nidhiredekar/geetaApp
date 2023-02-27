require('dotenv').config();
const connectToMongo = require('./db')
const cors = require('cors')
const express = require('express')

connectToMongo();
const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())
//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/shloka',require('./routes/shloka'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

