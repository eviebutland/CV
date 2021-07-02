import styles from "./card.module.scss"
import cs from 'classnames'

export type CardType = 'Project' | 'Card'
export type ImagePosition = 'Left' | 'Right'

interface CardProps {
  title: string
  image: string
  altText: string
  content: string
  imagePosition?: ImagePosition
  type: CardType
  id?: string
}

export const Card = (props: CardProps) => {
  return (
    <div className={cs(styles.container, props.imagePosition ? 'left' : 'right')} id={props.id}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.altText}/>
      <p>{props.content}</p>
    </div>
  )
}