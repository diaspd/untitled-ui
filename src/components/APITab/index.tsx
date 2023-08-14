import * as Input from '@/components/Sidebar/Input'
import { v4 as uuidv4 } from 'uuid'
import { FileBarChart } from 'lucide-react'

export function APITab() {
  const uniqueId = uuidv4()

  return (
    <div className="h-screen">
      <Input.Root>
        <Input.Prefix className="dark:text-zinc-200">
          <FileBarChart />
        </Input.Prefix>
        <Input.Control disabled placeholder={uniqueId} />
      </Input.Root>
    </div>
  )
}
