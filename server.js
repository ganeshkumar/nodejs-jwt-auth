const express = require('express')
const jwt = require('jsonwebtoken')
const yenv = require('yenv')
const env = yenv('./env.yaml', {env: 'development'})

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
  res.send('hello, welcome to Nodejs jwt app.')
})


app.post('/login', (req,res) => {
  //Authenticate User
  const username = req.body.username
  const user = { username: username }
  const accessToken = jwt.sign(user, env.AUTH_TOKEN_SECRET)
  res.json({accessToken: accessToken})
})

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts)
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, env.AUTH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user
    next()
  })
}
