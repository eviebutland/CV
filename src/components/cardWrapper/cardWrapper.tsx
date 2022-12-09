import { Card } from "../card/card";
import styles from "./cardWrapper.module.scss";
import orangeThumnail from "../../assets/images/orange-thumnail.png";
import hrMentorAppThumbnail from "../../assets/images/mentor-thumbnail.png";
import inventoryThumbnail from "../../assets/images/inventory.png";
import movieThumbnail from "../../assets/images/movielib1.png";
import fitnessThumbnail from "../../assets/images/movielib2.png";
import p2pThumbnail from "../../assets/images/p2p-thumbnail.png";
import { projects } from "../../projects/projects";
import "../../assets/scss/main.scss";

export const CardWrapper = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <ul>
        <div className={styles.wrap}>
          <li>
            <div className={styles.item}>
              <Card
                title={projects.fitnessApp.name}
                image={fitnessThumbnail}
                altText={projects.fitnessApp.name}
                content={projects.fitnessApp.detail}
                type="Project"
                link={projects.fitnessApp.internalLink}
                imageOnHover=""
              ></Card>
            </div>
          </li>

          <li>
            <div className={styles.item}>
              <Card
                title={projects.movieLibrary.name}
                image={movieThumbnail}
                altText={projects.movieLibrary.name}
                content={projects.movieLibrary.detail}
                type="Project"
                imageOnHover=""
                link={projects.movieLibrary.internalLink}
              ></Card>
            </div>
          </li>

          <li>
            <div className={styles.item}>
              <Card
                title={projects.inventory.name}
                image={inventoryThumbnail}
                altText={projects.inventory.name}
                content={projects.inventory.detail}
                type="Project"
                imageOnHover=""
                link={projects.inventory.internalLink}
              ></Card>
            </div>
          </li>
        </div>

        <div className={styles.wrap}>
          <li>
            <div className={styles.item}>
              <Card
                title={projects.orange.name}
                image={orangeThumnail}
                altText={projects.orange.name}
                content={projects.orange.detail}
                type="Project"
                imageOnHover=""
                link={projects.orange.internalLink}
              ></Card>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <Card
                title={projects.hr.name}
                image={hrMentorAppThumbnail}
                altText={projects.hr.name}
                content={projects.hr.detail}
                type="Project"
                imageOnHover=""
                link={projects.hr.internalLink}
              ></Card>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <Card
                title={projects.path.name}
                image={p2pThumbnail}
                altText={projects.path.name}
                content={projects.path.detail}
                type="Project"
                imageOnHover=""
                link={projects.path.internalLink}
              ></Card>
            </div>
          </li>
        </div>
      </ul>
    </section>
  );
};
