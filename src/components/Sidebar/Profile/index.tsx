'use client'
import Image from 'next/image'

import { LogIn, LogOut } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/HomeForm/Button'

export function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  function handleToggleSignInOut() {
    setIsLoggedIn((state) => !state)
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {isLoggedIn ? (
        <>
          <Image
            src="https://github.com/diaspd.png"
            alt=""
            width={300}
            height={300}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-1 flex-col truncate">
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              Pedro Dias
            </span>
            <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
              pdr050203@gmail.com
            </span>
          </div>

          <Button type="button" variant="ghost">
            <LogOut
              className="h-5 w-5 text-zinc-500 group-hover:text-red-500"
              onClick={handleToggleSignInOut}
            />
          </Button>
        </>
      ) : (
        <button
          type="button"
          onClick={handleToggleSignInOut}
          className="group flex w-full items-center justify-center gap-3 rounded-md p-2 font-medium hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          Sign In
          <LogIn className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
        </button>
      )}
    </div>
  )
}
