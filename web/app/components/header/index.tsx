'use client'

import Link from 'next/link'
import AccountDropdown from './account-dropdown'
import AppNav from './app-nav'
import DatasetNav from './dataset-nav'
import EnvNav from './env-nav'
// import ExploreNav from './explore-nav'
import HomeNav from './home-nav'
import AIChatNav from './chat-nav'
// import PluginNav from './plugin-nav'
import { WorkspaceProvider } from '@/context/workspace-context'
import { useAppContext } from '@/context/app-context'
import LogoSite from '@/app/components/base/logo/logo-site'

const navClassName = `
  flex items-center relative mr-3 px-3 h-8 rounded-xl
  font-medium text-sm
  cursor-pointer
`

const Header = () => {
  const { isCurrentWorkspaceManager } = useAppContext()
  return (
    <>
      <div className='flex items-center'>
        <Link href="/home" className='flex items-center mr-4'>
          <LogoSite />
        </Link>
      </div>
      <div className='flex items-center'>
        <HomeNav className={navClassName} />
        <AIChatNav className={navClassName} />
        {/* [Hekaiji 2023-10-16]: 屏蔽头部菜单的 "探索", 为 "构建应用" 增加权限控制(仅空间管理员可查看) */}
        {/* <ExploreNav className={navClassName} /> */}
        {isCurrentWorkspaceManager && <AppNav />}
        {/* [Hekaiji]{2023/09/28:屏蔽导航栏菜单中的 "插件<PluginNav />", 增加 "首页<HomeNav />"} */}
        {/* <PluginNav className={navClassName} /> */}
        {isCurrentWorkspaceManager && <DatasetNav />}
      </div>
      <div className='flex items-center flex-shrink-0'>
        <EnvNav />
        <WorkspaceProvider>
          <AccountDropdown />
        </WorkspaceProvider>
      </div>
    </>
  )
}
export default Header
