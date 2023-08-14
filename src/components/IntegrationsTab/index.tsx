import { Check, Facebook, Github } from 'lucide-react'

export function IntegrationTab() {
  return (
    <div className="h-screen">
      <button
        type="button"
        disabled
        className="mt-2 flex w-full items-center gap-2 rounded-md bg-violet-200 p-5 dark:border dark:border-zinc-300 dark:bg-zinc-900"
      >
        <Facebook className="text-lg font-medium text-violet-500" />
        <span className="text-lg font-medium dark:text-zinc-200">
          You are conected
        </span>

        <span className="ml-auto text-violet-400">
          <Check />
        </span>
      </button>

      <button
        type="button"
        className="mt-2 flex w-full items-center gap-2 rounded-md bg-violet-50 p-5 hover:bg-violet-100 dark:border dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-950"
      >
        <Github className="text-lg font-medium text-zinc-400" />
        <span className="text-lg font-normal dark:text-zinc-300">
          You are not conected
        </span>
      </button>
    </div>
  )
}
