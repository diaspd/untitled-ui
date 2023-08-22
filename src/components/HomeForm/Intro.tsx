import { Button } from './Button'

export function Intro() {
  return (
    <div className="mt-6 grid items-center justify-between gap-2 border-b border-zinc-200 pb-5 dark:border-zinc-500 lg:flex">
      <div className="space-y-2">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Personal info
        </h2>

        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          Update your photo and personal details here.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" form="settings">
          Save
        </Button>
      </div>
    </div>
  )
}
