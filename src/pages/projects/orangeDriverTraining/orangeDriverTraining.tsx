import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Back } from "../../../components/back/back"
import { Wireframes } from "../../../components/wireframes/wireframes"
import homePage from "../../../assets/images/home-page.png"
import drivingInstructorPage from "../../../assets/images/driving-instructor.png"
import covidPage from "../../../assets/images/covid-page.png"
import mobileApp from "../../../assets/images/mobile-app.png"
import FAQ from "../../../assets/images/faq.png"
import _404 from "../../../assets/images/404-page.png"
import beforeHome from "../../../assets/images/before-home.png"
import beforeDrivingTest from "../../../assets/images/before-driving-test.png"
import beforeContact from "../../../assets/images/before-contact.png"
import beforeInstructors from "../../../assets/images/before-instructors.png"
import beforeTestimonials from "../../../assets/images/before-testimonials.png"
import beforeBlog from "../../../assets/images/before-blog.png"
import { Footer } from "../../../components/footer/footer"
import styles from "./orangeDriverTraining.module.scss"

const OrangeDriverTraining = () => {
  const afterImages = [
    {image: homePage, alt: "Home page"},
    {image: drivingInstructorPage, alt: "Driving instructor page"}, 
    {image: mobileApp, alt: "Mobile app page"},
    {image: covidPage, alt: "Covid page"},
    {image: FAQ, alt: "FAQ page"},
    {image: _404, alt: "404 page"}
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
        tags={['Responsive design', 'Front end development', 'CMS integration', 'Accessibility', 'Next JS', 'Prismic', 'Figma', 'SCSS Modules',]}>
        <p>Orange Driver Training is a driving instructor's website. Tracey, the owner wanted a new fresh design to represent her company. She wanted a design that was modern, fun, uplifting, informative, professional. The website was already built in NextJS, connecting to the Headless CMS <a href="https://prismic.io/">Prismic </a>. In order to fulfil the new seamless look and feel of her website, new components were created using Prismic API, NextJS and SCSS modules.</p>
      </Subheader>
      <Wireframes title="Before redesign" imageArray={beforeImages}></Wireframes>
      <div className={styles.card}>
        <h3>Dicussion with stakeholder</h3>
        <p>The information architecture of the site was also reviewed. Orange Driver Training website should be informative and help users to getting in contact with Tracey in order to book a lesson. Tracey and I discussed the layout of the home page, I felt it was important to allow users to contact her directly from the home page. Therefore, the button within the banner contains a link to the contact form lower on the page.</p>
        <p>I dicussed the use of blogs within Tracey's site. Blogs, if relevant and regularly uploaded can improve SEO. However, they were not regulary uploaded and gave a negative tone to driving so we decided to remove them. To add, we refined the content in order for her users to find out the information faster.</p>
      </div>
      <Colours colours={['#fcbf49', '#D62828', '#E85D04', '#192F7C', '#03071E']}/>
      <Wireframes title="After redesign" imageArray={afterImages}></Wireframes>
      <div className={styles.card}>
        <h3>Preparing for release</h3>
        <p>I am currently working through the wireframes to build the new design for Tracey. I have followed best practices in regards to DRY, Accessibility and SEO. The website's new design will be released by September 2020.</p>
      </div>
      <Footer></Footer>
    </main>
  )
}
export default OrangeDriverTraining