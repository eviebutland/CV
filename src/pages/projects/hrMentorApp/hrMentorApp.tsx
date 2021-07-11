import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Back } from "../../../components/back/back"
import { Footer } from "../../../components/footer/footer"
import { Wireframes } from "../../../components/wireframes/wireframes"
import home from "../../../assets/images/mentor-home.png"
import resources from "../../../assets/images/mentor-resources.png"
import register from "../../../assets/images/mentor-register.png"
import search from "../../../assets/images/mentor-search.png"
import swaggerAPIDoc from "../../../assets/images/swagger-api-doc.png"
import styles from "./hrMentorApp.module.scss"

export const HrMentorApp = () => {
  const imageArray = [
    {image: home, alt: "Mentor app home page"},
    {image: register, alt: "Mentor app register page"},
    {image: resources, alt: "Mentor app resources page"},
    {image: search, alt: "Mentor search page"}
  ]
  return (
    <main>
      <Back/>
      <Subheader 
        title="HR Mentor App" 
        tags={['Responsive design', 'Front end development', 'Express JS', 'Accessibility', 'React', 'MongoDB', 'Stakeholder management', 'Working to expectations']}>
        <p>The HR mentor app is an internal system used by staff at Simplyhealth. The system allows staff to register to become a mentor, find a mentor as well as learn more about being a 'mentee' and a mentor. As a part of my apprenticeship, myself and two other apprentice developers gathered requirements from stakeholders within the business, collated the information to build a wireframe and converted this into working code.</p></Subheader>
      <Colours colours={['#00cea4', '#99EBDA', '#2d13b6', '#5742C5', '#F2F4F8', '#0d2835']}/>
      <Wireframes imageArray={imageArray} title="Live site">
        <p>The HR mentor app was built using create-react-app. Keeping with the Simplyhealth branding, we made use of the brand colours, font and iconograghy. Each page has designed to be simple and easy to use. The stakeholders initally wanted to purchase a system similar to this from a third party. However, we were able to create a professional platform that allowed staff to connect at a signficantly reduced cost. <br/><br/>
        Due to the platform being internal, it is only accessible by Simplyhealth staff.</p>
      </Wireframes>
      <section className={styles.card}>
        <h2>API</h2>
        <img src={swaggerAPIDoc} alt="swagger api documentation"/>
        <p>It makes use of API'a built using Express JS to connect to a MongoDB database. The API is called using AXIOS on the search and register pages.</p>

      </section>
      <Footer></Footer>
    </main>
  )
}