'use client'
import type { ChangeEvent, FC } from 'react'
import React, { useState } from 'react'
import cn from 'classnames'
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import s from './style.module.css'
import { AppIconsData as appIcons } from './icon-data'
import Divider from '@/app/components/base/divider'
import Button from '@/app/components/base/button'

import Modal from '@/app/components/base/modal'

const appIconArray = appIcons.categories.map(({ icons }) => icons).flat()

const search = (value: string) => {
  return appIconArray.filter(icon => RegExp(`:.*${value}`, 'i').test(icon))
}

const backgroundColors = [
  '#FFEAD5',
  '#E4FBCC',
  '#D3F8DF',
  '#E0F2FE',

  '#E0EAFF',
  '#EFF1F5',
  '#FBE8FF',
  '#FCE7F6',

  '#FEF7C3',
  '#E6F4D7',
  '#D5F5F6',
  '#D1E9FF',

  '#D1E0FF',
  '#D5D9EB',
  '#ECE9FE',
  '#FFE4E8',
]

export const defaultIcon = {
  icon: 'fluent-emoji-flat:deciduous-tree',
  icon_background: backgroundColors[0],
}

type IAppIconPickerProps = {
  isModal?: boolean
  onSelect?: (emoji: string, background: string) => void
  onClose?: () => void
}

const AppIconPicker: FC<IAppIconPickerProps> = ({
  isModal = true,
  onSelect,
  onClose,
}) => {
  const { t } = useTranslation()

  const [selectedIcon, setSelectedIcon] = useState('')
  const [selectedBackground, setSelectedBackground] = useState(backgroundColors[0])

  const [searchedIcons, setSearchedIcons] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)

  if (!isModal)
    return <> </>

  return <Modal
    onClose={() => { }}
    isShow
    closable={false}
    wrapperClassName='!z-40'
    className={cn(s.container, '!w-[362px] !p-0')}
  >
    <div className='flex flex-col items-center w-full p-3'>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="search"
          id="search"
          autoComplete="off"
          className='block w-full h-10 px-3 pl-10 text-sm font-normal bg-gray-100 rounded-lg'
          placeholder="Search icons..."
          onChange={async (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value === '') {
              setIsSearching(false)
            }
            else {
              setIsSearching(true)
              const icons = search(e.target.value)
              setSearchedIcons(icons)
            }
          }}
        />
      </div>
    </div>
    <Divider className='m-0 mb-3' />

    <div className="w-full max-h-[200px] overflow-x-hidden overflow-y-auto px-3">
      {isSearching && <>
        <div key={'category-search'} className='flex flex-col'>
          <p className='font-medium uppercase text-xs text-[#101828] mb-1'>Search</p>
          <div className='w-full h-full grid grid-cols-8 gap-1'>
            {searchedIcons.map((icon: string, index: number) => {
              return <div
                key={`search-${icon}-${index}`}
                className='inline-flex w-10 h-10 rounded-lg items-center justify-center'
                onClick={() => {
                  setSelectedIcon(icon)
                }}
              >
                <div className='cursor-pointer w-8 h-8 p-1 flex items-center justify-center rounded-lg hover:ring-1 ring-offset-1 ring-gray-300'>
                  <Icon icon={icon} width={36} />
                </div>
              </div>
            })}
          </div>
        </div>
      </>}

      {appIcons.categories.map(({ category, icons }, index: number) => {
        return <div key={`${category}-${index}`} className='flex flex-col'>
          <p className='font-medium uppercase text-xs text-[#101828] mb-1'>{category}</p>
          <div className='w-full h-full grid grid-cols-8 gap-1'>
            {/* <Icon icon='fluent-emoji-flat:baby-chick' ></Icon>  */}
            {icons.map((icon, index: number) => {
              return <div
                key={`${icon}-${index}`}
                className='inline-flex w-10 h-10 rounded-lg items-center justify-center'
                onClick={() => {
                  setSelectedIcon(icon)
                }}
              >
                <div className='cursor-pointer w-8 h-8 p-1 flex items-center justify-center rounded-lg hover:ring-1 ring-offset-1 ring-gray-300'>
                  <Icon icon={icon} width={36}></Icon>
                </div>
              </div>
            })}

          </div>
        </div>
      })}

    </div>

    {/* Color Select */}
    <div className={cn('p-3 ', selectedIcon === '' ? 'opacity-25' : '')}>
      <p className='font-medium uppercase text-xs text-[#101828] mb-2'>Choose Style</p>
      <div className='w-full h-full grid grid-cols-8 gap-1'>
        {backgroundColors.map((color) => {
          return <div
            key={color}
            className={
              cn(
                'cursor-pointer',
                'hover:ring-1 ring-offset-1',
                'inline-flex w-10 h-10 rounded-lg items-center justify-center',
                color === selectedBackground ? 'ring-1 ring-gray-300' : '',
              )}
            onClick={() => {
              setSelectedBackground(color)
            }}
          >
            <div className={cn(
              'w-8 h-8 p-1 flex items-center justify-center rounded-lg',
            )
            } style={{ background: color }}>
              {selectedIcon !== '' && <Icon icon={selectedIcon} width={36} />}
            </div>
          </div>
        })}
      </div>
    </div>
    <Divider className='m-0' />
    <div className='w-full flex items-center justify-center p-3 gap-2'>
      <Button type="default" className='w-full' onClick={() => {
        onClose && onClose()
      }}>
        {t('app.emoji.cancel')}
      </Button>
      <Button
        disabled={selectedIcon === ''}
        type="primary"
        className='w-full'
        onClick={() => {
          onSelect && onSelect(selectedIcon, selectedBackground)
        }}>
        {t('app.emoji.ok')}
      </Button>
    </div>
  </Modal>
}
export default AppIconPicker
