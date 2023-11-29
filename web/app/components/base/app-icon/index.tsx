import type { FC } from 'react'
import classNames from 'classnames'

import data from '@emoji-mart/data'
import { init } from 'emoji-mart'
import { Icon } from '@iconify/react'
import style from './style.module.css'

init({ data })

export type AppIconProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
  innerIcon?: React.ReactNode
  onClick?: () => void
}

const svgSizeMap = {
  tiny: '1.125rem',
  small: '1.5rem',
  medium: '1.75rem',
  large: '2rem',
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  icon = 'fluent-emoji-flat:robot',
  background,
  className,
  innerIcon,
  onClick,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
      onClick={onClick}
    >
      {/* {innerIcon || ((icon && icon !== '') ? <em-emoji id={icon} /> : <em-emoji id='🤖' />)} */}
      {/* [Hekaiji 2023-10-27]: 将 emoji 表情展示组件改为图标展示 */}
      {innerIcon || (icon?.includes(':')
        ? <Icon width={svgSizeMap[size]} height={svgSizeMap[size]} className={`${style[size]}`} icon={icon}/>
        : <em-emoji id={icon} />)}
    </span>
  )
}

export default AppIcon
