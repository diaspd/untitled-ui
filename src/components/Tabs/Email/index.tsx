import * as Input from '@/components/Sidebar/Input'

export function EmailTab() {
  return (
    <div className="h-screen pt-5">
      <Input.Root>
        <Input.Control type="email" placeholder="johndoe@example.com" />
      </Input.Root>
    </div>
  )
}
