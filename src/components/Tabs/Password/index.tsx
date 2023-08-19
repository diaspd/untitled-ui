import * as Input from '@/components/HomeForm/Input'

export function PasswordTab() {
  return (
    <div className="h-screen pt-5">
      <Input.Root>
        <Input.Control type="password" placeholder="********" />
      </Input.Root>
    </div>
  )
}
