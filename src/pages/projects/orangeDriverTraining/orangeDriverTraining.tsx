import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Back } from "../../../components/back/back"
import { Wireframes } from "../../../components/wireframes/wireframes"
import homePage from "../../../assets/images/home-page.png"
import drivingInstructorPage from "../../../assets/images/driving-instructor.png"
import covidPage from "../../../assets/images/covid-page.png"
import mobileApp from "../../../assets/images/mobile-app.png"
import FAQ from "../../../assets/images/faq.png"
import beforeHome from "../../../assets/images/before-home.png"
import beforeDrivingTest from "../../../assets/images/before-driving-test.png"
import beforeContact from "../../../assets/images/before-contact.png"
import beforeInstructors from "../../../assets/images/before-instructors.png"
import beforeTestimonials from "../../../assets/images/before-testimonials.png"
import beforeBlog from "../../../assets/images/before-blog.png"
import { Footer } from "../../../components/footer/footer"

export const OrangeDriverTraining = () => {
  const afterImages = [
    {image: homePage, alt: "Home page"},
    {image: drivingInstructorPage, alt: "Driving instructor page"}, 
    {image: covidPage, alt: "Covid page"},
    {image: mobileApp, alt: "Mobile app page"},
    {image: FAQ, alt: "FAQ page"}
  ]

  const beforeImages = [
    {image: beforeHome, alt: "Before Home page"},
    {image: beforeDrivingTest, alt: "Before driving test page"},
    {image: beforeContact, alt: "Before contact page"},
    {image: beforeInstructors, alt: "Before driving instructors page"},
    {image: beforeTestimonials, alt: "Before testimonials page"},
    {image: beforeBlog, alt: "Before blog page"},
  ]
  return (
    <main>
      <Back/>
      <Subheader 
        title="Orange Driver training" 
        tags={['Responsive design', 'Front end development', 'CMS integration', 'Accessibility', 'Next JS', 'Prismic']}>
        This is the detail about the title
      </Subheader>
      <Colours colours={['#fcbf49', '#d62828', '#666', '#e30000', '#03071e']}/>
      <Wireframes title="Before" imageArray={beforeImages}></Wireframes>
      <div>
        <h3>Dicussion with stakeholder</h3>
        <p>we had a call to run through the site...</p>
      </div>
      <Wireframes title="After" imageArray={afterImages}></Wireframes>
      <div>
        <h3>Dicussion with stakeholder</h3>
        <p>we had a call to run through the site...</p>
      </div>
      <Footer></Footer>
    </main>
  )
}