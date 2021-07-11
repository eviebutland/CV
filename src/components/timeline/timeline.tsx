import styles from './timeline.module.scss'

export const Timeline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.date_container}>
        <h2>2018 
          <br className={styles.break}/>
          <span className={styles.span}>-</span>
          {new Date().getFullYear()}</h2>
      </div>
      <div>
        <p>Since 2018, I have been building her skills in my free time as well as working full time as a developer at a health insurance company.</p>
        <p>In 2019, I started an apprenticeship with FireBrand, recieving a Level 4 Software Developer accreditation.</p>
        <p>With 3 years of experience, I have a passion for creating a product that exceeds the clients requirements with focus on accessibility.</p>
        <p>I am is currently working on a freelance project to re-design a driving instructor's website and learning React Native in my free time.</p>
      </div>
    </div>
  )
}