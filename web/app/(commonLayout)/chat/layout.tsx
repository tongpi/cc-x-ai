import type { FC } from 'react'
import React from 'react'
import AIChatClient from '@/app/components/chat'
export type IAppDetail = {
  children: React.ReactNode
}

const AIChatDetail: FC<IAppDetail> = ({ children }) => {
  return (
    <AIChatClient>
      {children}
    </AIChatClient>
  )
}

export default React.memo(AIChatDetail)
