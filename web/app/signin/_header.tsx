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
    <a href={`${process.env.NEXT_PUBLIC_CC_TALKS_API_BASE_URL}/open/session/end?ui_locales=zh-CN&client_id=tc_6&post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`} >注销拓思(CC-TALKS)会话</a>
  </div>
}

export default Header
