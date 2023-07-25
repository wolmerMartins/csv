import { Request, Response, Router } from 'express'

import { filesRouter } from './modules/files/routes'
import { usersRouter } from './modules/users/routes'

const router = Router()

router.use('/api/files', filesRouter)
router.use('/api/users', usersRouter)

router.use((req: Request, res: Response) => {
  res.status(404).json({
    message: 'Route not found',
    code: 'route_not_found'
  })
})

export default router
