import { Fragment } from 'react'
import LabelValue from '../LabelValue'

import './style.css'

type User = {
  name: string
  city: string
  country: string
  favoriteSport: string
}

type CardProps = {
  user: User
}

export default function Card({ user }: CardProps) {
  return (
    <div className="card">
      {
        Object.keys(user).map(
          (label: string, index: number) => (
            <Fragment key={index}>
              <LabelValue label={label} value={user[label as keyof User]} />
            </Fragment>
          )
        )
      }
    </div>
  )
}
