'use client'
import React from 'react'
import { useContext } from 'use-context-selector'
import I18n from '@/context/i18n'

const Header = () => {
  const { locale, setLocaleOnClient } = useContext(I18n)
  return <div className='flex items-center justify-between p-6 w-full'>
    {/* 左上角机器人图标和右上角语言切换去掉。author：huye */}
    {/* <div className={style.logo}></div> */}
    {/* <Select
      value={locale}
      items={LOCALES}
      onChange={(value) => {
        setLocaleOnClient(value as Locale)
      }}
    /> */}
  </div>
}

export default Header
