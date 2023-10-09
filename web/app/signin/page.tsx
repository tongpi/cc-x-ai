import React from 'react'
import cn from 'classnames'
import Forms from './forms'
import Header from './_header'
import style from './page.module.css'
import CasLoginForm from './casLoginForm'

const SignIn = () => {
  // [Hekaiji]{2023/10/08:集成CAS登录, 并作为默认登录方式}
  // TODO: 通过配置开关来控制
  return (<CasLoginForm/>)
  return (
    <>
      <div className={cn(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start',
      )}>
        <div className={
          cn(
            'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
            'space-between',
          )
        }>
          <Header />
          <Forms />
          <div className='px-8 py-6 text-sm font-normal text-gray-500'>
            © {new Date().getFullYear()} Dify, Inc. All rights reserved.
          </div>
        </div>

      </div>

    </>
  )
}

export default SignIn
