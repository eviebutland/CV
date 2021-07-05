import styles from './workingExperience.module.scss'

export const WorkingExperience = () => {
  return (
    <section id="working-experience" className={styles.container}>
      <h2 className={styles.title}>Working experience</h2>
      <ul>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2016-2017</p>
            </div>
            <div className={styles.role}>
              <h3>Junior software developer</h3>
              <p>In my role as a Junior software developer...</p>
            </div>
          </li>
          <li className={styles.list_item}>
            <div className={styles.company}>
              <h3>Simplyhealth</h3>
              <p>2018-2019</p>
            </div>
            <div className={styles.role}>
              <h3>Apprentice software developer</h3>
              <p>In my role as an Apprentice software developer...</p>
            </div>
          </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2016-2017</p>
          </div>
          <div className={styles.role}>
            <h3>Customer Service advisor</h3>
            <p>In my role as a customer service advisor...</p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Sainsbury's</h3>
            <p>2017-2018</p>
          </div>
          <div className={styles.role}>
            <h3>Assitant helper person</h3>
            <p>In my role at sainsburys...</p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Sports Direct</h3>
            <p>2016-2017</p>
          </div>
          <div className={styles.role}>
            <h3>Assitant helper person</h3>
            <p>In my role at sports direct...</p>
          </div>
        </li>
      </ul>
    </section>
  )
}