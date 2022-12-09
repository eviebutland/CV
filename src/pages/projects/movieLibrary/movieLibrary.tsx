import { Subheader } from "../../../components/subheader/subheader";
import { Back } from "../../../components/back/back";
import { Footer } from "../../../components/footer/footer";
import styles from "./movieLibrary.module.scss";
import { Wireframes } from "../../../components/wireframes/wireframes";
import movieImage1 from "../../../assets/images/movielib1.png";
import movieImage2 from "../../../assets/images/movielib2.png";
import movieImage3 from "../../../assets/images/movielib3.png";
import movieImage4 from "../../../assets/images/movielib4.png";

const MovieLibrary = () => {
  const imageArray = [
    { image: movieImage1, alt: "Movie library code" },
    { image: movieImage2, alt: "Movie library code" },
    { image: movieImage3, alt: "Movie library code" },
    { image: movieImage4, alt: "Movie library code" },
  ];

  return (
    <main>
      <Back />
      <Subheader
        title="Movie Library"
        tags={[
          "Backend development",
          "MongoDB",
          "JWT authentication",
          "OpenAPIBackend",
          "Typescript",
          "Fastify",
          "Learning",
        ]}
      >
        <p>
          Movie library is an open API created to enhance my understanding of
          the tech stack used in my current workplace. It uses CRUD to provide
          functionality around retrieving, edit, creating and deleting
          (archiving) data. Written in Typescript, I was able to experiment with
          Fastify and wrote about my findings and each decision within the
          README of the{" "}
          <a href="https://github.com/eviebutland/movie-library">repo</a>
        </p>
      </Subheader>
      <Wireframes imageArray={imageArray} title="Postman and codebase">
        <div className={styles.card}>
          <p>
            I used this project as a base point for experimenting, it allowed me
            to build on existing knowledge (mongoDB) and learn about new
            technologies (fastify, JWT, OpenAPIBackend). I enjoyed working on
            this project as I am also a movie buff, which kept me motivated to
            finish this to completion. Since completing this, I have started
            working on a new more advanced project which will include daily
            notifications with a personalised experience,{" "}
            <a href="/fitness-app">Fitness app</a>
          </p>
        </div>
      </Wireframes>
      <Footer></Footer>
    </main>
  );
};
export default MovieLibrary;
