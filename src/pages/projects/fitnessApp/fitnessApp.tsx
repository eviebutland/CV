import { Subheader } from "../../../components/subheader/subheader";
import { Back } from "../../../components/back/back";
import { Footer } from "../../../components/footer/footer";
import { Wireframes } from "../../../components/wireframes/wireframes";
import fitnessImage1 from "../../../assets/images/fitness1.png";
import fitnessImage2 from "../../../assets/images/fitness2.png";
import fitnessImage3 from "../../../assets/images/fitness3.png";

const FitnessApp = () => {
  const imageArray = [
    { image: fitnessImage1, alt: "Fitness app code" },
    { image: fitnessImage2, alt: "Fitness app code" },
    { image: fitnessImage3, alt: "Fitness app code" },
  ];

  return (
    <main>
      <Back />
      <Subheader
        title="Fitness App"
        tags={[
          "Backend development",
          "PostgreSQL",
          "OAuth",
          "Express JS",
          "Typescript",
          "ACID Transactions",
          "Learning",
          "node-postgres",
        ]}
      >
        <p>
          I am building a fitness app in order to fit my needs for daily
          workouts. It will be a personalised experience that provides daily
          workouts based on the user's preferences. I currently pay for a
          similar product and would like to replace the need for that by
          building my own version which contains features I feel is missing. It
          uses CRUD statements to provide functionality around retrieving, edit,
          creating and deleting (archiving) data. Written in Typescript, I was
          able to experiment with Postgres as I have only worked with document
          databases before. I am also going to be using OAuth for authenication
          and an email service provider to send daily notifications.
          <a href="https://github.com/eviebutland/fitness-app">
            Access to the repo is here
          </a>
        </p>
      </Subheader>
      <Wireframes imageArray={imageArray} title="Postman and codebase">
        <div>
          <p>
            So far I have a table for Users, Exercises, Workouts and
            Authentication. Workouts use a join to build each workout from an
            exercise, these will be sent out on the day of the week that matches
            the user's preferences.
          </p>
          <p>
            I am still in the early phases of developing this product and aim to
            complete by May 2023
          </p>
        </div>
      </Wireframes>
      <Footer></Footer>
    </main>
  );
};
export default FitnessApp;
