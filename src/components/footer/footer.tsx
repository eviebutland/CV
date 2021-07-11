import styles from './footer.module.scss'
import linkedInIcon from '../../assets/svg/linkedin-in-brands.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <a href="mailto:evie.butland@gmail.com">Email</a>
        </li>
        <li>
          <a href="tel:07720764111">Call</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/evie-butland-432a33170" target="_blank" rel="noreferrer">
            <img src={linkedInIcon} alt="linked in icon"/>
          </a>
        </li>
      </ul>
      <div className={styles.copyright}>
        <p>&copy; Evie Perren {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}