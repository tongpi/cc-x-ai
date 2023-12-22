'use client'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import s from './index.module.css'

type HeaderWrapperProps = {
  children: React.ReactNode
}

const HeaderWrapper = ({
  children,
}: HeaderWrapperProps) => {
  const pathname = usePathname()
  const isBordered = ['/apps', '/datasets'].includes(pathname)
  const isHome = pathname === '/home'

  return (
    // [Hekaiji 2023-10-23]: 调整导航栏选中的样式
    <div className={classNames(
      'sticky top-0 left-0 right-0 z-20 flex flex-col grow-0 shrink-0 basis-auto min-h-[56px]',
      s.header,
      isBordered ? 'border-b border-gray-200' : '',
      isHome ? '' : 'bg-white',
    )}
    >
      {children}
    </div>
  )
}
export default HeaderWrapper
