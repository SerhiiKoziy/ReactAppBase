import React from 'react'
import clsx from 'clsx'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import styles from './styles.module.scss'

export type IconData = IconDefinition | string[] | string

interface IconProps extends SvgIconProps {
  icon: IconData
}

export const Icon: React.FC<IconProps> = (props) => {
  const { icon, className, ...svgIconProps } = props

  const svgPathData = typeof icon === 'string' || Array.isArray(icon) ? icon : icon.icon[4]

  return (
    <div className={clsx(styles.icon, className)}>
      <SvgIcon
        { ...svgIconProps }
        viewBox={typeof icon === 'string' || Array.isArray(icon) ? `0 0 24 24` : `0 0 ${icon.icon[0]} ${icon.icon[1]}`}
        className={typeof icon === 'string' || Array.isArray(icon) ? '' : styles['fontawesome-icon']}
      >
        {typeof svgPathData === 'string' ? (
          <path d={svgPathData} />
        ) : (
          svgPathData.map((path) => (
            <path key={path} d={path} />
          ))
        )}
      </SvgIcon>
    </div>
  )
}
