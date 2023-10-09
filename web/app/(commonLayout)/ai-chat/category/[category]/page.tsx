import type { FC } from 'react'
import React from 'react'
import CategoryApps from '@/app/components/ai-chat/app-list'
import type { AppCategory } from '@/models/ai-chat'

export type IInstalledAppProps = {
  params: {
    category: AppCategory
  }
}

const InstalledApp: FC<IInstalledAppProps> = ({ params: { category } }) => {
  return (
    <CategoryApps isAllCategory={category === 'All'} category={category}/>
  )
}
export default React.memo(InstalledApp)
