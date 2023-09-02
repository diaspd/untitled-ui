import Image from 'next/image'

export function BillingTab() {
  return (
    <div className="h-screen">
      <div className="mt-2 flex h-fit w-full flex-col justify-center space-y-2 rounded-md rounded-tr-xl border border-b-2 bg-gradient-to-r from-violet-50 to-violet-200 p-6 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800 lg:p-10">
        <div className="flex w-full flex-col items-center text-xl font-medium text-zinc-800 dark:text-violet-100 lg:flex-row">
          <span className="w-full">Busines PRO + trial</span>
          <span className="mr-auto whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300 lg:ml-auto">
            21 days remaining
          </span>
        </div>

        <div className="flex flex-col items-start justify-start gap-4 rounded-lg bg-gradient-to-r from-violet-200 to-violet-300 p-6 dark:from-zinc-800 dark:to-zinc-900 lg:flex-row">
          <Image
            src="https://logowik.com/content/uploads/images/219_visa.jpg"
            className="h-12 w-24 rounded-lg border-2 border-zinc-800"
            alt=""
            width={500}
            height={300}
          />
          <div className="grid">
            <span className="text-md font-medium leading-relaxed text-zinc-700 dark:text-zinc-200">
              Visa ending in 1234
            </span>
            <span className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Expiry 06/2024
            </span>
          </div>

          <button
            className="font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-400 lg:-mt-4 lg:ml-auto"
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
