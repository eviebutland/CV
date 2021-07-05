import styles from './workingExperience.module.scss'

export const WorkingExperience = () => {
  return (
    <section id="working-experience" className={styles.container}>
      <h2 className={styles.title}>Working experience</h2>
      <ul>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2020-Present</p>
            </div>
            <div className={styles.role}>
              <h3>Junior software developer</h3>
              <p>Following the completion of my apprenticeship, I became a Junior Software developer. This role entails converting requirements from stakeholders around the business into highly functional working code. I contribute to BAU tasks such as improving the functionality within Simplyhealth’s CMS (AEM), increasing Accessibility and functionality throughout our web estate and building projects to the highest quality using SOLID and DRY principles. I am also the Lead developer on Interaction studio, which allows our marketing team to provide personalised journeys throughout the customers experience with Simplyhealth..</p>
            </div>
          </li>
          <li className={styles.list_item}>
            <div className={styles.company}>
              <h3>Simplyhealth</h3>
              <p>2019-2020</p>
            </div>
            <div className={styles.role}>
              <h3>Apprentice software developer</h3>
              <p>I completed my apprenticeship with Firebrand in September 2020, following 2 exams (MTA Database Fundamentals, MTHTML5 Microsoft Specialist: Programming with HTML5 with Javascript and CSS3) as well as meeting a list of criteria on projects within my work-place. For example:
              </p> 
              <ul>
                <li>1.1ci: Stakeholders: Understanding who they are and what their 'stake' is</li>
                <li>6.1d: Can apply reconcile design against analysis models</li>
                <li>6.1e: Can design software solutions to meet requirements</li>
                <li>7.1a: Can take a variety of data and business requirements and convert them into basic analysis artefacts to understand and can clarify the intended use of the proposed software</li>
              </ul>
              <p>From my apprenticeship, I was able to learn hands-on skills to increase my knowledge of software development and become actively involved in all BAU tasks within Simplyhealth.</p>
            </div>
          </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2017-2019</p>
          </div>
          <div className={styles.role}>
            <h3>Customer Service advisor</h3>
            <p>As a Contact Advisor, I spoke to customers over the phone, LiveChat and email to deal with their complex queries. My role was to understand their concerns with their product and establish a satisfactory outcome. This required organisation, working to resolve issues swiftly and in alignment with our regulations. </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Sainsbury's</h3>
            <p>2016-2017</p>
          </div>
          <div className={styles.role}>
            <h3>Customer Service assistant</h3>
            <p>At Sainsbury’s, I developed further relationship skills by serving customers and representing the company. I take being a face of the business seriously.</p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Sports Direct</h3>
            <p>2015-2016</p>
          </div>
          <div className={styles.role}>
            <h3>Customer Service assistant</h3>
            <p>This required face-to-face interactions with customers assisting them with their queries and seeking resolution. Being customer facing, I was polite and respectful.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}