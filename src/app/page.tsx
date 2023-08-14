import { SettingsTabs } from '@/components/SettingsTabs'
import Logo from '../../public/Logomark.svg'
import { Menu } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="-ml-1.5 flex border-b border-b-zinc-200 pb-2 lg:hidden">
        <Image src={Logo} width={30} height={30} alt="" />
        <span className="ml-auto">
          <Menu className="h-5 w-5 dark:text-zinc-300" />
        </span>
      </header>
      <h1 className="mt-5 text-3xl font-medium text-zinc-900 dark:text-zinc-200">
        Settings
      </h1>

      <div className="flex flex-col lg:mt-2">
        <SettingsTabs />
      </div>
    </>
  )
}
