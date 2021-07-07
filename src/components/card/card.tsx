import styles from "./card.module.scss"
import cs from 'classnames'
import { Fragment, useState } from "react"

export type CardType = 'Project' | 'Card'
export type ImagePosition = 'Left' | 'Right'

interface CardProps {
  title: string
  image: string
  altText: string
  content: string
  imagePosition?: ImagePosition
  type: CardType
  id?: string,
  imageOnHover: string
}

export const Card = (props: CardProps) => {
  const { title, image, altText, content, imagePosition, type, id, imageOnHover} = props
  const [ cardImage, setCardImage] = useState(image)

  return (
    <div 
      className={cs(
        styles.container, 
        imagePosition === "Left" ? styles.left : styles.right,
        type === 'Project' && styles.project 
      )} id={id}>
      {type === 'Project' ? (
        <Fragment>
          <img src={image} alt={altText}/>
          <h3>{title}</h3>
          <p>{content}</p>
        </Fragment>
      ): (
        <Fragment>
          <img 
          src={cardImage} 
          alt={altText} 
          onMouseOver={() => 
            setCardImage(imageOnHover)
          } 
          onMouseLeave={() => 
            setCardImage(image)
          }/>
          
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        </Fragment>
      )}
    </div>
  )
}