'use client'

import { useEffect } from 'react'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { formatBytes } from '@/utils/format-bytes'
import { Button } from '../Button'

import { useFileUpload } from '../../../hooks/useFileUpload'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: '',
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
        deleteButton: 'text-error-700 hover:text-error-900',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { progress, simulateFileUpload } = useFileUpload()
  const { container, icon, deleteButton } = fileItem({ state })

  useEffect(() => {
    simulateFileUpload()
  }, [])

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-400">
                {name}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-200">
                {formatBytes(size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3 pb-2">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div
                  className="h-2 w-4/5 rounded-full bg-violet-600 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
                <span className="text-zinc-500 dark:text-gray-400">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      {progress === 100 && state !== 'error' ? (
        <CheckCircle2 className="h-6 w-6 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteButton()}>
          <Trash2 className="h-5 w-5 hover:text-red-500" />
        </Button>
      )}
    </div>
  )
}