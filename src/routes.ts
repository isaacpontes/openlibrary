import express from 'express'
import { usersController } from './controllers/users-controller'

const router = express.Router()

router.get('/users', usersController.index)
router.post('/users', usersController.save)
router.get('/users/:id', usersController.show)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)

export { router }