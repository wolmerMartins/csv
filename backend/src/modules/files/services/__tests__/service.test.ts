import * as fs from 'fs'
import { EOL } from 'os'

import FilePathRequiredError from '../../errors/file-path-required-error'
import { filesService } from '..'

describe('Files Service', () => {
  describe('getData()', () => {
    it('Should try to save the file data and throw if no file path is provided', async () => {
      await expect(() => filesService.getData())
        .rejects
        .toThrowError(new FilePathRequiredError())
    })

    it('Should receive a csv file and return the data in json format', async () => {
      fs.writeFileSync('upload/test-123456.txt', [
        'name,city',
        'John Doe,New York'
      ].join(EOL))

      const data = await filesService.getData('upload/test-123456.txt')
      
      expect(data).toEqual([
        {
          name: 'John Doe',
          city: 'New York'
        }
      ])
    })
  })
})
