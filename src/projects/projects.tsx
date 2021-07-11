interface Projects {
  name: string,
  detail: string | string[],
  internalLink: string,
  externalLink?: string
}

export const projects = {
  orange: {
    name: "Orange driver training", 
    detail: "Orange driver training is a driving instructor website going through a redesign. Built in Next.js, using SCSS modules. Tracey, the owner, was looking for a fresh design that would make her website look professional, clean, easy to navigate and stand out from the rest.",
    internalLink: "orange-driver-training",
    externalLink: "asdasd"
  },
  hr: { 
    name: "HR mentor app", 
    detail: "The HR mentor app was an internal project within my current company. This project was built using React, SCSS modules and express JS to connect to a Mongo DB using a REST API. The stakeholders wanted a platform to allow staff to sign up, or be find a mentor within the company.", 
    internalLink: "hr-mentor-app", 
    externalLink: "asdasd"
  },
  path: { 
    name: "Path to Purchase", 
    detail: "This was a React app built within my current company, i worked in a team with 2 senior developers", 
    internalLink: "path-to-purchase", 
    externalLink: "asdasd"
  }
}