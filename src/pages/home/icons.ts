import {
  faCloud,
  faMobileAlt,
  faMountain,
  faServer,
  faT,
  faUniversalAccess,
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
    label: "CSS",
    value: faCss3Alt,
    url: "https://www.w3schools.com/css/",
  },
  {
    label: "Express JS",
    value: faJsSquare,
    url: "https://expressjs.com/",
  },
  {
    label: "Mongoose",
    value: faServer,
    url: "https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/",
  },
  {
    label: "MongoDB",
    value: faCloud,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Nuxt JS",
    value: faMountain,
    url: "https://nuxt.com/",
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
    label: "Responsive Design",
    value: faUniversalAccess,
    url: "https://www.w3schools.com/html/html_responsive.asp",
  },
  {
    label: "React Native",
    value: faMobileAlt,
    url: "https://reactnative.dev/",
  },
];
