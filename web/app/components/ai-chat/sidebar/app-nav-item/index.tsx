'use client'
import React, { useRef } from 'react'
import cn from 'classnames'
import style from './style.module.css'
import AppIcon from '@/app/components/base/app-icon'

export type IAppNavItemProps = {
  isSelected?: boolean
  onClick?: () => void
  icon?: string | React.ReactNode
  icon_background?: string
  icon_rounded?: boolean
  isMobile?: boolean
  label?: string
}

export default function AppNavItem({
  isSelected = false,
  onClick,
  icon = '',
  icon_background = 'transparent',
  icon_rounded = false,
  label = '',
  isMobile = false,
}: IAppNavItemProps) {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className={cn(
        style.item,
        isMobile && 'border-l-0',
        isSelected ? (isMobile ? style.active_mobile : style.active) : 'hover:bg-gray-200',
        'flex h-8 items-center justify-between px-2 text-sm font-normal cursor-pointer',
      )}
      onClick={onClick}
    >
      <div className={`flex space-x-2 ${isMobile ? style.item_mobile : 'pl-2 grow'}`}>
        <AppIcon size='tiny'
          icon={typeof icon === 'string' ? icon : undefined}
          innerIcon={typeof icon === 'string' ? undefined : icon}
          background={icon_background}
          rounded={icon_rounded}/>
        {!isMobile && <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{label}</div>}
      </div>
    </div>
  )
}
