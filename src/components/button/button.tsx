import { ReactEventHandler } from "react"

interface ButtonProps {
  text: string,
  onClick: ReactEventHandler
}
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}