import { Router } from 'express'
import { usersController } from './controllers'

const router = Router()

router.get('/', usersController.get.bind(usersController))

export const usersRouter = router
