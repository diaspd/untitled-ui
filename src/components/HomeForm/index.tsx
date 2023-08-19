import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'

import * as Input from '@/components/HomeForm/Input'
import * as FileInput from '@/components/HomeForm/FileInput'

import { Button } from './Button'
import { CountrySelect } from '@/components/HomeForm/Select/ContrySelect'
import * as Select from '@/components/HomeForm/Select'
import { Textarea } from './Textarea'
import { ToggleButton } from './ToggleButton'
import { Intro } from './Intro'

export function HomeForm() {
  return (
    <>
      <Intro />
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 outline-none"
      >
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
          >
            Name
          </label>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Pedro" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Dias" />
            </Input.Root>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="photo"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
          >
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
              This will be displayed on your profile.
            </span>
          </label>

          <FileInput.Root className="flex flex-col items-start gap-5 lg:flex-row">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-200"
          >
            Country
          </label>

          <CountrySelect />
          <div></div>
        </div>

        <label className="grid gap-3 pt-5 lg:grid-cols-form">
          <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
            Timezone
          </span>
          <Select.Root name="timezone">
            <Select.Trigger>
              <Select.Value placeholder="Select your timezone..." />
            </Select.Trigger>

            <Select.Content>
              <Select.Item value="utc-3">
                <Select.ItemText>
                  Pacific Standard Time (PST)
                  <span className="text-sm text-zinc-500">UTC 08:00</span>
                </Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </label>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label
            htmlFor="bio"
            className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
          >
            Bio
            <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
              Write a short introduction.
            </span>
          </label>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3 lg:grid-cols-2">
              <Select.Root defaultValue="normal">
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>

                <Select.Content>
                  <Select.Item value="normal">
                    <Select.ItemText>Normal text</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="md">
                    <Select.ItemText>Markdown</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select.Root>
              <div className="flex items-center gap-1">
                <ToggleButton>
                  <Bold
                    className="h-4 w-4 text-zinc-500 dark:text-zinc-200"
                    strokeWidth={3}
                  />
                </ToggleButton>

                <ToggleButton>
                  <Italic
                    className="h-4 w-4 text-zinc-500 dark:text-zinc-200"
                    strokeWidth={3}
                  />
                </ToggleButton>

                <ToggleButton>
                  <Link
                    className="h-4 w-4 text-zinc-500 dark:text-zinc-200"
                    strokeWidth={3}
                  />
                </ToggleButton>

                <Button variant="ghost" type="button">
                  <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                </Button>
                <Button variant="ghost" type="button">
                  <ListOrdered
                    className="h-4 w-4 text-zinc-400"
                    strokeWidth={3}
                  />
                </Button>
              </div>
            </div>
            <Textarea
              name="bio"
              id="bio"
              defaultValue="I'm a Product Designer based in London, UK. I specialise in UX/UI design, brand strategy, and Webflow development."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
    </>
  )
}
