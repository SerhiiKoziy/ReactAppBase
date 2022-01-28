import React from 'react'
import clsx from "clsx";

import TextField, { TextFieldProps } from '@material-ui/core/TextField'

import styles from './styles.module.scss'

export const Input: React.FC<TextFieldProps> = (props) => {
  const { type, error, variant, fullWidth, className, ...textFieldProps } = props

  return (
    <TextField
      { ...textFieldProps }
      className={
        clsx(
          styles.input,
          className
        )
      }
      type={type ?? 'text'}
      variant={variant ?? 'outlined'}
      fullWidth={fullWidth ?? true}
      error={error}
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}
