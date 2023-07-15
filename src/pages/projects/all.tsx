import { Link } from 'react-router-dom';
import { projects } from '../../pages/projects/projects';

const allProjects = () => {
  return (
    <div className="flex flex-col justify-center m-10">
      <h1 className="text-center">Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-14 items-center max-w-[1000px] m-auto">
        {projects.map((project) => (
          <li className="block">
            <Link
              to={project.internalLink}
              className="flex justify-center flex-col items-center"
            >
              <img
                src={project.image}
                className="w-1/2 rounded-lg"
                alt={project.name}
              />
              <h2 className="headline-4">{project.name}</h2>
              <p>{project.detail}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default allProjects;
