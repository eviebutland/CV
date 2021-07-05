import styles from './colours.module.scss'

interface ColoursProps {
  colours: string[]
}
export const Colours = (props: ColoursProps) => {
  return (
    <section className={styles.container}>
      <h2>Project colours</h2>
      <div className={styles.content}>
        {props.colours.map((colour, key) => <div key={key} className={styles.colour_container}>
          <div className={styles.colour} style={{backgroundColor: colour}}></div>
          <p>{colour}</p>
        </div>)}
      </div>
    </section>
  )
}