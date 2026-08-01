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
  scss,
  git,
  figma,
  docker,
  meta,
  ey,
  app,
  unthinkable,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
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
  },
  {
    name: "Sass",
    icon: scss,
  }
];

const experiences = [
  {
    title: "Lead Software Engineer",
    company_name: "Ernst & Young",
    icon: ey,
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
    title: "Senior Software Engineer",
    company_name: "Appinventiv",
    icon: app,
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
    icon: unthinkable,
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
    name: "Helix Mapping Utility",
    description:
      `This application is generally responsible for mapping and managing the project mapping accross mutiple region,
      Also developed Offline support, Role based access control & Dynamic Reactive forms`,
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "red-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "yellow-text-gradient",
      },
      {
        name: "Web Sockets",
        color: "white-text-gradient",
      },
      {
        name: " Microsoft Azure",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Html",
        color: "purple-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "javascript:void(0)",
  },
  {
    name: "Home Health Notify",
    description:
      `This application is generally related to health domain Home Health is
      Socket.io an online medical platform .the aim of Home Health is to provide med-
      Nginx ical consultation to patients . The platform is build using MEAN Stack.`,
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "PWA",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "purple-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
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
        name: "Html",
        color: "yellow-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "red-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
      {
        name: "PowerBi",
        color: "yellow-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "javascript:void(0)",
  }
];

export { services, technologies, experiences, testimonials, projects };
