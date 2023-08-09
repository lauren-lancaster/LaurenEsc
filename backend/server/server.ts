import express from 'express'
import path from 'path'
import users from './routes/users'
import sceneRoute from './routes/scenes'
import questions from './routes/questions'
import hints from './routes/hints'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/scenes', sceneRoute)
server.use('/api/v1/users', users)
server.use('/api/v1/questions', questions)
server.use('/api/v1/hints', hints)

export default server
