'use client'
import { LogIn, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

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
            <span className="text-sm font-semibold text-zinc-700">
              Pedro Dias
            </span>
            <span className="truncate text-sm text-zinc-500">
              pdr050203@gmail.com
            </span>
          </div>

          <button
            type="button"
            className="group ml-auto rounded-md p-2 hover:bg-zinc-50"
          >
            <LogOut
              className="h-5 w-5 text-zinc-500 group-hover:text-red-500"
              onClick={handleToggleSignInOut}
            />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={handleToggleSignInOut}
          className="group flex w-full items-center justify-center gap-2 rounded-md p-2 font-medium hover:bg-zinc-50"
        >
          Fazer Login
          <LogIn className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
        </button>
      )}
    </div>
  )
}
