import { ReactChild } from "react"
import { List } from "../list/list"

interface SubheaderProps {
  title: string
  children: ReactChild
  tags: string[]
}

export const Subheader = (props: SubheaderProps) => {
  const { title, children, tags } = props
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
      <List title="What i've done" tags={tags} useHash={true}></List>
    </section>
  )
}