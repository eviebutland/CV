import { Fragment, useState } from "react";
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
import PDF from "../../assets/PDF/Evie_Perren.pdf";
import upwork from "../../assets/images/upwork.png";
import peopleperhour from "../../assets/images/peopleperhour.png";
import fiverr from "../../assets/images/Fiverr-Logo.png";
import freelancer from "../../assets/images/freelancer.jpeg";
import { fetchMediumArtices } from "../../service/medium";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faJsSquare,
  faLinkedin,
  faMedium,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { IconGrid } from "../../components/IconGrid";
import {
  faBroadcastTower,
  faCloud,
  faServer,
  faT,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  async function onLoad() {
    if (articles.length < 1) {
      const fetched = await fetchMediumArtices();
      setArticles(fetched);
    }
  }

  const icons = [
    {
      label: "React",
      value: faReact,
    },
    {
      label: "Vue",
      value: faVuejs,
    },
    {
      label: "Typescript",
      value: faT,
    },
    {
      label: "CSS",
      value: faCss3Alt,
    },
    {
      label: "Express JS",
      value: faJsSquare,
    },
    {
      label: "Mongoose",
      value: faServer,
    },
    {
      label: "MongoDB",
      value: faCloud,
    },
    // {
    //   label: "Nuxt JS",
    //   value: faBrowser,
    // },
  ];

  // onLoad();
  return (
    <Fragment>
      <div className="mx-5 md:mx-15 lg:mx-20">
        <Header />

        <div className="flex rounded-xl justify-around p-6 mt-6">
          <FontAwesomeIcon icon={faGithub} className="h-[60px]" />
          <FontAwesomeIcon icon={faFilePdf} className="h-[60px]" />
          <FontAwesomeIcon icon={faMedium} className="h-[60px]" />
          <FontAwesomeIcon icon={faLinkedin} className="h-[60px]" />
        </div>
      </div>

      <div className="bg-primary mt-10 flex">
        <div>
          <h2>Skillset</h2>
          <hr className="text-gray border-b w-3 h-1" />
        </div>
        <IconGrid icons={icons} />
      </div>

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

        <div className={styles.flex} id="workWithMe">
          <a href="https://www.upwork.com/en-gb/freelancers/~01a96055abeb6a11f5">
            <img
              className={styles.upwork_logo}
              src={upwork}
              alt="upwork logo"
            />
          </a>

          <a href="https://www.peopleperhour.com/freelancer/evie-perren-skilled-front-end-software-zaaawzjn">
            <img
              className={styles.peopleperhour}
              src={peopleperhour}
              alt="peopleperhour logo"
            />
          </a>

          <a href="https://www.fiverr.com/evieperren">
            <img className={styles.fiverr} src={fiverr} alt="fiverr logo" />
          </a>

          <a href="https://www.freelancer.com/u/EvieButland">
            <img
              className={styles.freelancer}
              src={freelancer}
              alt="Freelancer logo"
            />
          </a>
        </div>

        <CardWrapper></CardWrapper>
        <Timeline />
        <div className={styles.cv}>
          <a href={PDF} target="_blank" rel="noopener noreferrer">
            View PDF CV
          </a>
        </div>
        <WorkingExperience></WorkingExperience>
      </section>
      <Footer />
    </Fragment>
  );
};
