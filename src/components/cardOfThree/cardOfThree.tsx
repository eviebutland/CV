import { Card } from "../card/card"
import styles from './cardOfThree.module.scss'
import orangeThumnail from "../../assets/images/orange-thumnail.png"
import hrMentorAppThumbnail from "../../assets/images/mentor-thumbnail.png"
import p2pThumbnail from "../../assets/images/p2p-thumbnail.png"
import { projects } from "../../projects/projects"
import { Button } from "../button/button"

export const CardOfThree = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <ul>
        <li>
          <div className={styles.item}>
            <Card 
              title={projects.orange.name}  
              image={orangeThumnail} 
              altText={projects.orange.name} 
              content={projects.orange.detail} 
              type="Project"
              imageOnHover=""></Card>
              <Button text="View project" design="full" location={`/${projects.orange.internalLink}`}></Button>
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
              imageOnHover=""></Card>
              <Button text="View project" design="full" location={`/${projects.hr.internalLink}`}></Button>
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
              imageOnHover=""></Card>
              <Button text="View project" onClick={() => console.log('go to new page')} design="full" location={`/${projects.path.internalLink}`}></Button>
          </div>
        </li>
      </ul>
    </section>
  )
}