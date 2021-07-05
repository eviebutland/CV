import styles from './colours.module.scss'

interface ColoursProps {
  colours: string[]
}
export const Colours = (props: ColoursProps) => {
  return (
    <div>
      <h3>Project colours</h3>
      <div>
        {props.colours.map((colour, key) => <div key={key}>
          <div className={styles.colour}></div>
          <p>{colour}</p>
        </div>)}
      </div>
    </div>
  )
}