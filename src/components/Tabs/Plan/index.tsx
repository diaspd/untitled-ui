import { Check } from 'lucide-react'

export function PlanTab() {
  return (
    <div className="h-screen">
      <div className="mt-2 flex h-fit flex-col justify-center space-y-2 rounded-tr-xl border border-b-2 bg-violet-50 p-8 shadow-lg transition-all duration-300 hover:translate-y-5  hover:bg-violet-100 dark:border-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 lg:w-[448px]">
        <span className="flex w-full text-3xl font-semibold text-violet-500 dark:text-violet-400">
          Pro
          <span className="ml-auto">
            <Check className="h-7 w-7" />
          </span>
        </span>

        <div>
          <span className="text-4xl font-bold leading-relaxed text-zinc-800 dark:text-zinc-200">
            $20{' '}
          </span>{' '}
          <span className="text-xl font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200">
            per month
          </span>
        </div>

        <p className="text-md truncate leading-relaxed text-zinc-800 dark:text-zinc-300 lg:whitespace-normal">
          ◼ Subscribing to the Pro Plan gives you access to a range of advanced
          features <br></br> that go beyond what&apos;s available in the free
          version.
        </p>
        <p className="text-md truncate leading-relaxed text-zinc-700 dark:text-zinc-300 lg:whitespace-normal">
          ◼ With the Pro Plan, you&apos;ll receive priority customer support.
        </p>
        <p className="text-md truncate leading-relaxed text-zinc-700 dark:text-zinc-300 lg:whitespace-normal">
          ◼ Enjoy a seamless and distraction-free browsing experience with the
          Pro Plan.
        </p>

        <p className="text-md truncate leading-relaxed text-zinc-700 dark:text-zinc-300 lg:whitespace-normal">
          ◼ The Pro Plan often provides more in-depth analytics and insights
          into your <br></br> usage and interactions on the website.
        </p>
      </div>
    </div>
  )
}
