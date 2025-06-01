import {
  faCloud,
  faCodeBranch,
  faMobileAlt,
  faMountain,
  faN,
  faServer,
  faT,
  faUniversalAccess,
  faVialCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import {
  IconDefinition,
  faCss3Alt,
  faFigma,
  faJsSquare,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";

export const icons: Array<{
  label: string;
  value: IconDefinition;
  url: string;
}> = [
  {
    label: "Javascript",
    value: faJsSquare,
    url: "https://www.javascript.com/",
  },
  {
    label: "React",
    value: faReact,
    url: "https://react.dev/",
  },
  {
    label: "Vue",
    value: faVuejs,
    url: "https://vuejs.org/",
  },
  {
    label: "Typescript",
    value: faT,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "Vitest",
    value: faVialCircleCheck,
    url: "https://vitest.dev/",
  },

  {
    label: "Next JS",
    value: faN,
    url: "https://nextjs.org/",
  },
  {
    label: "Nuxt JS",
    value: faMountain,
    url: "https://nuxt.com/",
  },
  {
    label: "Node JS",
    value: faServer,
    url: "https://nodejs.org/en",
  },
  {
    label: "Laravel",
    value: faFolder,
    url: "https://laravel.com/",
  },
  {
    label: "Figma",
    value: faFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    value: faCodeBranch,
    url: "https://git-scm.com/",
  },
  {
    label: "React Native",
    value: faMobileAlt,
    url: "https://reactnative.dev/",
  },
];
