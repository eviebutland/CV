import { Card } from "../card/card"
import styles from './cardOfThree.module.scss'
import orangeThumnail from "../../assets/images/orange-thumnail.png"
import hrMentorAppThumbnail from "../../assets/images/mentor-thumbnail.png"
import p2pThumbnail from "../../assets/images/p2p-thumbnail.png"

import { Button } from "../button/button"

export const CardOfThree = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <ul>
        <li>
          <div className={styles.item}>
            <Card 
              title="Orange driver training" 
              image={orangeThumnail} 
              altText="Orange driver training" 
              content="Orange driver training is a driving instructor website going through a redesign. Built in Next.js, using SCSS modules. Tracey, the owner, was looking for a fresh design that would make her website look professional, clean, easy to navigate and stand out from the rest." 
              type="Project"
              imageOnHover=""></Card>
              <Button text="View project" onClick={() => console.log('go to new page')} style="full" location="/orange-driver-training"></Button>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <Card 
              title="HR Mentor App" 
              image={hrMentorAppThumbnail} 
              altText="HR Mentor app thumbnail" 
              content="The HR mentor app was an internal project within my current company. This project was built using React, SCSS modules and express JS to connect to a Mongo DB using a REST API. The stakeholders wanted a platform to allow staff to sign up, or be find a mentor within the company." 
              type="Project"
              imageOnHover=""></Card>
              <Button text="View project" onClick={() => console.log('go to new page')} style="full" location="/hr-mentor-app"></Button>
          </div>
        </li>
        <li>
          <div className={styles.item}>
            <Card 
              title="Path to Purchase" 
              image={p2pThumbnail} 
              altText="Orange driver training" 
              content="This was a React app built within my current company, i worked in a team with 2 senior developers" 
              type="Project"
              imageOnHover=""></Card>
              <Button text="View project" onClick={() => console.log('go to new page')} style="full" location="/path-to-purchase"></Button>
          </div>
        </li>
      </ul>
    </section>
  )
}