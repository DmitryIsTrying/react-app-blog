import React, { ForwardedRef, InputHTMLAttributes } from 'react'
import classes from './MyInput.module.css'

type MyInputProps = InputHTMLAttributes<HTMLInputElement>

export const MyInput = React.forwardRef((props: MyInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} className={classes.myInput} {...props} />
})
