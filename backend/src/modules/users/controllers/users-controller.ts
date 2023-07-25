import { Request, Response } from 'express'

import { IUserService } from '../services/iuser-service'
import FilterVO from '../domain/valueObjects/filter-vo'

type Query = {
  q: string
}

export default class UsersController {
  constructor(private usersService: IUserService) {}

  public async get(req: Request<{}, {}, {}, Query>, res: Response): Promise<void> {
    const filterVO = FilterVO.fromQuery(req.query.q)

    const users = await this.usersService.get(filterVO)

    res.status(200).json(users)
  }
}
