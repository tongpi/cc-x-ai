'use client'
import React, { useEffect, useReducer, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import useSWR from 'swr'
import cn from 'classnames'
import Toast from '../components/base/toast'
import style from './page.module.css'
// import Tooltip from '@/app/components/base/tooltip/index'
import { IS_CE_EDITION, apiPrefix } from '@/config'
import Button from '@/app/components/base/button'
import { login, oauth } from '@/service/common'

const validEmailReg = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,}$/

type IState = {
  formValid: boolean
  github: boolean
  google: boolean
  cctalk: boolean
}

function reducer(state: IState, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        formValid: true,
      }
    case 'login_failed':
      return {
        ...state,
        formValid: true,
      }
    case 'cctalk_login':
      return {
        ...state,
        cctalk: true,
      }
    case 'cctalk_login_failed':
      return {
        ...state,
        cctalk: false,
      }
    case 'github_login':
      return {
        ...state,
        github: true,
      }
    case 'github_login_failed':
      return {
        ...state,
        github: false,
      }
    case 'google_login':
      return {
        ...state,
        google: true,
      }
    case 'google_login_failed':
      return {
        ...state,
        google: false,
      }
    default:
      throw new Error('Unknown action.')
  }
}

const NormalForm = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const [state, dispatch] = useReducer(reducer, {
    formValid: false,
    github: false,
    google: false,
    cctalk: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const handleEmailPasswordLogin = async () => {
    if (!validEmailReg.test(email)) {
      Toast.notify({
        type: 'error',
        message: t('login.error.emailInValid'),
      })
      return
    }
    try {
      setIsLoading(true)
      await login({
        url: '/login',
        body: {
          email,
          password,
          remember_me: true,
        },
      })
      router.push('/apps')
    }
    finally {
      setIsLoading(false)
    }
  }

  const { data: cctalk, error: cctalk_error } = useSWR(state.cctalk
    ? ({
      url: '/oauth/login/cctalk',
      // params: {
      //   provider: 'cctalk',
      // },
    })
    : null, oauth)

  const { data: github, error: github_error } = useSWR(state.github
    ? ({
      url: '/oauth/login/github',
      // params: {
      //   provider: 'github',
      // },
    })
    : null, oauth)

  const { data: google, error: google_error } = useSWR(state.google
    ? ({
      url: '/oauth/login/google',
      // params: {
      //   provider: 'google',
      // },
    })
    : null, oauth)

  useEffect(() => {
    if (cctalk_error !== undefined)
      dispatch({ type: 'cctalk_login_failed', payload: null })
    if (cctalk)
      window.location.href = cctalk.redirect_url
  }, [cctalk, cctalk_error])

  useEffect(() => {
    if (github_error !== undefined)
      dispatch({ type: 'github_login_failed', payload: null })
    if (github)
      window.location.href = github.redirect_url
  }, [github, github_error])

  useEffect(() => {
    if (google_error !== undefined)
      dispatch({ type: 'google_login_failed', payload: null })
    if (google)
      window.location.href = google.redirect_url
  }, [google, google])

  return (
    <div className={cn(
      style.cont_box)}>
      <div className="w-full mx-auto ">
        <div className={cn(
          style.cont_box_header)}></div>
      </div>

      <div className="w-full mx-auto mt-8">
        <div className="bg-white ">
          {!IS_CE_EDITION && (
            <div className="flex flex-col gap-3 mt-6">
              <div className='w-full'>
                <a href={`${apiPrefix}/oauth/login/cctalk`}>
                  <Button
                    type='default'
                    disabled={isLoading}
                    className='w-full hover:!bg-gray-50 !text-sm !font-medium'
                  >
                    <>
                      <span className={
                        classNames(
                          style.githubIcon,
                          'w-5 h-5 mr-2',
                        )
                      } />
                      <span className="truncate text-gray-800">使用 拓思(CC-Talks) 登录</span>
                    </>
                  </Button>
                </a>
              </div>
              {/* <div className='w-full'>
                <a href={`${apiPrefix}/oauth/login/github`}>
                  <Button
                    type='default'
                    disabled={isLoading}
                    className='w-full hover:!bg-gray-50 !text-sm !font-medium'
                  >
                    <>
                      <span className={
                        classNames(
                          style.githubIcon,
                          'w-5 h-5 mr-2',
                        )
                      } />
                      <span className="truncate text-gray-800">{t('login.withGitHub')}</span>
                    </>
                  </Button>
                </a>
              </div>
              <div className='w-full'>
                <a href={`${apiPrefix}/oauth/login/google`}>
                  <Button
                    type='default'
                    disabled={isLoading}
                    className='w-full hover:!bg-gray-50 !text-sm !font-medium'
                  >
                    <>
                      <span className={
                        classNames(
                          style.googleIcon,
                          'w-5 h-5 mr-2',
                        )
                      } />
                      <span className="truncate text-gray-800">{t('login.withGoogle')}</span>
                    </>
                  </Button>
                </a>
              </div> */}
            </div>
          )}

          {
            !IS_CE_EDITION && <>
              {/* <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-gray-300 bg-white">OR</span>
                </div>
              </div> */}

              <form onSubmit={() => { }}>
                <div className='mb-5'>
                  <div className="mt-1">
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('login.emailPlaceholder') || ''}
                      className={'appearance-none block w-full rounded-lg pl-[14px] px-3 py-2 border border-gray-200 hover:border-gray-300 hover:shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 caret-primary-600 sm:text-sm'}
                    />
                  </div>
                </div>

                <div className='mb-4'>

                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      id="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      placeholder={t('login.passwordPlaceholder') || ''}
                      className={'appearance-none block w-full rounded-lg pl-[14px] px-3 py-2 border border-gray-200 hover:border-gray-300 hover:shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 caret-primary-600 sm:text-sm pr-10'}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                      >
                        {showPassword ? '👀' : '😝'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className='mb-2'>
                  <Button
                    type='primary'
                    onClick={handleEmailPasswordLogin}
                    disabled={isLoading}
                    className={cn(style.btn_login, 'w-full   !fone-medium !text-sm')}
                  >{t('login.signBtn')}</Button>
                </div>
              </form>
            </>
          }
          {/*  agree to our Terms and Privacy Policy. */}
          <div className="w-hull text-left block mt-2 text-xs text-gray-600">
            <span className={cn(style.fontBold)}>{t('login.tosDesc_mz')}</span>{t('login.tosDesc')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NormalForm
