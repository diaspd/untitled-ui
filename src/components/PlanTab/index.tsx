export function PlanTab() {
  return (
    <div className="h-screen">
      <div className="mt-2 flex h-fit w-fit flex-col justify-center space-y-2 rounded-md border border-b-2 bg-violet-50 p-10 hover:bg-violet-100 dark:border-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800">
        <span className="w-full border-b-2 border-b-violet-500 text-2xl font-medium text-violet-500 dark:text-violet-400">
          Purchased !!
        </span>

        <span className="text-xl leading-relaxed text-zinc-800 dark:text-zinc-200">
          Now you have the Pro plan
        </span>

        <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-300">
          ◼ Subscribing to the Pro Plan gives you access to a range of advanced
          features <br></br> that go beyond what&apos;s available in the free
          version.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          ◼ With the Pro Plan, you&apos;ll receive priority customer support.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          ◼ Enjoy a seamless and distraction-free browsing experience with the
          Pro Plan.
        </p>

        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          ◼ The Pro Plan often provides more in-depth analytics and insights
          into your <br></br> usage and interactions on the website.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          ◼ The Pro Plan is often designed to cater to the needs of
          professionals, <br></br>entrepreneurs, and small businesses that are
          experiencing growth.
        </p>
      </div>
    </div>
  )
}
