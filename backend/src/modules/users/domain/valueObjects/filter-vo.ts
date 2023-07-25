import User from '../user'
import InvalidQueryError from './errors/invalid-query-error'

export const VALID_FILTER_KEYS = new Set<string>(['name', 'city', 'country', 'favoriteSport'])

export default class FilterVO {
  private static validateFilter(parsedQuery: Record<string, string>): void {
    const queryKeys = Object.keys(parsedQuery)
    const invalidKeys = queryKeys.filter((key: string) => !VALID_FILTER_KEYS.has(key))

    if (invalidKeys?.length)
      throw new InvalidQueryError(invalidKeys.join(', '))
  }

  private static parseQuery(query: string): Record<string, string> {
    return query
      .split(',')
      .reduce(
        (filter: Record<string, string>, query: string) => {
          const [key, value] = query.split(':')

          filter[key] = value

          return filter
        },
        {}
      )
  }

  public static fromQuery(query?: string): FilterVO | undefined {
    if (!query) return

    const parsedQuery = this.parseQuery(query)

    this.validateFilter(parsedQuery)

    return new FilterVO(
      parsedQuery.name,
      parsedQuery.city,
      parsedQuery.country,
      parsedQuery.favoriteSport
    )
  }

  constructor(
    public name?: string,
    public city?: string,
    public country?: string,
    public favoriteSport?: string
  ) {}

  public toUserFilter(): User {
    return Object
      .keys(this)
      .reduce(
        (userFilter: User, key: string) => {
          if (!this[key as keyof FilterVO]) return userFilter

          userFilter[key as keyof User] = <string>this[key as keyof FilterVO]

          return userFilter
        },
        {} as User
      )
  }
}
