import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
    console.log(`Server started successfuly at port ${PORT}`)
})