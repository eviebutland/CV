import { Fragment } from "react";
import { Header } from "../../components/header/header";
import { CardWrapper } from "../../components/cardWrapper/cardWrapper";
import { Timeline } from "../../components/timeline/timeline";
import { Card } from "../../components/card/card";
import { Footer } from "../../components/footer/footer";
import bitemoji from "../../assets/images/about-me-bitemoji.png";
import bitemojiTwo from "../../assets/images/about-me-two.png";
import bitemojiHobbies from "../../assets/images/hobbies.png";
import biteemojiHobbiesTwo from "../../assets/images/working-bitemoji.png";
import styles from "./home.module.scss";
import { WorkingExperience } from "../../components/workingExperience/workingExperience";
import PDF from "../../assets/PDF/Evie-Perren.pdf";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className={styles.content}>
        <section className={styles.cards}>
          <Card
            title="About me"
            image={bitemoji}
            altText="Bitemoji of me"
            content="I am Fullstack Software Engineer based in Hampshire, UK. With a strong passion for problem solving and over 4 years experience, I have learnt build maintainable features to complex challenges to a high quality, following best practices and delivering within the required deadline. 
            I thrive working in a fast paced environment with opportunity to grow and strength my skills. Currently working at an Argi-tech SAAS start-up, bringing data-led innovations for post production supply chains."
            type="Card"
            imagePosition="Left"
            id="aboutMe"
            imageOnHover={bitemojiTwo}
          />
          <Card
            title="My hobbies and interests"
            image={bitemojiHobbies}
            altText="Hobbies and interests bitemoji"
            content="I have a passion for creating simple solutions to complex problems and contributing my knowledge to help a company succeed. In my free time I love to learn new technologies, read and travel. 
            My current side project I am using to gain knowledge is creating a Fitness App. From the ground up, I have built multiple API's, maintain a Postgres database and building an easy-to-use UI.
           "
            type="Card"
            imagePosition="Right"
            id="hobbies-interests"
            imageOnHover={biteemojiHobbiesTwo}
          />
        </section>
        <CardWrapper></CardWrapper>
        <Timeline />

        <div className={styles.cv}>
          <a href={PDF} target="_blank" rel="noreferrer">
            View PDF CV
          </a>
        </div>

        <WorkingExperience></WorkingExperience>
      </section>
      <Footer />
    </Fragment>
  );
};
