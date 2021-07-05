import styles from "./back.module.scss"
import chevron from "../../assets/svg/chevron-left-solid.svg"

export const Back = () => {
  return (
    <div className={styles.container}>
      <a href="/">
        <img src={chevron} alt="Back button"/>
        Back</a>
    </div>
  )
}