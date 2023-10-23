'use client'
import React from 'react'
import { useContext } from 'use-context-selector'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import s from './style.module.css'
import type { App, AppCategory } from '@/models/ai-chat'
import AppCard from '@/app/components/ai-chat/category-app-card'
import { installApp } from '@/service/explore'
import AIChatContext from '@/context/ai-chat-context'
import AIChat from '@/app/components/ai-chat/chat'

type ICategoryAppsProps = {
  // 是否 "所有" 分类
  isAllCategory?: boolean
  category?: AppCategory
}

const ExitChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round"
      strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
)

const CategoryApps = ({
  isAllCategory = false,
  category,
}: ICategoryAppsProps) => {
  const { t } = useTranslation()
  const [currAppList, setCurrAppList] = React.useState<App[]>([])
  const [currApp, setCurrApp] = React.useState<App | undefined>(undefined)
  const { apps, categoryDetails, installedApps, setControlUpdateInstalledApps } = useContext(AIChatContext)

  const currCategoryDetail = (() => {
    if (isAllCategory)
      return { key: 'All', name: t('aiChat.category.All') }

    return categoryDetails.find(item => item.key === category)
  })()

  React.useEffect(() => {
    const categoryAppList = isAllCategory ? apps : apps.filter(item => item.category === category)
    setCurrAppList(categoryAppList)
  }, [apps, category, isAllCategory])

  const handleAddToWorkspace = async (appId: string) => {
    // 如果还没安装，则安装
    if (!installedApps.find(item => item.app.id === appId)) {
      await installApp(appId)
      setControlUpdateInstalledApps(Date.now())
    }
  }

  const onStartChat = async (app: App) => {
    await handleAddToWorkspace(app.app_id)
    setCurrApp(app)
  }

  const onExitChat = () => {
    setCurrApp(undefined)
  }

  return (
    <div className='h-full flex flex-col border-l border-gray-200'>
      {currApp && (<>
        <div className={cn('flex', 'cursor-pointer', 'px-2 pt-2', s.exit_chat_btn)} onClick={onExitChat}>
          <ExitChatIcon />
          <span className='pl-1'>{currCategoryDetail?.name}</span>
        </div>
        <div className='flex-1'>
          <AIChat appId={currApp.app_id} />
        </div>
      </>
      )}
      {!currApp && (<>
        <div className='shrink-0 pt-6 px-12'>
          <div className={`mb-1 ${s.textGradient} text-xl font-semibold`}>{currCategoryDetail?.name}</div>
        </div>
        <div
          className='flex mt-6 pb-6 flex-col overflow-auto bg-gray-100 shrink-0 grow'
          style={{
            maxHeight: 'calc(100vh - 171px)',
          }}
        >
          <nav
            className={`${s.appList} grid content-start gap-4 px-12 shrink-0`}>
            {currAppList.map(app => (
              <AppCard
                key={app.app_id}
                app={app}
                onStartChat={onStartChat}
              />
            ))}
          </nav>
        </div>
      </>
      )}
    </div>
  )
}

export default React.memo(CategoryApps)
