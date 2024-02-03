'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import classNames from 'classnames'
import { Chat, ChatActive } from '../../base/icons/src/public/header-nav/chat'
type ChatNavProps = {
  className?: string
}

const ChatNav = ({
  className,
}: ChatNavProps) => {
  const { t } = useTranslation()
  const selectedSegment = useSelectedLayoutSegment()
  const actived = selectedSegment === 'chat'

  return (
    <Link href="/chat/chat" className={classNames(
      className, 'group',
      actived && 'bg-white shadow-md',
      actived ? 'text-primary-600' : 'text-gray-500 hover:bg-gray-200',
    )}>
      {
        actived
          ? <ChatActive className='mr-2 w-4 h-4' />
          : <Chat className='mr-2 w-4 h-4' />
      }
      {t('common.menus.chat')}
    </Link>
  )
}

export default ChatNav
