import { Card } from "../card/card"
import styles from './cardOfThree.module.scss'

export const CardOfThree = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <ul>
        <li>
          <Card 
            title="card one" 
            image="" 
            altText="project 1" 
            content="this is my project one" 
            type="Project"
            glassmorphic={true}></Card>
        </li>
        <li>
          <Card 
            title="card one"
            image="" 
            altText="project 1" 
            content="this is my project one" 
            type="Project"
            glassmorphic={true}></Card>
        </li>
        <li>
          <Card 
            title="card one" 
            image="" 
            altText="project 1" 
            content="this is my project one" 
            type="Project"
            glassmorphic={true}></Card>
        </li>
      </ul>
    </section>
  )
}