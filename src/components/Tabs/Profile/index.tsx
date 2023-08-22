import Image from 'next/image'

export function ProfileTab() {
  return (
    <div className="mt-2 flex h-screen gap-4 pt-4">
      <Image
        src="https://github.com/diaspd.png"
        alt=""
        width={300}
        height={300}
        className="h-20 w-20 rounded-full border-4 border-b-violet-600 border-l-violet-400 border-r-violet-600 border-t-violet-500"
      />
      <div className="mt-4 flex flex-1 flex-col truncate">
        <span className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
          Pedro Dias
        </span>
        <span className="text-md truncate text-zinc-500 dark:text-zinc-400">
          pdr050203@gmail.com
        </span>
      </div>
    </div>
  )
}
