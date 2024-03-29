import orangeThumnail from '../../assets/images/orange-thumnail.png';
import hrMentorAppThumbnail from '../../assets/images/mentor-thumbnail.png';
import inventoryThumbnail from '../../assets/images/inventory.png';
import movieThumbnail from '../../assets/images/movielib1.png';
import fitnessThumbnail from '../../assets/images/movielib2.png';
import p2pThumbnail from '../../assets/images/p2p-thumbnail.png';

interface Project {
  name: string;
  detail: string;
  internalLink: string;
  externalLink: string | null;
  image: string;
}

export const projects: Project[] = [
  {
    name: 'Fitness App',
    detail:
      'I created fitness app API for my own needs, I wanted to build a service that sends daily notifications of planned workouts based on user preference.',
    internalLink: 'fitness-app',
    externalLink: null,
    image: fitnessThumbnail,
  },
  {
    name: 'Movie library',
    detail:
      'Movie library is an open API I built in order to practice my skills and gain more understanding of software being used in my current workplace',
    internalLink: 'movie-library',
    externalLink: null,
    image: movieThumbnail,
  },
  {
    name: 'Inventory platform',
    detail:
      'The inventory platform is the core of Hectares SASS product. This platform allows storage insight, management and movement of produce & grain for users across the world.',
    internalLink: 'inventory-platform',
    externalLink: 'https://www.wearehectare.com/',
    image: inventoryThumbnail,
  },
  {
    name: 'Orange driver training',
    detail:
      'Orange driver training is a driving instructor website I worked on redesigning. Built in Next.js, using SCSS modules. Tracey, the owner, was looking for a fresh design that would make her website look professional, clean, easy to navigate and stand out from the rest.',
    internalLink: 'orange-driver-training',
    externalLink: 'https://orangedrivertraining.co.uk/',
    image: orangeThumnail,
  },
  {
    name: 'HR mentor app',
    detail:
      'The HR mentor app was an internal project within my previous company. This project was built using React, SCSS modules and Express JS to connect to a Mongo DB using a REST API. The stakeholders wanted a platform to allow staff to sign up as a mentor, or be find a mentor within the company based on the skills they can provide.',
    internalLink: 'hr-mentor-app',
    externalLink: null,
    image: hrMentorAppThumbnail,
  },
  {
    name: 'Path to Purchase',
    detail:
      'Path to Purchase 2.0 is a React app designed to replace a legacy checkout journey within my previous company. This checkout contains 5 steps to allow corporate clients to purchase a product through us. There are future plans to also use this to sell products directly to our customers.',
    internalLink: 'path-to-purchase',
    externalLink: null,
    image: p2pThumbnail,
  },
];
