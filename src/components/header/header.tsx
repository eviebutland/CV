import { Button } from "../button/button"
import styles from './header.module.scss'
import bitemoji from '../../assets/images/image-of-me.png'
import bitemojiHover from '../../assets/images/image-of-me-two.png'
import { useState } from "react"

export const Header = () => {
  const [image, setImage] = useState(bitemoji)
  return(
    <section className={styles.container}>
      <div>
        <img 
          src={image} 
          alt="bitemoji of me" 
          onMouseOver={() => 
            setImage(bitemojiHover)
          } 
          onMouseLeave={() => 
            setImage(bitemoji)
          }/>
      </div>
      <h1>Hello</h1>
      <h2>I am Evie, a Junior Software Developer</h2>
      <div className={styles.button_container}>
        <Button 
          location="#aboutMe"
          text="About me" 
          onClick={() => console.log('go to section')}
          style="full"
          />
        <Button 
          location="#projects"
          text="Projects" 
          onClick={() => console.log('go to section')}
          style="outline"
          />
      </div>
    </section>
  )
}