import { experience } from "./experience";
export const WorkingExperience = () => {
  return (
    <section id="working-experience" className="mt-12 lg:mt-[100px]">
      <h2 className="text-center mt-20 mb-10">Working Experience</h2>
      <ul className="m-0 p-0">
        {experience.map((val) => (
          <li className="list-none align-baseline border-y border-white p-6 lg:flex hover:bg-primary hover:border-y hover:border-white">
            <div className="max-w-[270px] w-full  flex-1">
              <h3 className="mr-4">{val.company}</h3>
              <p>{val.workingPeriod}</p>
            </div>
            <div className="flex-1 lg:pl-6 lg:border-l lg:border-black">
              <h3>{val.role}</h3>
              <p>{val.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
