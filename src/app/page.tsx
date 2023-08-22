import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="mt-5 text-3xl font-medium text-zinc-900 dark:text-zinc-200">
        Settings
      </h1>

      <div className="flex flex-col lg:mt-2">
        <SettingsTabs />
      </div>
    </>
  )
}
