import styles from './navigation.module.scss'
import menuIcon from '../../assets/svg/bars-solid.svg'
import closeIcon from '../../assets/svg/times-solid.svg'

import { useState } from 'react'

export const Navigation = () => {
  const [ isDisplayingMenu, setIsDisplayingMenu ] = useState(false)
  return (
    <header className={styles.container}>
      <div className={styles.button_container}>
        <button onClick={() => setIsDisplayingMenu(!isDisplayingMenu)} className={styles.menu_button}>
          {isDisplayingMenu ? (
            <img src={closeIcon} alt="close menu"/>
          ) : (
            <img src={menuIcon} alt="open menu"/>
          )}
        </button>
      </div>
      <nav className={isDisplayingMenu ? styles.display : styles.hide}>
        <ul>
          <li>
            <a href="#hobbiesAndInterests">Hobbies and interests</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}