import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-200">
        Settings
      </h1>

      <div className="mt-2 flex flex-col">
        <SettingsTabs />
      </div>
    </>
  )
}
