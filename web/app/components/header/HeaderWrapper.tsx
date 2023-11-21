'use client'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import s from './index.module.css'
import { useAppContext } from '@/context/app-context'

type HeaderWrapperProps = {
  children: React.ReactNode
}

const HeaderWrapper = ({
  children,
}: HeaderWrapperProps) => {
  const pathname = usePathname()
  const { langeniusVersionInfo } = useAppContext()
  const isBordered = ['/apps', '/datasets'].includes(pathname)
  const isHome = pathname === '/home'

  return (
    // [Hekaiji 2023-10-23]: 调整导航栏选中的样式
    <div className={classNames(
      'sticky top-0 left-0 right-0 z-20 flex grow-0 shrink-0 basis-auto h-14',
      s.header,
      isBordered ? 'border-b border-gray-200' : '',
      isHome ? '' : 'bg-white',
    )}
    >
      <div className={classNames(
        s[`header-${langeniusVersionInfo.current_env}`],
        'flex flex-1 items-center justify-between px-4',
      )}>
        {children}
      </div>
    </div>
  )
}
export default HeaderWrapper
