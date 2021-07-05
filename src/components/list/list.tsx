import styles from "./list.module.scss"

interface ListProps {
  title: string
  tags: string[]
  useHash: boolean
}

export const List = (props: ListProps) => {
  const { title, tags, useHash } = props
  return (
    <section className={styles.container}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <ul>
        {tags.map((item, key) => <li key={key}>
          <p>
            {useHash && (
              <span>#</span>
            )}
            {item}
          </p>
        </li>)}
      </ul>
    </section>
  )
}