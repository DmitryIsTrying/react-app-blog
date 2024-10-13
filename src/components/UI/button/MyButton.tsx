import { ReactNode } from 'react'
import classes from './MyButton.module.css'

type MyButtonProps = {
  children: ReactNode
  [key: string]: any
}

export const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  )
}
