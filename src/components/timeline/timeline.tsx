import styles from "./timeline.module.scss";

export const Timeline = () => {
  const yearsExperience = new Date().getFullYear() - 2019;

  return (
    <div className={styles.container}>
      <div className={styles.date_container}>
        <h2>
          2018
          <br className={styles.break} />
          <span className={styles.span}>-</span>
          {new Date().getFullYear()}
        </h2>
      </div>
      <div>
        <p>
          Since 2018, I have been building my skills in my free time as well as
          working full time as a developer. I orginally started to learn via
          YouTube, recreating their examples with my own touch.
        </p>
        <p>
          In 2019, I started an apprenticeship with FireBrand, recieving a Level
          4 Software Developer accreditation. This allowed me to dedicate my
          full attention to learning as well as getting hands-on-experience.
        </p>
        <p>
          I have since joined an Argi-tech SAAS start-up, taking on more complex
          tasks and working closely with stakeholders to deliver a high quality
          product.
        </p>
        <p>
          With {yearsExperience} years of working experience, I have learnt
          build maintainable features to complex challenges to a high quality,
          following best practices and delivering within the required deadline.
        </p>
      </div>
    </div>
  );
};
