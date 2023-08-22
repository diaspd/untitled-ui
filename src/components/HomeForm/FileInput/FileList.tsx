'use client'

import { FileItem } from './FileItem'
import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return <FileItem key={file.name} name={file.name} size={file.size} />
      })}
    </div>
  )
}
