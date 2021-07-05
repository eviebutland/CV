import { Subheader } from "../../../components/subheader/subheader"
import { List } from "../../../components/list/list"
import { Colours } from "../../../components/colours/colours"
import { Card } from "../../../components/card/card"
import { Back } from "../../../components/back/back"

export const OrangeDriverTraining = () => {
  return (
    <main>
      <Back/>
      <Subheader 
        title="Orange Driver training" 
        tags={['Responsive design', 'Front end development', 'CMS integration', 'Accessibility']}>
        This is the detail about the title
      </Subheader>
      <hr aria-hidden="true"/>
      <List 
        title="Brief" 
        tags={['Clean', 'Professional']} 
        useHash={false}></List>
      <hr aria-hidden="true"/>
      <Colours colours={['white', 'red']}/>
      <Card 
        title="Home page" 
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the home page..."></Card>
      <Card 
        title="Driving instructor course page" 
        imagePosition="Right" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the Driving instructor course page..."></Card>
      <Card 
        title="Mobile app page" 
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the mobile app page..."></Card>
      <Card 
        title="FAQ page" 
        imagePosition="Right" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the FAQ page..."></Card>
      <Card 
        title="Contact us page" 
        imagePosition="Left" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the Contact us page..."></Card>
      <Card 
        title="404 page" 
        imagePosition="Right" 
        image=""
        altText="Home page"
        type="Card"
        glassmorphic={false}
        content="This is the 404 page..."></Card>
    </main>
  )
}