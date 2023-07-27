import * as fs from 'fs'
import { EOL } from 'os'

import FilePathRequiredError from '../../errors/file-path-required-error'
import { filesService } from '..'

const UPLOAD_FOLDER = 'upload'
const TEST_FILE_PATH = `${UPLOAD_FOLDER}/test-123456.txt`

const CSV_HEADERS = ['name,city']

function generateFile(data: string[]): void {
  fs.writeFileSync(
    TEST_FILE_PATH,
    data.join(EOL)
  )
}

describe('file-service', () => {
  beforeAll(() => {
    try { fs.mkdirSync(UPLOAD_FOLDER) } catch {}
  })

  afterAll(() => {
    try { fs.unlinkSync(UPLOAD_FOLDER) } catch {}
  })

  describe('getData()', () => {
    it('Should try to save the file data and throw if no file path is provided', async () => {
      await expect(() => filesService.getData())
        .rejects
        .toThrowError(new FilePathRequiredError())
    })

    it('Should return an empty array if the CSV file contains only headers', async () => {
      generateFile(CSV_HEADERS)

      const data = await filesService.getData(TEST_FILE_PATH)

      expect(data).toHaveLength(0)
    })

    it('Should receive a csv file and return the data in json format', async () => {
      generateFile(CSV_HEADERS.concat(['John Doe,New York']))

      const data = await filesService.getData(TEST_FILE_PATH)
      
      expect(data).toEqual([
        {
          name: 'John Doe',
          city: 'New York'
        }
      ])
    })
  })
})
