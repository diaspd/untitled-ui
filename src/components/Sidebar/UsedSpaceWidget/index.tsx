'use client'

import { Cog, LifeBuoy } from 'lucide-react'
import { NavItem } from '../MainNavigation/NavItem'
import { useState } from 'react'
export function UsedSpaceWidget() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(true)

  function handleDismiss() {
    setIsNotificationOpen(false)
  }

  return (
    <>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} isActive={false} />
          <NavItem title="Settings" icon={Cog} isActive />
        </nav>
      </div>

      {isNotificationOpen && (
        <>
          <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
            <div className="space-y-1">
              <span className="text-sm/5 font-medium text-violet-700 dark:text-violet-400">
                Used space
              </span>
              <p className="text-sm/5 text-violet-500 dark:text-violet-200">
                Your team has used 80% of your available space. Need more?{' '}
              </p>
            </div>
          </div>

          <div className="h-2 rounded-full bg-violet-100">
            <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-purple-500" />
          </div>

          <div className="space-x-3">
            <button
              type="button"
              className="text-sm font-medium text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
              onClick={handleDismiss}
            >
              Dismiss
            </button>
            <button
              type="button"
              className="text-sm font-medium text-violet-700 hover:text-violet-900 dark:text-violet-500 dark:hover:text-violet-400"
            >
              Ugrade plan
            </button>
          </div>
        </>
      )}
    </>
  )
}
