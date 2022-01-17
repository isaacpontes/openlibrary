import express from 'express'
import { authorsController } from './controllers/author-controller'
import { usersController } from './controllers/users-controller'

const router = express.Router()

router.get('/users', usersController.index)
router.post('/users', usersController.save)
router.get('/users/:id', usersController.show)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)

router.get('/authors', authorsController.index)
router.post('/authors', authorsController.save)
router.get('/authors/:id', authorsController.show)
router.put('/authors/:id', authorsController.update)
router.delete('/authors/:id', authorsController.delete)

export { router }