export const Timeline = () => {
  const yearsExperience = new Date().getFullYear() - 2019;

  return (
    <div
      className="my-16 px-[20px] md:my-24 md:flex md:items-center"
      id="about"
    >
      <div className="pr-6">
        <h2 className="feature text-center">
          2018
          <br className="hidden md:block" />
          <span className="inline-block md:hidden">-</span>
          {new Date().getFullYear()}
        </h2>
      </div>
      <div>
        <p>
          Since 2018, I have been building my skills in my free time as well as
          working full time as a developer. I orginally started to learn via
          YouTube, recreating their examples with my own touch.
        </p>
        <br />
        <p>
          In 2019, I started an apprenticeship with FireBrand, recieving a Level
          4 Software Developer accreditation. This allowed me to dedicate my
          full attention to learning as well as getting hands-on-experience.
        </p>
        <br />

        <p>
          I enjoy the challenge of building a product from the ground up, in a
          fast paced startup environment. It has allowed me to grow as a product
          developer, wearing multiple hats at once.
        </p>
        <br />

        <p>
          In 2023, I moved my life to Australia and was fortunate enough to
          remain with Hectare, based in the UK. This opportunity gave me the
          opportunity to see the world as well as build strong communication
          skills with my team. This was a pivotal time for my personal
          development & growth as a developer.
        </p>
        <br />
        <p>
          With {yearsExperience} years of working experience, I have learnt
          build maintainable features to complex challenges to a high quality,
          following best practices and delivering within the required deadline.
        </p>
      </div>
    </div>
  );
};
