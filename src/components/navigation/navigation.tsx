import { useState } from 'react'
import styles from './navigation.module.scss'
import menuIcon from '../../assets/svg/bars-solid.svg'
import closeIcon from '../../assets/svg/times-solid.svg'
import cs from 'classnames'
import homeIcon from "../../assets/images/home-bitemoji.png"

export const Navigation = () => {
  const [ isDisplayingMenu, setIsDisplayingMenu ] = useState(false)
  return (
    <header className={cs(styles.container, isDisplayingMenu && styles.displayContainer)}>
      <div className={styles.button_container}>
        <button 
          onClick={() => 
            setIsDisplayingMenu(!isDisplayingMenu)
          } 
          className={styles.menu_button}
        >
          {isDisplayingMenu ? (
            <img src={closeIcon} alt="close menu"/>
          ) : (
            <img src={menuIcon} alt="open menu"/>
          )}
        </button>
      </div>
      <nav className={isDisplayingMenu ? styles.display : styles.hide}>
        <a href="/" className={styles.home}>
          <img src={homeIcon} alt="Home"/>
        </a>
        <ul>
          <li>
            <a href="http://localhost:3000/#hobbies-interests">Hobbies and interests</a>
          </li>
          <li>
            <a href="http://localhost:3000/#projects">Projects</a>
          </li>
          <li>
            <a href="http://localhost:3000/#working-experience">Working Experience</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}