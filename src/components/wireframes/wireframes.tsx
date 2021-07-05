import styles from "./wireframes.module.scss"

interface imageArrayProps {
  image: string,
  alt: string
}
interface WireframeProps {
  title: string,
  imageArray: imageArrayProps[]
}
export const Wireframes = (props: WireframeProps) => {
  const { title, imageArray} = props
  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
        <div className={styles.card_container}>
          {imageArray.map((image, key) => 
            <div key={key}>
              <img src={image.image} alt={image.alt}/>
            </div>
          )}
        </div>
    </section>
  )
}