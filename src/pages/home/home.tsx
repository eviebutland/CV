import { Fragment } from 'react';
import { Header } from '../../components/header/header';
import { Timeline } from '../../components/timeline/timeline';

import { Footer } from '../../components/footer/footer';
import { WorkingExperience } from '../../components/workingExperience/workingExperience';
import PDF from '../../assets/PDF/Evie_Perren.pdf';
import upwork from '../../assets/images/upwork.png';
import peopleperhour from '../../assets/images/peopleperhour.png';
import fiverr from '../../assets/images/Fiverr-Logo.png';
import freelancer from '../../assets/images/freelancer.jpeg';
// import { fetchMediumArtices } from '../../service/medium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import { icons } from './icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { IconGrid } from '../../components/IconGrid';

import { Tooltip } from '../../components/tooltip/tooltip';
export const Home = () => {
  // const [articles, setArticles] = useState([]);

  // async function onLoad() {
  //   if (articles.length < 1) {
  //     const fetched = await fetchMediumArtices();
  //     setArticles(fetched);
  //   }
  // }

  // onLoad();
  return (
    <Fragment>
      <div className="mx-5 md:mx-15 lg:mx-20">
        <Header />

        <div className="flex rounded-xl justify-around p-6 mt-6">
          <Tooltip label="Github">
            <a
              href="https://github.com/eviebutland"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="h-[40px] lg:h-[60px]"
              />
            </a>
          </Tooltip>
          <Tooltip label="CV">
            <a href={PDF} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="h-[40px] lg:h-[60px]"
              />
            </a>
          </Tooltip>

          <Tooltip label="Medium">
            <a
              href="https://medium.com/@evie.butland"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faMedium}
                className="h-[40px] lg:h-[60px]"
              />
            </a>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/evie-butland-432a33170/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="h-[40px] lg:h-[60px]"
              />
            </a>
          </Tooltip>
        </div>
      </div>

      <div className="bg-primary mt-[50px] lg:mt-[100px] px-[20px] py-12 lg:p-[100px]">
        <div className="max-w-[1250px] m-auto flex-col-reverse lg:flex-row flex justify-between">
          <div className="">
            <div className="pt-10 lg:pt-0">
              <h2 className="headline-1 text-center md:text-left">Skillset</h2>
              <hr className="border-gray-800 hidden lg:block border-b w-[20%] mt-2" />
            </div>
            <p className=" lg:pb-0 lg:max-w-[80%] mt-10">
              As a self-taught developer, I built my knowledge in my free-time
              on tech stacks that interest me and have been used within my
              roles.
              <br />
              <br />I continue to learn everyday & enjoy staying up to date with
              the latest tech. I also write about these on{' '}
              <a
                href="https://medium.com/@evie.butland"
                target="_blank"
                rel="noreferrer"
                className=" underline"
              >
                Medium
              </a>
              .
            </p>
          </div>
          <div className="w-full flex justify-center">
            <IconGrid icons={icons} />
          </div>
        </div>
      </div>

      <section className="max-w-[1250px] md:mx-[100px] lg:mx-auto  mb-10 md:mb-30">
        <Timeline />

        <div
          className="flex space-y-4 py-20 md:space-y-0 md:space-x-5 lg:space-x-10 flex-col md:flex-row md:px-[100px] justify-center items-center md:items-baseline mb-30"
          id="workWithMe"
        >
          <a href="https://www.upwork.com/en-gb/freelancers/~01a96055abeb6a11f5">
            <img
              className="h-8 md:h-12 lg:h-14"
              src={upwork}
              alt="upwork logo"
            />
          </a>

          <a href="https://www.peopleperhour.com/freelancer/evie-perren-skilled-front-end-software-zaaawzjn">
            <img
              className="h-8 md:h-12 lg:h-14"
              src={peopleperhour}
              alt="peopleperhour logo"
            />
          </a>

          <a href="https://www.fiverr.com/evieperren">
            <img
              className="h-8 md:h-12 lg:h-20"
              src={fiverr}
              alt="fiverr logo"
            />
          </a>

          <a href="https://www.freelancer.com/u/EvieButland">
            <img
              className="h-8 md:h-12 lg:h-20"
              src={freelancer}
              alt="Freelancer logo"
            />
          </a>
        </div>

        <WorkingExperience></WorkingExperience>
      </section>
      <Footer />
    </Fragment>
  );
};
