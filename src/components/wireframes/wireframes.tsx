import { ReactChild } from "react"
import styles from "./wireframes.module.scss"

interface imageArrayProps {
  image: string,
  alt: string,
}
interface WireframeProps {
  title: string,
  imageArray: imageArrayProps[],
  children?: ReactChild 
}
export const Wireframes = (props: WireframeProps) => {
  const { title, imageArray, children} = props
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
        <div className={styles.card_container}>
          {imageArray.map((image, key) => 
            <div key={key}>
              <img src={image.image} alt={image.alt}/>
            </div>
          )}
        </div>
        {children}
    </section>
  )
}