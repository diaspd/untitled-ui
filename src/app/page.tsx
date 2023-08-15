import { SettingsTabs } from '@/components/SettingsTabs'
import Logo from '../../public/Logomark.svg'
import Image from 'next/image'
import { Dropdown } from '@/components/Dropdown'

export default function Home() {
  return (
    <>
      <header className="-ml-1.5 flex border-b border-b-zinc-200 pb-2 lg:hidden">
        <Image src={Logo} width={40} height={40} alt="" />
        <span className="ml-auto">
          <Dropdown />
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
