import './IconButton.scss'

import * as React from 'react'

import Icon, { IconColor, IconSize, IconType } from '../Icon/Icon'

type IconButtonType = 'clear' | 'primary'

type IconButtonShape = 'square' | 'circle'

export type IconButtonProps = {
  iconType: IconType
  size: IconSize
  type?: IconButtonType
  shape?: IconButtonShape
  iconColor?: IconColor
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>

const ICON_BUTTON_SIZES: Readonly<Record<IconSize, string>> = {
  sm: 'IconButton_sm',
  md: 'IconButton_md',
  lg: 'IconButton_lg',
  xlg: 'IconButton_xlg',
}

const ICON_BUTTON_TYPES: Readonly<Record<IconButtonType, string>> = {
  primary: 'IconButton_primary',
  clear: 'IconButton_clear',
}

const ICON_BUTTON_SHAPES: Readonly<
  Record<IconButtonShape, Record<IconSize, string>>
> = {
  circle: {
    sm: 'Circle_sm',
    md: 'Circle_md',
    lg: 'Circle_lg',
    xlg: 'Circle_xlg',
  },
  square: {
    sm: 'Square_sm',
    md: 'Square_md',
    lg: 'Square_lg',
    xlg: 'Square_clg',
  },
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  iconType,
  size,
  shape = 'circle',
  iconColor,
  type = 'clear',
  ...restProps
}) => {
  return (
    <button
      type='button'
      className={`${className} IconButton ${ICON_BUTTON_TYPES[type]} ${ICON_BUTTON_SIZES[size]} ${ICON_BUTTON_SHAPES[shape][size]}`}
      {...restProps}
    >
      <Icon color={iconColor} type={iconType} size={size} />
    </button>
  )
}

export default IconButton
