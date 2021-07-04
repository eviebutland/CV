import { ReactEventHandler } from "react"
import styles from './button.module.scss'
import cs from 'classnames'

export type StyleProps = 'full' | 'outline'
interface ButtonProps {
  text: string,
  onClick: ReactEventHandler
  style: StyleProps
}
export const Button = (props: ButtonProps) => {
  const { onClick, text, style} = props
  return (
    <button onClick={onClick} className={cs(styles.button, style === 'full' ? styles.full : styles.outline)}>{text}</button>
  )
}