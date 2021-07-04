import styles from './navigation.module.scss'
import menuIcon from '../../assets/svg/bars-solid.svg'
import closeIcon from '../../assets/svg/times-solid.svg'
import cs from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <ul>
          <li>
            <a href="#hobbiesAndInterests">Hobbies and interests</a>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}