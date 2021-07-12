import { Card } from "../card/card"
import styles from './cardOfThree.module.scss'
import orangeThumnail from "../../assets/images/orange-thumnail.png"
import hrMentorAppThumbnail from "../../assets/images/mentor-thumbnail.png"
import p2pThumbnail from "../../assets/images/p2p-thumbnail.png"
import { projects } from "../../projects/projects"
import { Link } from "react-router-dom"
import "../../assets/scss/main.scss"

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
              <div className={styles.button_container}>
                <Link to={projects.orange.internalLink} className="button full">View project</Link>
              </div>
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
              <div className={styles.button_container}>
                <Link to={projects.hr.internalLink} className="button full">View project</Link>
              </div>
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
              <div className={styles.button_container}>
                <Link to={projects.path.internalLink} className="button full">View project</Link>
              </div>
          </div>
        </li>
      </ul>
    </section>
  )
}