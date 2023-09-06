import React from 'react'
import type { FC } from 'react'
import GA, { GaType } from '@/app/components/base/ga'

const Layout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    /* <div className="overflow-x-auto"> */
    /* describe：由于页面出现横向滚动条，所以将该样式去除。aythor：huye */
    <div className="">
      <div className="w-screen h-screen min-w-[300px]">
        <GA gaType={GaType.webapp} />
        {children}
      </div>
    </div>
  )
}

export default Layout
