'use client'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { GoldCoin } from '../../base/icons/src/vender/solid/FinanceAndECommerce'
import { GoldCoin as GoldCoinOutLine } from '../../base/icons/src/vender/line/financeAndECommerce'
import AccountPage from './account-page'
import MembersPage from './members-page'
// import IntegrationsPage from './Integrations-page'
import LanguagePage from './language-page'
// import PluginPage from './plugin-page'
import ApiBasedExtensionPage from './api-based-extension-page'
import DataSourcePage from './data-source-page'
import ModelPage from './model-page'
import s from './index.module.css'
import BillingPage from '@/app/components/billing/billing-page'
import Modal from '@/app/components/base/modal'
import {
  Database03,
  /* PuzzlePiece01, */
  Webhooks,
} from '@/app/components/base/icons/src/vender/line/development'
import { Database03 as Database03Solid /* , PuzzlePiece01 as PuzzlePiece01Solid */ } from '@/app/components/base/icons/src/vender/solid/development'
import { User01, Users01 } from '@/app/components/base/icons/src/vender/line/users'
import { User01 as User01Solid, Users01 as Users01Solid } from '@/app/components/base/icons/src/vender/solid/users'
import { Globe01 } from '@/app/components/base/icons/src/vender/line/mapsAndTravel'
import { /* AtSign, */ XClose } from '@/app/components/base/icons/src/vender/line/general'
import { CubeOutline } from '@/app/components/base/icons/src/vender/line/shapes'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'
import { useAppContext } from '@/context/app-context'

const iconClassName = `
  w-4 h-4 ml-3 mr-2
`

const scrolledClassName = `
  border-b shadow-xs bg-white/[.98]
`

type IAccountSettingProps = {
  onCancel: () => void
  activeTab?: string
}

type GroupItem = {
  key: string
  name: string
  icon: JSX.Element
  activeIcon: JSX.Element
}

export default function AccountSetting({
  onCancel,
  activeTab = 'account',
}: IAccountSettingProps) {
  const [activeMenu, setActiveMenu] = useState(activeTab)
  const { isCurrentWorkspaceManager } = useAppContext()
  const { t } = useTranslation()
  const { enableBilling } = useProviderContext()

  const workplaceGroupItems = (() => {
    return [
      {
        key: 'provider',
        name: t('common.settings.provider'),
        icon: <CubeOutline className={iconClassName} />,
        activeIcon: <CubeOutline className={iconClassName} />,
      },
      {
        key: 'members',
        name: t('common.settings.members'),
        icon: <Users01 className={iconClassName} />,
        activeIcon: <Users01Solid className={iconClassName} />,
      },
      {
        // Use key false to hide this item
        key: enableBilling ? 'billing' : false,
        name: t('common.settings.billing'),
        icon: <GoldCoinOutLine className={iconClassName} />,
        activeIcon: <GoldCoin className={iconClassName} />,
      },
      {
        key: 'data-source',
        name: t('common.settings.dataSource'),
        icon: <Database03 className={iconClassName} />,
        activeIcon: <Database03Solid className={iconClassName} />,
      },
      // {
      //   key: 'plugin',
      //   name: t('common.settings.plugin'),
      //   icon: <PuzzlePiece01 className={iconClassName} />,
      //   activeIcon: <PuzzlePiece01Solid className={iconClassName} />,
      // },
      {
        key: 'api-based-extension',
        name: t('common.settings.apiBasedExtension'),
        icon: <Webhooks className={iconClassName} />,
        activeIcon: <Webhooks className={iconClassName} />,
      },
    ].filter(item => !!item.key) as GroupItem[]
  })()

  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile

  const menuItems = [
    {
      key: 'workspace-group',
      name: t('common.settings.workplaceGroup'),
      items: workplaceGroupItems,
    },
    {
      key: 'account-group',
      name: t('common.settings.accountGroup'),
      items: [
        {
          key: 'account',
          name: t('common.settings.account'),
          icon: <User01 className={iconClassName} />,
          activeIcon: <User01Solid className={iconClassName} />,
        },
        // [Hekaiji]{2023/10/09: 屏蔽 "设置>集成" 功能}
        // {
        //   key: 'integrations',
        //   name: t('common.settings.integrations'),
        //   icon: <AtSign className={iconClassName} />,
        //   activeIcon: <AtSign className={iconClassName} />,
        // },
        {
          key: 'language',
          name: t('common.settings.language'),
          icon: <Globe01 className={iconClassName} />,
          activeIcon: <Globe01 className={iconClassName} />,
        },
      ],
    },
    // [Hekaiji 2023-10-16]: 为 "设置>工作空间" 分组增加权限控制(仅空间管理员可查看) | 屏蔽 "工作空间" 项中的 "插件" 设置项
  ].filter(menuItem => (menuItem.key === 'workspace-group' ? isCurrentWorkspaceManager : true))
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const scrollHandle = (e: Event) => {
    if ((e.target as HTMLDivElement).scrollTop > 0)
      setScrolled(true)

    else
      setScrolled(false)
  }
  useEffect(() => {
    const targetElement = scrollRef.current

    targetElement?.addEventListener('scroll', scrollHandle)
    return () => {
      targetElement?.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  return (
    <Modal
      isShow
      onClose={() => { }}
      className={s.modal}
      wrapperClassName='!z-20 pt-[60px]'
    >
      <div className='flex'>
        <div className='w-[44px] sm:w-[200px] px-[1px] py-4 sm:p-4 border border-gray-100 shrink-0 sm:shrink-1 flex flex-col items-center sm:items-start'>
          <div className='mb-8 ml-0 sm:ml-2 text-sm sm:text-base font-medium leading-6 text-gray-900'>{t('common.userProfile.settings')}</div>
          <div className='w-full'>
            {
              menuItems.map(menuItem => (
                <div key={menuItem.key} className='mb-4'>
                  <div className='px-2 mb-[6px] text-[10px] sm:text-xs font-medium text-gray-500'>{menuItem.name}</div>
                  <div>
                    {
                      menuItem.items.map(item => (
                        <div
                          key={item.key}
                          className={`
                            flex items-center h-[37px] mb-[2px] text-sm cursor-pointer rounded-lg
                            ${activeMenu === item.key ? 'font-semibold text-primary-600 bg-primary-50' : 'font-light text-gray-700'}
                          `}
                          title={item.name}
                          onClick={() => setActiveMenu(item.key)}
                        >
                          {activeMenu === item.key ? item.activeIcon : item.icon}
                          {!isMobile && <div className='truncate'>{item.name}</div>}
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div ref={scrollRef} className='relative w-[824px] h-[720px] pb-4 overflow-y-auto'>
          <div className={cn('sticky top-0 px-6 py-4 flex items-center justify-between h-14 mb-4 bg-white text-base font-medium text-gray-900 z-20', scrolled && scrolledClassName)}>
            {/* [Hekaiji 2023-10-16]: 优化此处代码, 防止 "menuItems" 长度改变后直接访问下标导致数组越界 */}
            {menuItems.reduce((pre: any, cur) => cur.items.concat(pre), []).find((item: { key: string }) => item.key === activeMenu)?.name}
            <div className='flex items-center justify-center -mr-4 w-6 h-6 cursor-pointer' onClick={onCancel}>
              <XClose className='w-4 h-4 text-gray-500' />
            </div>
          </div>
          <div className='px-4 sm:px-8 pt-2'>
            {activeMenu === 'account' && <AccountPage />}
            {activeMenu === 'members' && <MembersPage />}
            {activeMenu === 'billing' && <BillingPage />}
            {/* {activeMenu === 'integrations' && <IntegrationsPage />} */}
            {activeMenu === 'language' && <LanguagePage />}
            {activeMenu === 'provider' && <ModelPage />}
            {activeMenu === 'data-source' && <DataSourcePage />}
            {/* {activeMenu === 'plugin' && <PluginPage />} */}
            {activeMenu === 'api-based-extension' && <ApiBasedExtensionPage /> }
          </div>
        </div>
      </div>
    </Modal>
  )
}
