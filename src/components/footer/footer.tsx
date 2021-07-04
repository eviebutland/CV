import styles from './footer.module.scss'
import linkedInIcon from '../../assets/svg/linkedin-in-brands.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="mailto:evie.butland@gmail.com">Email</a>
      <a href="tel:07720764111">Give me a call</a>
      <a className={styles.icon} href="https://www.linkedin.com/in/evie-butland-432a33170">
        <img src={linkedInIcon} alt="linked in icon"/>
      </a>
    </footer>
  )
}