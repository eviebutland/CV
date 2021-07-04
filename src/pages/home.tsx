import { Fragment } from "react"
import { Header } from "../components/header/header"
import { CardOfThree } from "../components/cardOfThree/cardOfThree"
import { Timeline } from "../components/timeline/timeline"
import { Card } from "../components/card/card"
import { Footer } from "../components/footer/footer"
import bitemoji from "../assets/about-me-bitemoji.png"
import bitemojiHobbies from "../assets/hobbies.png"

export const Home = () => {
  return (
    <Fragment>
      <Header/>
      <section>
        <Card 
          title="About me" 
          image={bitemoji}
          altText="Bitemoji of me" 
          content="About me content here" 
          type="Card" 
          imagePosition="Left"
          glassmorphic={false}/>
        <Card 
          title="My hobbies and interests" 
          image={bitemojiHobbies} 
          altText="Hobbies and interests bitemoji" 
          content="React native, figma" 
          type="Card" 
          imagePosition="Right" 
          id="#hobbiesAndInterests"
          glassmorphic={false}/>
      </section>
      <CardOfThree></CardOfThree>
      <Timeline/>
      <Footer/>
    </Fragment>
  )
}