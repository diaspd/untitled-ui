import * as Input from '@/components/Sidebar/Input'

export function PasswordTab() {
  return (
    <div className="pt-5">
      <Input.Root>
        <Input.Control type="password" placeholder="********" />
      </Input.Root>
    </div>
  )
}
