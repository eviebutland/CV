import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Back } from "../../../components/back/back"
import { Footer } from "../../../components/footer/footer"
import { Wireframes } from "../../../components/wireframes/wireframes"
import levels from "../../../assets/images/p2p-levels.png"
import details from "../../../assets/images/p2p-details.png"
import payment from "../../../assets/images/p2p-payment.png"
import check from "../../../assets/images/p2p-check.png"
import confirmation from "../../../assets/images/p2p-confirmation.png"
import lighthouse from "../../../assets/images/lighthouse.png"
import styles from "./pathToPurchase.module.scss"

export const PathToPurchase = () => {
  const imageArray = [
    {image: levels, alt: "Levels page"},
    {image: details, alt: "Details page"},
    {image: payment, alt: "Payment page"},
    {image: check, alt: "Check page"},
    {image: confirmation, alt: "Confirmation page"},
  ]
  return (
    <main>
      <Back/>
      <Subheader 
        title="Path To Purchase " 
        tags={['Responsive design', 'Front end development', 'API', 'Accessibility', 'React', 'SEO focus', 'Team work']}>
        Path to Purchase 2.0 is a React app designed to replace a lecacy checkout journey within Simplyhealth. This checkout contains 5 steps to allow corporate clients to purchase a product via Simplyhealth. The React app is brand washed to represent nine different clients, with their logo, plan details and contact number differing between. I worked with two senior developers to complete tasks in fornightly sprints. My tasks varied from storing values to state using useReducer Hooks to ensuring we meant a high quality of work in peer reviews - with a focus on Accessibility.
      </Subheader>
      <Colours colours={['#00E6B8', '#80F3DC', '#F9E48F', '#F6BCBC', '#0d2834', ]}/>
      <Wireframes imageArray={imageArray} title="Live site"></Wireframes>
      <section>
        <p>Above show the screenshots from the live website. The designs were created by my collegues and collaborated on via Invision.</p>
        <p>In order to build this project within the expected time scale, we as a team use agile. This allowed us to plan increments of work we would be able to complete within our sprint length. Before each sprint we allowed for planning time, within this meeting we as a group would estimate tasks using story points. </p>
        <p>During this project, I was able to enhance my React knowledge and share my skills with the developers in the team. One area I grew most in was understanding a redux style state management. In order to develop my understanding, I researched the concept on React's documentation. </p>
      </section>
      <section className={styles.card}>
        <h2>Accessibily focus</h2>
        <img src={lighthouse} alt="Lighthouse report"/>
        <p>Above shows the Lighthouse report after running the path to purchase pages though this tool. Lighthouse is a chrome dev tools feature that scans a web page and produces a report based on the 4 catagories:
        </p>
        <ul>
          <li>Performance</li>
          <li>Accessibility</li>
          <li>Best practices</li>
          <li>SEO</li>
        </ul>
        <p>This tool not only produces this report but also shows you how you can improve. This can range from using smaller image files, reducing the number of scripts being used to ensuring all non decreative images contain alternative text and pages all start with a clear title within a H1 tag.</p>
        <p>I took the inciative to build this report and continuously improve our score in order to have this new checkout exceed stakeholder expectations</p>
      </section>
      <Footer></Footer>
    </main>
  )
}