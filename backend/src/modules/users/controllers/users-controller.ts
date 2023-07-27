import { Request, Response } from 'express'

import { IUserService } from '../services/iuser-service'

type Query = {
  q: string
}

export default class UsersController {
  constructor(private usersService: IUserService) {}

  public async get(req: Request<{}, {}, {}, Query>, res: Response): Promise<void> {
    const users = await this.usersService.get(req.query.q)

    res.status(200).json(users)
  }
}
