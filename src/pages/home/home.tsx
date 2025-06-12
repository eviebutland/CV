import { Fragment } from "react";
import { Header } from "../../components/header/header";
import { Timeline } from "../../components/timeline/timeline";

import { Footer } from "../../components/footer/footer";
import { WorkingExperience } from "../../components/workingExperience/workingExperience";
// import PDF from "../../assets/PDF/Evie-Perren-CV.pdf";
import PDF from "../../assets/PDF/Evie Perren - 12:06:25.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { icons } from "./icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { IconGrid } from "../../components/IconGrid";
import { Tooltip } from "../../components/tooltip/tooltip";

export const Home = () => {
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
          <div className="flex-1">
            <div className="pt-5 md:pt-0 lg:pt-0">
              <h2 className="headline-1 text-center md:text-left">Skillset</h2>
              <hr className="border-gray-800 hidden lg:block border-b w-[20%] mt-2" />
            </div>
            <p className="lg:pb-0 lg:max-w-[80%] mt-10">
              I am passionate about understanding customer problems and
              continuously learning new technologies to deliver effective
              solutions. Being self-taught, my passion for coding is
              intrinsically linked to continuous learning. I'm dedicated to
              mastering new technologies and evolving my skills to stay at the
              forefront of development and consistently build impactful
              products.
              <br />
              <br />I continue to build my knowledge in my free-time on tech
              stacks that excite me and have been used within my roles.
              Primarily working with <b>React, Vue, Inertia and Laravel</b>, I
              am also a key developer within our org to develop a
              <b> React Native app, used by over 350 restaurants</b>.
              <br />
              <br />I continue to learn everyday & enjoy staying up to date with
              the latest tech. I also write about these on{" "}
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
          <div className="w-full flex justify-center flex-1">
            <IconGrid icons={icons} />
          </div>
        </div>
      </div>

      <section className="max-w-[1250px] md:mx-[100px] lg:mx-auto  mb-10 md:mb-30">
        <Timeline />

        <WorkingExperience></WorkingExperience>
      </section>
      <Footer />
    </Fragment>
  );
};
