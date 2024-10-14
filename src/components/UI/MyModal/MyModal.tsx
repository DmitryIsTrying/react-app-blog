import { ReactNode } from 'react'
import classes from './MyModal.module.css'

type MyModalProps = {
  children?: ReactNode
  visible: boolean
  setVisible: (visible: boolean) => void
}

export const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
  const rootClasses = [classes.myModal]
  if (visible) rootClasses.push(classes.active)

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div onClick={(e) => e.stopPropagation()} className={classes.myModalContent}>
        {children}
      </div>
    </div>
  )
}
