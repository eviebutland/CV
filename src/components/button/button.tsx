import { ReactEventHandler } from "react"
import styles from './button.module.scss'
import cs from 'classnames'

export type StyleProps = 'full' | 'outline'

interface ButtonProps {
  text: string,
  onClick?: ReactEventHandler
  design: StyleProps,
  location: string
}
export const Button = (props: ButtonProps) => {
  const { onClick, text, design, location} = props
  return (
    <a href={location} onClick={onClick} className={cs(styles.button, design === 'full' ? styles.full : styles.outline)}>{text}</a>
  )
}