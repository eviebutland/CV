import me from "../../assets/svg/me.svg";

export const Header = () => {
  const yearsExperience = new Date().getFullYear() - 2019;

  return (
    <section className="flex flex-col-reverse md:flex-row  md:my-20 md:justify-center items-center">
      <div className="mt-10 md:mt-0 text-center md:text-left">
        <h1>Hi, I'm Evie</h1>
        <p className="headline-1 max-w-[700px] !p-0">
          Front-End Software Engineer
        </p>
        <p className="mt-10 max-w-[700px] pr-3">
          A results-oriented Front End Developer with over {yearsExperience}{" "}
          years of experience, specialising in building unique SaaS products for
          early-stage startups.
          <br />
          <br />
          I'm a product-minded problem-solver, consistently delivering customer
          focused solutions that has led to an increase of usage and positive
          interactions with our software - most recently by reducing load time
          on our main dashboard from 6 seconds to under 2 seconds.
          <br />
          <br />
          I'm eager to join a dynamic team where I can drive personal and
          professional growth, offering the freedom to contribute fresh ideas
          and making a significant contribution within a collaborative team.
        </p>
      </div>
      <img src={me} alt="me" className="w-[150px] md:w-[300px] lg:w-auto" />
    </section>
  );
};
