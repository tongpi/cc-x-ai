'use client'
import type { FC } from 'react'
import React from 'react'
import { useContext } from 'use-context-selector'
import s from './style.module.css'
import AIChatContext from '@/context/chat-context'
import ChatApp from '@/app/components/share/chat'
import TextGenerationApp from '@/app/components/share/text-generation'
import type { InstalledApp } from '@/models/explore'
import Loading from '@/app/components/base/loading'

export type IAIChatAppProps = {
  installedAppId?: string
  appId?: string
}

const AIChatApp: FC<IAIChatAppProps> = ({
  installedAppId,
  appId,
}) => {
  const { installedApps } = useContext(AIChatContext)
  const [installedApp, setInstalledApp] = React.useState<InstalledApp | undefined>(undefined)

  React.useEffect(() => {
    // installedAppId 有值取 installedAppId, 否则取 appId, 都没值取第一个
    if (installedAppId) {
      setInstalledApp(installedApps.find(item => item.id === installedAppId))
      return
    }

    if (appId) {
      setInstalledApp(installedApps.find(item => item.app.id === appId))
      return
    }

    setInstalledApp(installedApps[0])
  }, [installedAppId, appId, installedApps])

  if (!installedApp) {
    return (
      <div className='flex h-full items-center'>
        <Loading type='area' />
      </div>
    )
  }

  return (
    <div className={s.chat_content}>
      {installedApp?.app.mode === 'chat'
        ? (
          <ChatApp isInstalledApp installedAppInfo={installedApp} />
        )
        : (
          <TextGenerationApp isInstalledApp installedAppInfo={installedApp}/>
        )}
    </div>
  )
}
export default React.memo(AIChatApp)
