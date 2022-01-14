import express from 'express'
import User from './models/user'

const app = express()

app.use(express.json())

const router = express.Router()

router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        return res.status(400).json({ error })
    }
})

router.post('/users',async (req, res) => {
    const { name, username, password } = req.body

    try {
        const user = await User.create({ name, username, password, role: 'user'})
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ error })
    }
})

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, () => {
    console.log(`Server started successfuly at port ${PORT}`)
})