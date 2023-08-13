import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from './Input'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="hidden flex-col gap-6 border-r border-zinc-200 px-5 py-8 dark:bg-zinc-900 lg:flex">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

      <Profile />
    </aside>
  )
}
