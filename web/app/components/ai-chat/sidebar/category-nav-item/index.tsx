'use client'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import cn from 'classnames'
import s from './style.module.css'
import type { AppCategoryDetail } from '@/models/ai-chat'

export type IAppNavItemProps = {
  categoryDetail: AppCategoryDetail
  isSelected: boolean
}

export default function AppNavItem({
  categoryDetail,
  isSelected,
}: IAppNavItemProps) {
  const router = useRouter()
  const url = `/ai-chat/category/${categoryDetail.key}`
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className={cn(
        s.item,
        isSelected ? s.active : 'hover:bg-gray-200',
        'flex h-8 items-center justify-between px-2 rounded-lg text-sm font-normal ',
      )}
      onClick={() => {
        router.push(url)
      }}
    >
      <div className='flex items-center space-x-2 w-0 grow'>
        <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{categoryDetail.name}</div>
      </div>
    </div>
  )
}
