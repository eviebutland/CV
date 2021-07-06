import { ReactChildren, ReactChild } from "react"
import { List } from "../list/list"
import styles from "./subheader.module.scss"

interface SubheaderProps {
  title: string
  children: ReactChild | ReactChild[]
  tags: string[]
}

export const Subheader = (props: SubheaderProps) => {
  const { title, children, tags } = props
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
      <List title="What i've done" tags={tags} useHash={true}></List>
    </section>
  )
}