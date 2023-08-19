import * as Select from '@/components/HomeForm/Select'
import { Button } from './Button'

export function Intro() {
  return (
    <div className="mt-6 grid items-center justify-between gap-2 border-b border-zinc-200 pb-5 lg:flex">
      <div className="space-y-2">
        <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Personal info
        </h2>

        <div className="flex pb-4 lg:hidden">
          <Select.Root name="details">
            <Select.Trigger>
              <Select.Value placeholder="My details" />
            </Select.Trigger>

            <Select.Content>
              <Select.Item value="details">
                <Select.ItemText>My details</Select.ItemText>
              </Select.Item>
              <Select.Item value="profile">
                <Select.ItemText>Profile</Select.ItemText>
              </Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
        <span className="text-sm text-zinc-500 dark:text-zinc-200">
          Update your photo and personal details here.
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" form="settings">
          Save
        </Button>
      </div>
    </div>
  )
}
