import { Mail } from 'lucide-react'

import * as Input from '@/components/Sidebar/Input'
import * as FileInput from '@/components/HomeForm/FileInput'

export function HomeForm() {
  return (
    <form
      id="settings"
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
    >
      <div className="grid grid-cols-form gap-3">
        <label
          htmlFor="firstName"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Name
        </label>
        <div className="grid grid-cols-2 gap-6">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="Pedro" />
          </Input.Root>

          <Input.Root>
            <Input.Control defaultValue="Dias" />
          </Input.Root>
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="email"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Email address
        </label>
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="email"
            type="email"
            defaultValue="pdr050203@gmail.com"
          />
        </Input.Root>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="photo"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Your photo
          <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
            This will be displayed on your profile.
          </span>
        </label>

        <FileInput.Root className="flex items-start gap-5">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="role"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Role
        </label>
        <Input.Root>
          <Input.Control id="role" defaultValue="CEO" />
        </Input.Root>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="country"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Country
        </label>
        <div></div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="timezone"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Timezone
        </label>
        <div></div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="bio"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Bio
          <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
            write a short introduction.
          </span>
        </label>
        <div></div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <label
          htmlFor="projects"
          className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
        >
          Portfolio projects
          <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
            Share a few snippets of your work.
          </span>
        </label>
        <FileInput.Root>
          <FileInput.Trigger />
          <FileInput.FileList />
          <FileInput.Control multiple />
        </FileInput.Root>
      </div>

      <div className="flex items-center justify-end gap-2 pt-5">
        <button
          type="button"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
        >
          Save
        </button>
      </div>
    </form>
  )
}
