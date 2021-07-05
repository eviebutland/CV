import { ReactEventHandler } from "react"
import styles from './button.module.scss'
import cs from 'classnames'

export type StyleProps = 'full' | 'outline'

interface ButtonProps {
  text: string,
  onClick: ReactEventHandler
  style: StyleProps,
  location: string
}
export const Button = (props: ButtonProps) => {
  const { onClick, text, style, location} = props
  return (
    <a href={location} onClick={onClick} className={cs(styles.button, style === 'full' ? styles.full : styles.outline)}>{text}</a>
  )
}