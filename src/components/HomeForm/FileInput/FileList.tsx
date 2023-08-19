'use client'

import { useEffect } from 'react'
import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/utils/format-bytes'
import { useFileUpload } from '../../../hooks/useFileUpload'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '../Button'

export function FileList() {
  const { files } = useFileInput()
  const { progress, simulateFileUpload } = useFileUpload()
  const [parent] = useAutoAnimate()

  useEffect(() => {
    simulateFileUpload()
  }, [])

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-200">
                  {formatBytes(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3 pb-2">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div
                    className="h-2 w-4/5 rounded-full bg-violet-600"
                    style={{ width: `${progress}%` }}
                  />
                  <span className="text-zinc-500 dark:text-gray-400">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
            <Button type="button" variant="ghost">
              <Trash2 className="h-5 w-5 text-zinc-500 hover:text-red-500" />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
