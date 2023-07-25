import InvalidQueryError from "../errors/invalid-query-error"
import FilterVO from "../filter-vo"

describe('Filter VO', () => {
  describe('fromQuery()', () => {
    it('Should return "undefined" if no "query" is passed to "fromQuery" method', () => {
      expect(FilterVO.fromQuery()).toBeUndefined()
    })

    it('Should throw an "InvalidQueryError" when receive a key that not belongs to the "User" schema', () => {
      expect(() => FilterVO.fromQuery('name:John Doe,age:20,status:active'))
        .toThrowError(new InvalidQueryError('age, status'))
    })

    it('Should receive a filter from query string, parse the string, and instantiate a "FilterVO"', () => {
      const filterVO = FilterVO.fromQuery('name:John Doe,city:New York')

      expect(filterVO).toBeInstanceOf(FilterVO)
      expect(filterVO).toHaveProperty('name', 'John Doe')
      expect(filterVO).toHaveProperty('city', 'New York')
    })
  })

  describe('toValidFilter()', () => {
    it('Should get an object with only the valid filter values, removing all undefined', () => {
      const filterVO = FilterVO.fromQuery('name:John Doe,city:New York')

      expect(filterVO?.toUserFilter())
        .toEqual({
          name: 'John Doe',
          city: 'New York'
        })
    })
  })
})
