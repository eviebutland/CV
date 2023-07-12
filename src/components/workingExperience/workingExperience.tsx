import styles from "./workingExperience.module.scss";

export const WorkingExperience = () => {
  return (
    <section id="working-experience" className={styles.container}>
      <h2 className={styles.title}>Working Experience</h2>
      <ul>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Hectare</h3>
            <p>2022-present</p>
          </div>
          <div className={styles.role}>
            <h3>Fullstack Software Engineer</h3>
            <p>
              Following a promotion in December 2022, I took in further
              responsibly within the team. This included bringing forward new
              ideas and executing them to ensure a stable platform as the
              product usage continues to grow. I have built a strong
              relationship with stake holders with the company, collaborating to
              solve complex issues our users face on a regular basis. This in
              turn has helped me build knowledge on problem solving and creating
              simple solutions to complex problems.
            </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Hectare</h3>
            <p>2021-2022</p>
          </div>
          <div className={styles.role}>
            <h3>Fullstack Software Developer</h3>
            <p>
              In order to expand my knowledge, I joined the Argi-Tech SAAS start
              up in September 2021. In this role, I learnt to work at a fast
              pace, delivering high quality features to a green field user base.
              This required strong communication and prioritisation skills to
              achieve the best product within strict and short timeframes.
              Within this role, I transitioned my knowledge to work with NuxtJS
              on Front end, and MongoDB with Express on the Back end.
            </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2020-2021</p>
          </div>
          <div className={styles.role}>
            <h3>Junior Software Developer</h3>
            <p>
              Following the completion of my apprenticeship, I became a Junior
              Software developer. This role entails converting requirements from
              stakeholders around the business into highly functional working
              code. I contribute to BAU tasks such as improving the
              functionality within Simplyhealth’s CMS (AEM), increasing
              Accessibility and functionality throughout our web estate and
              building projects to the highest quality using SOLID and DRY
              principles. I am also the Lead developer on Interaction studio,
              which allows our marketing team to provide personalised journeys
              throughout the customers experience with Simplyhealth.
            </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2019-2020</p>
          </div>
          <div className={styles.role}>
            <h3>Apprentice Software Developer</h3>
            <p>
              I completed my apprenticeship with Firebrand in September 2020,
              following 2 exams (MTA Database Fundamentals, MTHTML5 Microsoft
              Specialist: Programming with HTML5 with Javascript and CSS3) as
              well as meeting a list of criteria on projects within my
              work-place. For example:
            </p>
            <ul>
              <li>
                1.1ci: Stakeholders: Understanding who they are and what their
                'stake' is
              </li>
              <li>6.1d: Can apply reconcile design against analysis models</li>
              <li>6.1e: Can design software solutions to meet requirements</li>
              <li>
                7.1a: Can take a variety of data and business requirements and
                convert them into basic analysis artefacts to understand and can
                clarify the intended use of the proposed software
              </li>
            </ul>
            <p>
              From my apprenticeship, I was able to learn hands-on skills to
              increase my knowledge of software development and become actively
              involved in all BAU tasks within Simplyhealth.
            </p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div className={styles.company}>
            <h3>Simplyhealth</h3>
            <p>2017-2019</p>
          </div>
          <div className={styles.role}>
            <h3>Customer Service Advisor</h3>
            <p>
              As a Contact Advisor, I spoke to customers over the phone,
              LiveChat and email to deal with their complex queries. My role was
              to understand their concerns with their product and establish a
              satisfactory outcome. This required organisation, working to
              resolve issues swiftly and in alignment with our regulations.{" "}
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
