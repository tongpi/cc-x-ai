import type { FC } from 'react'
import React from 'react'
import AIChatApp from '@/app/components/ai-chat/chat'

export type IAppChatProps = {
  params: { appId: string }
}

const InstalledApp: FC<IAppChatProps> = ({
  params: { appId },
}) => {
  return (
    <AIChatApp appId={appId} />
  )
}

export default InstalledApp
