import { Button } from "../button/button"
import styles from './header.module.scss'

export const Header = () => {
  return(
    <section className={styles.container}>
      <img alt="picture of me"/>
      <h1>Hello <br/> I am Evie, a Junior Software Developer</h1>
      <p>More text about me here</p>
      <div className={styles.button_container}>
        <Button text="About me" onClick={() => console.log('go to section')}></Button>
        <Button text="About me" onClick={() => console.log('go to section')}></Button>
      </div>
    </section>
  )
}