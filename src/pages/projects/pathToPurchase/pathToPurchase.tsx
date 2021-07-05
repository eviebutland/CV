import { Subheader } from "../../../components/subheader/subheader"
import { Colours } from "../../../components/colours/colours"
import { Card } from "../../../components/card/card"
import { Back } from "../../../components/back/back"
import { Footer } from "../../../components/footer/footer"

export const PathToPurchase = () => {
  return (
    <main>
      <Back/>
      <Subheader 
        title="Path To Purchase " 
        tags={['Responsive design', 'Front end development', 'API', 'Accessibility', 'React', 'SEO focus']}>
        This is the detail about the title
      </Subheader>
      <Colours colours={['white', 'red']}/>
      <Card 
        title="Step one: Levels" 
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the home page..."></Card>
      <Card 
        title="Step two: Details" 
        imagePosition="Right" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the Driving instructor course page..."></Card>
      <Card 
        title="Step Three: Payment"
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the mobile app page..."></Card>
      <Card 
        title="Step Four: Check details" 
        imagePosition="Right" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the FAQ page..."></Card>
      <Card 
        title="Step Five: Confirmation" 
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the Contact us page..."></Card>
        <Footer></Footer>
    </main>
  )
}