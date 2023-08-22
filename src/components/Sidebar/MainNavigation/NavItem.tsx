import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  isActive: boolean
}

export function NavItem({ title, icon: Icon, isActive = false }: NavItemProps) {
  return (
    <>
      {!isActive ? (
        <a
          href="/"
          className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 data-[state=active]:text-violet-700 dark:hover:bg-zinc-700"
        >
          <Icon className="h-5 w-5 text-zinc-500 dark:text-zinc-300" />
          <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-200 dark:group-hover:text-violet-300">
            {title}
          </span>
          <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:group-hover:text-violet-400" />
        </a>
      ) : (
        <a
          href="/"
          className="group flex items-center gap-3 rounded bg-violet-50 px-3 py-2 data-[state=active]:text-violet-700 dark:bg-zinc-800"
        >
          <Icon className="h-5 w-5 text-violet-500 dark:text-violet-400" />
          <span className="font-medium text-violet-700 dark:text-violet-400">
            {title}
          </span>
          <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:group-hover:text-violet-400" />
        </a>
      )}
    </>
  )
}
