'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '../components/base/loading'
import { apiPrefix } from '@/config'
const CasLoginForm = () => {
  // 清理登录状态
  if (localStorage?.getItem('console_token'))
    localStorage.removeItem('console_token')
  const router = useRouter()
  // 跳转到登录页
  useEffect(() => {
    router.replace(`${apiPrefix}/oauth/login/gdscas`)
  })
  return (< >
    <Loading type='app'/>
  </>)
}

export default CasLoginForm
