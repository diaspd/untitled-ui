import { SettingsTabs } from '@/components/SettingsTabs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <>
      <div className="flex items-baseline">
        <h1 className="mt-5 text-3xl font-medium text-zinc-900 dark:text-zinc-200">
          Settings
        </h1>

        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>

      <div className="flex flex-col lg:mt-2">
        <SettingsTabs />
      </div>
    </>
  )
}
