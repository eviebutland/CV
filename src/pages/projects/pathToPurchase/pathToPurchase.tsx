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
        tags={['Responsive design', 'Front end development', 'API', 'Accessibility', 'React', 'SEO focus']}>
        This is the detail about the title
      </Subheader>
      <Colours colours={['#00E6B8', '#80F3DC', '#F9E48F', '#F6BCBC', '#0d2834', ]}/>
      <Wireframes imageArray={imageArray} title="Live site"></Wireframes>
      <section className={styles.card}>
        <h2>Accessibily focus</h2>
        <img src={lighthouse} alt="Lighthouse report"/>
        <p>light house report , list how we made i to 100%</p>
      </section>
      <Footer></Footer>
    </main>
  )
}