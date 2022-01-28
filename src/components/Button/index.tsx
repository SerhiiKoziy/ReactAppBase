import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from '@material-ui/core/Button';
import { Button as ButtonComponent } from '@material-ui/core';

import styles from './styles.module.scss';

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, disableElevation, disableRipple, className, ...rest } = props

  return (
    <ButtonComponent
      className={clsx(styles.commonButton, className)}
      variant={variant ?? 'contained'}
      disableElevation={disableElevation ?? true}
      disableRipple={disableRipple ?? true}
      { ...rest }
    />
  )
}
