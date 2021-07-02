import { Fragment } from "react"
import { Header } from "../components/header/header"
import { CardOfThree } from "../components/cardOfThree/cardOfThree"
import { Timeline } from "../components/timeline/timeline"
import { Card } from "../components/card/card"
import { Footer } from "../components/footer/footer"

export const Home = () => {
  return (
    <Fragment>
      <Header/>
      <section>
        <Card title="About me" image="" altText="" content="About me content here" type="Card" imagePosition="Left"/>
        <Card title="My hobbies and interests" image="" altText="" content="React native, figma" type="Card" imagePosition="Right" id="#hobbiesAndInterests"/>
      </section>
      <CardOfThree></CardOfThree>
      <Timeline/>
      <Footer/>
    </Fragment>
  )
}