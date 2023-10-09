'use client'
import type { FC } from 'react'
import React from 'react'
import AppHome from '@/app/components/home'

// import Main from '@/app/components/share/chat'

const Home: FC = () => {
  return (
    <AppHome />
  )
}

export default React.memo(Home)
