import { ReactEventHandler } from "react"
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
    <a href={location} onClick={onClick} className={cs("button", design === 'full' ? "full" : "outline")}>{text}</a>
  )
}