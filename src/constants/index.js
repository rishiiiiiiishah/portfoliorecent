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
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
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
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "DJS Nova",
    icon: starbucks,
    iconBg: "white",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Engineered dynamic and responsive web applications using React.js, optimizing performance and user experience.",
  "Collaborated with UI/UX designers and backend developers to create seamless, intuitive, and visually appealing interfaces.",
  "Implemented best practices for cross-browser compatibility, ensuring a smooth experience across various devices and screen sizes.",

    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Meraki Design Services",
    icon: tesla,
    iconBg: "white",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Engineer's Way Out",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2023 - Aug 2023",
    points: [
      "Designed and developed interactive and scalable web applications using React.js, enhancing user engagement.",
      "Integrated RESTful APIs and third-party services to improve application functionality and data flow.",
      "Ensured mobile-first, responsive design for seamless user experience across various devices and screen sizes.",
      "Optimized front-end performance by implementing efficient state management and minimizing re-renders.",
    ],
  },
  {
    title: "Data Analyst and Research Intern",
    company_name: "RE Journal",
    icon: meta,
    iconBg: "black",
    date: "Aug 2024 - Aug 2025",
    points: [
      "Conducted in-depth data analysis using Python, SQL, and Excel to derive actionable insights for research publications.",
      "Scraped, cleaned, and processed large datasets to identify trends and patterns in real estate and economic markets.",
      "Developed interactive dashboards and visualizations using Tableau and Power BI to present key findings effectively.",
      "Collaborated with researchers and industry experts to enhance data-driven decision-making in real estate analysis.",
      "Utilized NLP techniques to analyze textual data and extract meaningful insights from market reports and research papers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rishi proved me wrong.",
    name: "Darshana Shah",
    designation: "CFO",
    company: "Chocolicious",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Data Analyst who truly cares about their clients' success like Rishi does.",
    name: "Subhash Bhola",
    designation: "COO",
    company: "RE journal",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rishi optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Akhilesh Jakka",
    designation: "CTO",
    company: "Meraki Services",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chocolate Website",
    description:
      "A web-based platform to explore, customize, and order premium chocolates from top chocolatiers, ensuring a sweet and personalized experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rishiiiiiiishah/chocolatewebsitechocolate",
  },
  {
    name: "E-commerce Website",
    description:
      "A web application that allows users to browse products, compare prices, and make purchases from various sellers, providing a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rishiiiiiiishah/e-commerce-website",
  },
  {
    name: "Personalized Portfolio",
    description:
      "A web application that showcases a user's skills, projects, and experience in a personalized and visually appealing format, enhancing their online presence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rishiiiiiiishah/profile",
  },
];

export { services, technologies, experiences, testimonials, projects };
