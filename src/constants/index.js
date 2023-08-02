import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "Angulars",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Mean stack developer",
    company_name: "Appinventiv",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022 - August 2023",
    points: [
      "Developing and maintaining web applications using Angular, Node and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility. with Offline compatibilities",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Writing REST APIs using express Js",

    ],
  },
  {
    title: "Jr.Associate IT (full stack)",
    company_name: "Unthinkable",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2019 - April 2022",
    points: [
      "Design/Develop User interface using html /CSS and Angular .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Build scalable applcations using Node js.",
      "Maintain the application for best performance and Realtime updates using Socket.io.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Home Health Notify",
    description:
      `This application is generally related to health domain Home Health is
      Socket.io an online medical platform .the aim of Home Health is to provide med-
      Nginx ical consultation to patients . The platform is build using MEAN Stack.`,
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "pwa",
        color: "yellow-text-gradient",
      },
      {
        name: "html",
        color: "purple-text-gradient",
      },    
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "javascript:void(0)",
  },
  {
    name: "Reliance Jio (GenNext)",
    description:
      `GenNext is a startup accelerator. The aim of genNext to provide the
      solutions to various startup founders to launching their startup. This
      application is build using Angular framework.`,
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "javascript:void(0)",
  },
  {
    name: "NMRC",
    description:
      `Its basically a HRMS web app built on Angular and Node js . In this
      Css application we are having portals for admin & employees . Worked as a Frontend develper to design & developed the application
      based on client requirement to meet the expected result.
      `,
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "pwa",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "javascript:void(0)",
  },
];

export { services, technologies, experiences, testimonials, projects };
