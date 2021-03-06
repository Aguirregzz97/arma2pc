import './Icon.scss'

import * as React from 'react'

export type IconType =
  | 'Icon_menu'
  | 'Icon_close'
  | 'Icon_client'
  | 'Icon_provider'
  | 'Icon_chevron_right'
  | 'Icon_check'
  | 'Icon_expand_less'
  | 'Icon_expand_more'
  | 'Icon_question'
  | 'Icon_memory'
  | 'Icon_storage'
  | 'Icon_motherboard'
  | 'Icon_processor'
  | 'Icon_gpu'
  | 'Icon_money'
  | 'Icon_pc'

export type IconSize = 'sm' | 'md' | 'lg' | 'xlg'
export type IconColor = 'grey' | 'yellow' | 'white' | 'black'

export type IconProps = {
  type: IconType
  size?: IconSize
  color?: IconColor
  className?: string
}

const ICON_SIZES: Readonly<Record<IconSize, string>> = {
  sm: 'Icon_sm',
  md: 'Icon_md',
  lg: 'Icon_lg',
  xlg: 'Icon_xlg',
}

const ICON_COLORS: Readonly<Record<IconColor, string>> = {
  grey: 'Icon_grey',
  yellow: 'Icon_yellow',
  white: 'Icon_white',
  black: 'Icon_black',
}

const Icon: React.FC<IconProps> = ({
  type,
  size = 'md',
  color = 'grey',
  className,
}) => {
  return (
    <div
      className={`Icon ${className} ${type} ${ICON_SIZES[size]} ${ICON_COLORS[color]}`}
    />
  )
}

export default Icon
