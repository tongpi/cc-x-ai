'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AIChatContext from '@/context/ai-chat-context'
import Sidebar from '@/app/components/ai-chat/sidebar'
import type { App, AppCategoryDetail, InstalledApp } from '@/models/ai-chat'

export type IAIChatProps = {
  children: React.ReactNode
}

const AIChat: FC<IAIChatProps> = ({
  children,
}) => {
  const { t } = useTranslation()
  const [controlUpdateInstalledApps, setControlUpdateInstalledApps] = useState(0)
  const [installedApps, setInstalledApps] = useState<InstalledApp[]>([])
  const [categoryDetails, setCategoryDetails] = useState<AppCategoryDetail[]>([])
  const [apps, setApps] = useState<App[]>([])

  useEffect(() => {
    document.title = `${t('aiChat.title')} -  Dify`
  }, [])

  return (
    <div className='flex flex-1 bg-gray-100 border-t border-gray-200'>
      <AIChatContext.Provider
        value={
          {
            controlUpdateInstalledApps,
            setControlUpdateInstalledApps,
            installedApps,
            setInstalledApps,
            categoryDetails,
            setCategoryDetails,
            apps,
            setApps,
          }
        }
      >
        <Sidebar controlUpdateInstalledApps={controlUpdateInstalledApps} />
        <div className='grow'>
          {children}
        </div>
      </AIChatContext.Provider>
    </div>
  )
}
export default React.memo(AIChat)
