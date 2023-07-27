import { ChangeEvent, useState } from 'react'

import InputFile from '../../components/InputFile'
import Button from '../../components/Button'
import usePersons from '../../hooks/usePersons'

import './style.css'

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File>()
  const { state, loadPersons } = usePersons()

  function handleFileSelection(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files) {
      setSelectedFile(e.target.files[0])
    }
  }

  function handleFileRemoval(): void {
    setSelectedFile(undefined)
  }

  function uploadFile(): void {
    if (!selectedFile) return

    loadPersons(selectedFile)
  }

  return (
    <div className="file-upload">
      <InputFile
        name="file"
        selectedFile={selectedFile}
        onSelectFile={handleFileSelection}
        onRemoveFile={handleFileRemoval}
      />

      <div className="file-upload-button">
        <Button disabled={!selectedFile} onClick={uploadFile}>Upload File</Button>
      </div>

      {
        state?.error
          ? (
            <span className="file-upload-error">
              {state.error.message}
            </span>
          ) : null
      }
    </div>
  )
}
