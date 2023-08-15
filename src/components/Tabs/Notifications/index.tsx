import { Check, Rocket, Users, X } from 'lucide-react'

export function NotificationsTab() {
  return (
    <div className="h-screen divide-y-2 divide-zinc-200 dark:divide-zinc-200">
      <div className="flex items-start gap-6 p-4">
        <Rocket className="mt-3 h-6 w-6 text-violet-500" />

        <div className="flex flex-1 flex-col gap-2">
          <p className="text-md leading-relaxed text-zinc-900 dark:text-zinc-200">
            Lorem ipsum dolor sit amet consectetur adipis.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-300">
            <span>invitation</span>
            <span>8 minutes ago</span>
          </div>
        </div>

        <div className="flex gap-2 self-center">
          <button className="flex h-8 w-8 items-center justify-center rounded bg-zinc-500 hover:bg-zinc-600">
            <X className="w-5 font-semibold text-zinc-200" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-violet-500 hover:bg-violet-600">
            <Check className="w-5 font-semibold text-zinc-200" />
          </button>
        </div>
      </div>

      <div className="flex items-start gap-6 p-4">
        <Users className="mt-3 h-6 w-6 text-violet-500" />

        <div className="flex flex-1 flex-col gap-2">
          <p className="text-md leading-relaxed text-zinc-900 dark:text-zinc-200">
            Lorem ipsum dolor sit amet consectetur adipis.
          </p>

          <div className="flex items-center gap-2 text-sm text-zinc-800 dark:text-zinc-300">
            <span>Friend request</span>
            <span>10 hours ago</span>
          </div>
        </div>
        <div className="flex gap-2 self-center">
          <button className="flex h-8 w-8 items-center justify-center rounded bg-zinc-500 hover:bg-zinc-600">
            <X className="w-5 font-semibold text-zinc-200" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded bg-violet-500 hover:bg-violet-400">
            <Check className="w-5 font-semibold text-zinc-200" />
          </button>
        </div>
      </div>
    </div>
  )
}
