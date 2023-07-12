import me from "../../assets/svg/me.svg";

export const Header = () => {
  const yearsExperience = new Date().getFullYear() - 2019;

  return (
    <section className="flex flex-col-reverse md:flex-row m-10 md:m-20 md:justify-center items-center">
      <div className="mt-10 md:mt-0 text-center md:text-left">
        <h1 className=" md:mb-2 lg:mb-10">Hi, I'm Evie</h1>
        <h1 className="max-w-[700px]">Front-End Software Engineer</h1>
        <p className="mt-10">
          Over {yearsExperience} years experience working with Front-end
          technologies
        </p>
      </div>
      <img src={me} alt="me" className="w-[150px] md:w-[300px] lg:w-auto" />
    </section>
  );
};
