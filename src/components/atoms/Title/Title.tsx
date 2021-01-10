import './Title.scss'

import * as React from 'react'

type TitleProps = {
  title: string
  info: string
  className?: string
}

const Title: React.FC<TitleProps> = ({ title, info, className = '' }) => {
  return (
    <div className={`Title_container ${className}`}>
      <p>{title}</p>
      <p>{info}</p>
    </div>
  )
}

export default Title
