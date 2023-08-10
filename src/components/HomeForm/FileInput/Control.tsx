'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'
import { useFileUpload } from '../../../hooks/useFileUpload'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { simulateFileUpload } = useFileUpload()

  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    simulateFileUpload()

    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      id={id}
      multiple={multiple}
      {...props}
    />
  )
}
