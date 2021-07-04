import styles from './timeline.module.scss'

export const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.date_container}>
        <h2>2018 
          <br className={styles.break}/>
          <span className={styles.span}>-</span>
          {new Date().getFullYear()}</h2>
      </div>
      <div>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
        <p>Bit of text here about me but not a lot. Bit of text here about me but not a lot Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot. Bit of text here about me but not a lot</p>
      </div>
    </div>
  )
}