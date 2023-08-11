'use client'

import { ComponentProps, ReactNode } from 'react'
import * as Toggle from '@radix-ui/react-toggle'

export interface RootProps extends ComponentProps<typeof Toggle.Root> {
  children: ReactNode
}

export function ToggleButton(props: RootProps) {
  return (
    <Toggle.Root
      aria-label="Toggle italic"
      className="leading-2 flex h-8 w-8 items-center justify-center rounded text-base shadow-sm outline-0 hover:bg-violet-200 focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[state=on]:bg-violet-300 dark:hover:bg-violet-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/10 dark:data-[state=on]:bg-violet-500"
      {...props}
    />
  )
}
