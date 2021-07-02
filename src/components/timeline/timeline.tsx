import styles from './timeline.module.scss'

export const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.date_container}>2018 {new Date().getFullYear()}</div>
      <div>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
      </div>
    </div>
  )
}