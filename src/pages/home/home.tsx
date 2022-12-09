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
            content="I am Fullstack Software Engineer born and raised in Hampshire, UK. With a passion for UI/UX, I have learnt to develop unique and highly functional systems from requirements. 
            I enjoy being able to contribute my skills to help a business grow and deliver the best online experience for their customers. Currently working in the argitech space, bringing data-led innovations for post production supply chains."
            type="Card"
            imagePosition="Left"
            id="aboutMe"
            imageOnHover={bitemojiTwo}
          />
          <Card
            title="My hobbies and interests"
            image={bitemojiHobbies}
            altText="Hobbies and interests bitemoji"
            content="I have always been fascinated in understanding how things work which led me to learn software development in my free time. 
            From working with Front-end technologies, I have learnt to use React, Vue, CMS's (AEM (Adobe Experience Manager) and Prismic), Version control (Git, Github), Azure (Blob storage and App services). 
            I have also learnt to use Express JS to build REST API's to connect to a MongoDB. Outside of work, I am learning Postgres, Typescript and python"
            type="Card"
            imagePosition="Right"
            id="hobbies-interests"
            imageOnHover={biteemojiHobbiesTwo}
          />
        </section>
        <CardWrapper></CardWrapper>
        <Timeline />
        <WorkingExperience></WorkingExperience>
      </section>
      <Footer />
    </Fragment>
  );
};
