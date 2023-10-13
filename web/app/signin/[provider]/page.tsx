'use client'
import type { FC } from 'react'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/app/components/base/loading'
import { apiPrefix } from '@/config'

type IOauthSignInOauthProps = {
  params: {
    provider: string
  }
}

const OauthSignInOauth: FC<IOauthSignInOauthProps> = ({ params: { provider } }) => {
  // [Hekaiji]{2023/10/08:集成CAS登录, 并作为默认登录方式}
  // TODO: 通过配置开关来控制
  // 清理登录状态
  if (localStorage?.getItem('console_token'))
    localStorage.removeItem('console_token')
  const router = useRouter()
  // 跳转到登录页
  useEffect(() => {
    router.replace(`${apiPrefix}/oauth/login/${provider}`)
  })
  return (< >
    <Loading type='app'/>
  </>)
}

export default OauthSignInOauth
