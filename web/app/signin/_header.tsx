'use client'
import React from 'react'
import { useContext } from 'use-context-selector'
import style from './page.module.css'
import Select, { LOCALES } from '@/app/components/base/select/locale'
import { type Locale } from '@/i18n'
import I18n from '@/context/i18n'

const Header = () => {
  const { locale, setLocaleOnClient } = useContext(I18n)
  return <div className='flex items-center justify-between p-6 w-full'>
    <div className={style.logo}></div>
    <Select
      value={locale}
      items={LOCALES}
      onChange={(value) => {
        setLocaleOnClient(value as Locale)
      }}
    />

    <a href={`${process.env.NEXT_PUBLIC_CC_TALKS_API_BASE_URL}/open/session/end?ui_locales=zh-CN&client_id=tc_6&post_logout_redirect_uri=${encodeURIComponent(window.location.origin)}`} >注销拓思(CC-TALKS)会话</a>

    {/* <a href='http://192.168.15.130:11000/open/oidc/logout?id_token_hint=v6aEShQ_lEpFy73mP-nqFp4Vv1tS4vVy-Xt0thqMzy1&post_logout_redirect_uri=http://127.0.0.1:3002/signin&local=zh-CN' >注销OIDC会话 By oidc/logout</a>
  <a href='http://192.168.15.130:11000/open/v2/logout?client_id=tc_6&returnTo=http://127.0.0.1:3002/signin&federated' >注销OIDC会话 By federated</a>
  <form method='post' action='http://192.168.15.130:11000/open/oidc/logout?client_id=tc_6&post_logout_redirect_uri=http://127.0.0.1:3002/signin&local=zh-CN' >
      <button type='submit'>logout</button>
  </form>
  <form method='post' action='http://192.168.15.130:11000/open/v2/logout?client_id=tc_6&returnTo=http://127.0.0.1:3002/signin&federated' >
      <button type='submit'>logout2</button>
  </form> */}
  </div>
}

export default Header
