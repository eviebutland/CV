import { Fragment } from "react"

interface ListProps {
  title: string
  tags: string[]
  useHash: boolean
}

export const List = (props: ListProps) => {
  const { title, tags, useHash } = props
  return (
    <Fragment>
      <h2>{title}</h2>
      {tags.map((item, key) => <p key={key}>
        {useHash && (
          <span>#</span>
        )}
        {item}</p>)}
    </Fragment>
  )
}