import { useState } from 'react'
import styles from './navigation.module.scss'
import menuIcon from '../../assets/svg/bars-solid.svg'
import closeIcon from '../../assets/svg/times-solid.svg'
import cs from 'classnames'
import homeIcon from "../../assets/images/home-bitemoji.png"
import { projects } from '../../projects/projects'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  const [ isDisplayingMenu, setIsDisplayingMenu ] = useState(false)
  const [ isDisplayingDropdown, setIsDisplayingDropdown ] = useState(false)

  const handleDisplayDropdown = () => {
    setIsDisplayingDropdown(true)
  }
  const handleHideDropdown = () => {
    setIsDisplayingDropdown(false)
  }

  return (
    <header className={cs(styles.container, isDisplayingMenu && styles.displayContainer)}>
      <div className={styles.top_container}>

      <a href="/" className={styles.home}>
        <img src={homeIcon} alt="Home"/> <strong>Evie Perren</strong>
      </a>
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
      </div>
       
      <nav className={isDisplayingMenu ? styles.display : styles.hide}>
        <ul>
          <li onMouseOver={handleHideDropdown}>
            <a href="/#hobbies-interests">Hobbies and interests</a>
          </li>
          <li className={styles.hasDropdown} onClick={handleDisplayDropdown} onMouseOver={handleDisplayDropdown} >
            <p>Projects</p>
            <div className={cs(styles.dropdown, !isDisplayingDropdown && styles.hideDropdown)} onMouseLeave={handleHideDropdown}>
              <ul>
                <li>
                  <a href="/#projects">List of projects</a>
                </li>
                {Object.entries(projects).map((name, item) => <li key={item}>
                  <Link to={name[1].internalLink}>{name[1].name}</Link>
                  </li>
                )}
              </ul>
            </div>
          </li>
          <li onMouseOver={handleHideDropdown}>
            <a href="/#working-experience">Working Experience</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}