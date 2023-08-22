'use client'

import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { TabItem } from './TabItem'
import { HomeForm } from '../HomeForm'
import { ProfileTab } from '../Tabs/Profile'
import { PasswordTab } from '../Tabs/Password'
import { TeamTab } from '../Tabs/Team'
import { PlanTab } from '../Tabs/Plan'
import { APITab } from '../Tabs/API'
import { IntegrationTab } from '../Tabs/Integrations'
import { NotificationsTab } from '../Tabs/Notifications'
import { EmailTab } from '../Tabs/Email'
import { BillingTab } from '../Tabs/Billing'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-600">
            <TabItem
              value="tab1"
              title="My details"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currentTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currentTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currentTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currentTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={currentTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={currentTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="API"
              isSelected={currentTab === 'tab10'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <Tabs.Content value="tab1" className="outline-none">
        <HomeForm />
      </Tabs.Content>

      <Tabs.Content value="tab2" className="divide-y divide-zinc-200">
        <h2 className="pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Make changes to your account!
        </h2>
        <ProfileTab />
      </Tabs.Content>

      <Tabs.Content value="tab3" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Make changes to your password!
        </h2>
        <PasswordTab />
      </Tabs.Content>

      <Tabs.Content value="tab4" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your team
        </h2>
        <TeamTab />
      </Tabs.Content>

      <Tabs.Content value="tab5" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your plan
        </h2>
        <PlanTab />
      </Tabs.Content>

      <Tabs.Content value="tab6" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your plan
        </h2>
        <BillingTab />
      </Tabs.Content>

      <Tabs.Content value="tab7" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          Change your email
        </h2>
        <EmailTab />
      </Tabs.Content>

      <Tabs.Content value="tab8" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your Notifications
        </h2>
        <NotificationsTab />
      </Tabs.Content>

      <Tabs.Content value="tab9" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your Integrations
        </h2>
        <IntegrationTab />
      </Tabs.Content>

      <Tabs.Content value="tab10" className="divide-y divide-zinc-200">
        <h2 className="pb-2 pt-4 text-lg font-medium text-zinc-900 dark:text-zinc-200">
          This is your API Code
        </h2>
        <APITab />
      </Tabs.Content>
    </Tabs.Root>
  )
}
