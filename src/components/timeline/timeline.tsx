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
        <p>Since 2018, I have been building my skills in my free time as well as working full time as a developer at a health insurance company. I orginally started to learn via YouTube, recreating their examples with my own touch.</p>
        <p>In 2019, I started an apprenticeship with FireBrand, recieving a Level 4 Software Developer accreditation. This allowed me to dedicate my full attention to learning as well as getting hands-on-experience.</p>
        <p>With 3 years of experience, I have a passion for creating a product that exceeds the clients requirements with focus on accessibility. I believe it is key for all users to be able to access and use a website.</p>
        <p>I am is currently working on a freelance project to re-design a driving instructor's website and learning React Native in my free time.</p>
      </div>
    </div>
  )
}