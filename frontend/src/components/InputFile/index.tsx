import { ChangeEvent } from 'react'

import Button from '../Button'

import './style.css'

type InputFileProps = {
  name: string
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void
  onRemoveFile: () => void
  selectedFile?: File
}

export default function InputFile({ name, selectedFile, onSelectFile, onRemoveFile }: InputFileProps) {
  if (!selectedFile) return (
    <div className="input-file-selection">
      <span>Select a <strong>CSV</strong> file to load its content</span>

      <div>
        <label className="input-file-label" htmlFor="input-file">
          Select File
        </label>
        <input
          id="input-file"
          className="input-file"
          type="file"
          name={name}
          onChange={onSelectFile}
        />
      </div>
    </div>
  )

  return (
    <div className="selected-file">
      <span>Selected file</span>

      <span className="filename">{selectedFile.name}</span>

      <Button theme="danger" onClick={onRemoveFile}>Remove File</Button>
    </div>
  )
}
