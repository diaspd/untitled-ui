import Image from 'next/image'

export function BillingTab() {
  return (
    <div className="h-screen">
      <div className="mt-2 flex h-fit w-full flex-col justify-center space-y-2 rounded-md rounded-tr-xl border border-b-2 bg-gradient-to-r from-violet-50 to-violet-200 p-10 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-800">
        <span className="flex w-full text-xl font-medium text-zinc-800 dark:text-violet-100">
          Busines PRO + trial
          <span className="ml-auto text-sm text-zinc-600 dark:text-zinc-300">
            21 days remaining
          </span>
        </span>

        <div className="flex justify-start gap-4 rounded-lg bg-gradient-to-r from-violet-200 to-violet-300 p-6 dark:from-zinc-800 dark:to-zinc-900">
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
            className="-mt-5 ml-auto font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-400"
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
