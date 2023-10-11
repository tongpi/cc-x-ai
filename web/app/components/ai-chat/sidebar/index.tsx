'use client'
import type { FC } from 'react'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useContext } from 'use-context-selector'
import cn from 'classnames'
import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'
// import { PlusIcon } from '@heroicons/react/20/solid'
// import Button from '../../base/button'
import Item from './category-nav-item'
import AppItem from './app-nav-item'
import { fetchAppList as doFetchAppList, fetchInstalledAppList as doFetchInstalledAppList } from '@/service/explore'
import { fetchAppList as doFetchMyAppList } from '@/service/apps'
import AIChatContext from '@/context/ai-chat-context'
import aiChatI18n from '@/i18n/lang/ai-chat.en'
import type { AppCategory, AppCategoryDetail } from '@/models/ai-chat'
// import NewAppDialog from '@/app/(commonLayout)/apps/NewAppDialog'

const SelectedChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 8.88571 1.50651 9.7325 1.8212 10.5074C1.84962 10.5773 1.86597 10.6178 1.87718 10.6476L1.88058 10.6568L1.88016 10.66C1.87683 10.6846 1.87131 10.7181 1.86064 10.7821L1.46212 13.1732C1.44424 13.2803 1.42423 13.4001 1.41638 13.5041C1.40782 13.6176 1.40484 13.7981 1.48665 13.9888C1.58779 14.2246 1.77569 14.4125 2.0115 14.5137C2.20224 14.5955 2.38274 14.5925 2.49619 14.5839C2.60025 14.5761 2.72006 14.5561 2.82715 14.5382L5.2182 14.1397C5.28222 14.129 5.31576 14.1235 5.34036 14.1202L5.34353 14.1197L5.35274 14.1231C5.38258 14.1344 5.42298 14.1507 5.49297 14.1791C6.26783 14.4938 7.11462 14.6668 8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335ZM4.00016 8.00016C4.00016 7.44788 4.44788 7.00016 5.00016 7.00016C5.55245 7.00016 6.00016 7.44788 6.00016 8.00016C6.00016 8.55245 5.55245 9.00016 5.00016 9.00016C4.44788 9.00016 4.00016 8.55245 4.00016 8.00016ZM7.00016 8.00016C7.00016 7.44788 7.44788 7.00016 8.00016 7.00016C8.55245 7.00016 9.00016 7.44788 9.00016 8.00016C9.00016 8.55245 8.55245 9.00016 8.00016 9.00016C7.44788 9.00016 7.00016 8.55245 7.00016 8.00016ZM11.0002 7.00016C10.4479 7.00016 10.0002 7.44788 10.0002 8.00016C10.0002 8.55245 10.4479 9.00016 11.0002 9.00016C11.5524 9.00016 12.0002 8.55245 12.0002 8.00016C12.0002 7.44788 11.5524 7.00016 11.0002 7.00016Z" fill="#155EEF" />
  </svg>
)

const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8H5.00667M8 8H8.00667M11 8H11.0067M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 8.7981 2.15582 9.5598 2.43871 10.2563C2.49285 10.3897 2.51992 10.4563 2.532 10.5102C2.54381 10.5629 2.54813 10.6019 2.54814 10.6559C2.54814 10.7111 2.53812 10.7713 2.51807 10.8916L2.12275 13.2635C2.08135 13.5119 2.06065 13.6361 2.09917 13.7259C2.13289 13.8045 2.19552 13.8671 2.27412 13.9008C2.36393 13.9393 2.48812 13.9186 2.73651 13.8772L5.10843 13.4819C5.22872 13.4619 5.28887 13.4519 5.34409 13.4519C5.3981 13.4519 5.43711 13.4562 5.48981 13.468C5.54369 13.4801 5.61035 13.5072 5.74366 13.5613C6.4402 13.8442 7.2019 14 8 14ZM5.33333 8C5.33333 8.1841 5.1841 8.33333 5 8.33333C4.81591 8.33333 4.66667 8.1841 4.66667 8C4.66667 7.81591 4.81591 7.66667 5 7.66667C5.1841 7.66667 5.33333 7.81591 5.33333 8ZM8.33333 8C8.33333 8.1841 8.1841 8.33333 8 8.33333C7.81591 8.33333 7.66667 8.1841 7.66667 8C7.66667 7.81591 7.81591 7.66667 8 7.66667C8.1841 7.66667 8.33333 7.81591 8.33333 8ZM11.3333 8C11.3333 8.1841 11.1841 8.33333 11 8.33333C10.8159 8.33333 10.6667 8.1841 10.6667 8C10.6667 7.81591 10.8159 7.66667 11 7.66667C11.1841 7.66667 11.3333 7.81591 11.3333 8Z" stroke="#344054" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)

const SideBar: FC<{
  controlUpdateInstalledApps: number
}> = ({
  controlUpdateInstalledApps,
}) => {
  const { t } = useTranslation()
  const segments = useSelectedLayoutSegments()
  const lastSegment = segments.slice(-1)[0]
  const isChatSelected = lastSegment === 'chat'
  const { setInstalledApps, categoryDetails, setCategoryDetails, setApps } = useContext(AIChatContext)
  const [myAppList, setMyAppList] = React.useState<any[]>([])
  const [showNewAppDialog, setShowNewAppDialog] = React.useState(false)

  const fetchInstalledAppList = async () => {
    const { installed_apps }: any = await doFetchInstalledAppList()
    setInstalledApps(installed_apps)
  }

  const allAppCategory: AppCategoryDetail = {
    key: 'All',
    name: t('aiChat.category.All') || '',
  }

  const categoryI18n = aiChatI18n.category
  const fetchAppList = async () => {
    const { categories, recommended_apps }: any = await doFetchAppList()
    const categoryDetails = categories.map((category: AppCategory) => {
      return {
        key: category,
        name: categoryI18n[category] ? t(`aiChat.category.${category}`) : category,
      }
    })
    setCategoryDetails(categoryDetails)
    setApps(recommended_apps)
  }
  const fetchMyAppList = async () => {
    const myApps: any = await doFetchMyAppList({ url: 'apps' })
    setMyAppList(myApps.data)
  }

  useEffect(() => {
    fetchInstalledAppList()
    fetchAppList()
    fetchMyAppList()
  }, [])

  useEffect(() => {
    fetchInstalledAppList()
    fetchAppList()
  }, [controlUpdateInstalledApps])

  return (
    <div className='w-[216px] shrink-0 pt-6 px-4 border-gray-200'>
      <div>
        <Link
          href='/ai-chat/chat'
          className={cn(isChatSelected ? 'text-primary-600 bg-white font-semibold' : 'text-gray-700 font-medium', 'flex items-center h-9 pl-3 space-x-2 rounded-lg')}
          style={isChatSelected ? { boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' } : {}}
        >
          {isChatSelected ? <SelectedChatIcon /> : <ChatIcon />}
          <div className='text-sm'>{t('aiChat.sidebar.chat')}</div>
        </Link>
      </div>
      {categoryDetails.length > 0 && (
        <div className='mt-10'>
          <div className='pl-2 text-xs text-gray-500 font-medium uppercase'>{t('aiChat.sidebar.category')}</div>
          <div className='mt-3 space-y-1 overflow-y-auto overflow-x-hidden'>
            <Item
              categoryDetail={allAppCategory}
              isSelected = {lastSegment === allAppCategory.key}
            />
            {categoryDetails.map((categoryDetail, index) => {
              return (
                <Item
                  key={index}
                  categoryDetail={categoryDetail}
                  isSelected = {lastSegment === categoryDetail.key}
                />
              )
            })}
          </div>
        </div>
      )}
      <div className='mt-10'>
        <div className='pl-2 text-xs text-gray-500 font-medium uppercase'>{t('aiChat.sidebar.myApp')}</div>
        <div className='mt-3 space-y-1 overflow-y-auto overflow-x-hidden'>
          {myAppList.map((app, index) => {
            return (
              <AppItem
                key= {index}
                app= {app}
                isSelected = {lastSegment === app.id}
              />
            )
          })}
          {/* TODO: 创建应用按钮 */}
          {/* <div className='flex items-center justify-between px-2 rounded-lg '>
            <Button type='primary' className='grow flex items-center !h-7' onClick={() => setShowNewAppDialog(true)}>
              <PlusIcon className='w-4 h-4 mr-1' />
              <span className='text-xs'>{t('aiChat.sidebar.createApp')}</span>
            </Button>
          </div>
          <NewAppDialog show={showNewAppDialog} onClose={() => setShowNewAppDialog(false)}/> */}
        </div>
      </div>
    </div>
  )
}

export default React.memo(SideBar)
