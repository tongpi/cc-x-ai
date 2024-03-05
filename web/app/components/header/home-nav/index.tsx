'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import classNames from 'classnames'
import { Home, HomeActive } from '../../base/icons/src/public/header-nav/home'
type HomeNavProps = {
  className?: string
}

const HomeNav = ({
  className,
}: HomeNavProps) => {
  const { t } = useTranslation()
  const selectedSegment = useSelectedLayoutSegment()
  const actived = selectedSegment === 'home'

  return (
    <Link href="/home" className={classNames(
      className, 'group',
      actived && 'bg-white shadow-md',
      actived ? 'text-primary-600' : 'text-gray-500 hover:bg-gray-200',
    )}>
      {
        actived
          ? <HomeActive className='mr-2 w-4 h-4' />
          : <Home className='mr-2 w-4 h-4' />
      }
      {t('common.menus.home')}
    </Link>
  )
}

export default HomeNav
