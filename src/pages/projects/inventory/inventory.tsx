import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Back } from "../../../components/back/back"
import { Footer } from "../../../components/footer/footer"
import styles from "./inventory.module.scss"

const InventoryPlatform = () => {
  return (
    <main>
      <Back/>
      <Subheader 
        title="Inventory platform" 
        tags={['SASS platform', 'Front end development', 'RavenDB', 'Cache', 'Vue', 'Nuxt', 'Stakeholder management']}>
        <p>The inventory platform is a SASS product offered by my current company to allow intuitive inventory management for users around the world. This project was built using Vue, Tailwind and Ravendb and more.</p>
        </Subheader>
      <Colours colours={['#374151', '#FFFFFF', '#facc33', '#e5e7eb', '#3b46dd', '#059669']}/>
        <div className={styles.card}>
          <p>The platform was built as a Nuxt module as shared a code base with a live product (Logistics platform) with active users. I worked between teams of Front and Backend developers as well as closely with designers to achieve this product, delivered to our first client in December 2022. 
            I took on the task of integrating the newly built API's to the frontend singlehandly, which required strong communication skills and setting expectations for the team. I also worked closely with the frontend team to deliver key functionality to the highest standard. </p>
        </div>
      <section className={styles.card}>
        <p>This platform connected to a RavenDB (document) database via Hapi and AWS integrations. It also uses OpenAPI backend to allow for endpoint, request and response validation. I was keen to work closer on this side of the product so spent time outside of work learning these softwares. This led me to create <a href="/movie-library">Movie Library</a></p>
      </section>
      <Footer></Footer>
    </main>
  )
}
export default InventoryPlatform