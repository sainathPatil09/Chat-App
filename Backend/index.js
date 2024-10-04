import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.route.js'
import messageRoute from './routes/message.route.js'
import { app, server } from './SocketIO/server.js'



dotenv.config()

//Middleware  
app.use(express.json())
app.use(cookieParser())

app.use(cors())


const PORT = process.env.PORT
const URI = process.env.MONGODB_URI

try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB")
} catch (error) {
    console.log(error)
}


app.use("/api/user", userRoute)
app.use("/api/message", messageRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})