require('dotenv').config()

const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.listen(3000)
app.use(express.json())

const posts = [
  {
    username: 'Foo',
    title: 'post 1'
  },
  {
    username: 'Bar',
    title: 'post 2'
  }
]

app.get('/', (req, res) => {
  res.send('hello')
})


app.post('/login', (req,res) => {
  //Authenticate User
  const username = req.body.username
  const user = { username: username }
  const accessToken = jwt.sign(user, process.env.AUTH_TOKEN_SECRET)
  res.json({accessToken: accessToken})
})

app.get('/posts', (req, res) => {
  res.json(posts)
})
