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
          A self-taught developer with a passion for problem solving & over{" "}
          {yearsExperience} years experience in Front End Development, primarily
          working in building unique SASS products for early stage startups.
          Currently working at an Hospitality Marketing SAAS start-up, building
          a platform to help restaurants grow their business.
        </p>
      </div>
      <img src={me} alt="me" className="w-[150px] md:w-[300px] lg:w-auto" />
    </section>
  );
};
