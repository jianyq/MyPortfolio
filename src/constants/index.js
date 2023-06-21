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
  uiuc,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rdfz,
  qiyin,
  thunlp,
  sensetime,
  likaifu,
  sunmaosong,
  egunter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "projects",
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
    title: "Algorithm Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Model Creator",
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

const educations = [
  {
    title: "Bachelor of Mathematics and Computer Science",
    school: "University of Illinois Urbana-Champaign",
    icon: uiuc,
    iconBg: "#34568b",
    date: "Sep 2021 - Dec 2024",
    description: "The University of Illinois at Urbana-Champaign (UIUC), established in 1867, is a renowned public research university. Its Department of Computer Science is a world leader, with comprehensive, innovative programs. As of 2021, the department's computer science program was ranked among the top 5 in the U.S. by the U.S. News & World Report. UIUC has made significant contributions in AI, database systems, and more. The birthplace of the first graphical web browser, UIUC is recognized for its research and technological innovation. ",
    // Honor: "Dean's List (top 10%)",
    GPA: "4.0",
    Courses: "Data Structures, Algorithms, Discrete Mathematics, Linear Algebra, Calculus",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  },
  {
    title: "High School Diploma",
    school: "The High School Affiliated to Renmin University of China",
    icon: rdfz,
    iconBg: "#ffffff",

    description: "The High School Affiliated to Renmin University of China (RDFZ) ranks first on the high school rankings in Beijing and across China. It is one of the most prestigious high schools in China. RDFZ is also a member of the G30 Schools. In 2020, it was recognized by the Ministry of Education as one of the first national-level demonstration high schools.",
    date: "Sep 2019 - Jun 2021",
    // Honor: "Dean's List (top 10%)",
    GPA: "4.0",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
  }
];

const experiences = [
  {
    title: "Co-founder and Algorithm Developer",
    company_name: "Qiyin Tech",
    icon: qiyin,
    iconBg: "#ffffff",
    date: "November 2021 - February 2023",
    points: [
      "Algorithm development for analyzing and generating music: Designed music evaluation and generation \
      system by music theory and neural network. Promoted the transmission and exchange of music, while focusing on \
      the field of web3 and meta-universe to create a music platform−Qiyin Music−received $300,000 in investment. \
      Implemented by C++ and Python. Our paper in IEEE ICME 22 (Top 4 Conference in Computer Music)",
      "System Deployment: Used ONNX export to make the algorithm model lightweight and deployed the model on \
      a Linux remote server. Deployed high-performance HTTP and reverse proxy web server Nginx on websites, and \
      completed application layer requests and responses relying on HTTP protocol. Built a client-side interface using \
      Redis-py, a Python interface to the Redis key-value database. Redis-py uses a connection pool at the \
      connection level to the Redis database. The site can be accessed from any device.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Tsinghua University NLP Lab",
    icon: thunlp,
    iconBg: "#ffffff",
    date: "March 2022 - January 2023",
    points: [
      "Algorithm development for analyzing and generating lyrics: Used Scrapy to retrieve song information \
      from Music website. Established an effective data cleaning solution by Python, obtained Chinese lyrics data \
      containing key information such as structural and topic information by KeyBert, and built models based on \
      Huggingface that can perform controllable lyrics generation with specific keywords, length, and other elements."
    ],
  },
  {
    title: "Algorithm Intern",
    company_name: "SenseTime",
    icon: sensetime,
    iconBg: "#ffffff",
    date: "June 2021 - December 2021",
    points: [
      "Development of AI-education Products: Researched and implemented new algorithms to improve the \
      performance of existing computer vision models. Evaluated the performance of different models, simplified and \
      combined them into packages used for AI-education. Participated in the teaching of AI algorithm courses. The \
      course content include face recognition, driverless car and so on.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Impressive to see our youngest AI Summer Camp participant complete a complex project. His ageless curiosity and innovation herald a bright future in AI.",
    name: "kai-fu lee",
    designation: "CEO",
    company: "Sinovation Ventures",
    image: likaifu,
  },
  {
    testimonial:
      "He is an active learner and innovator, with a keen interest in exploring music-related issues using computer technology. Also, he possesses a strong ability for self-learning, making noteworthy contributions in various areas.",
    name: "Maosong Sun",
    designation: "Foreign Academician",
    company: "the European Academy of Humanities and Natural Sciences",
    image: sunmaosong,
  },
  {
    testimonial:
      "Not only does he have a solid foundation in computer science, but he has also made outstanding contributions to upholding the principles of integrity in the school.",
    name: "Elsa L Gunter",
    designation: "Research Professor",
    company: "Department of Computer Science in UIUC",
    image: egunter,
  },
];

const projects = [
  {
    name: "Tong Music",
    description:
      "A music platform was developed using Django, which allows users to create music online by using artificial intelligence technology. The generated songs can be shared and traded through the platform.",
    tags: [
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jianyq/Tong-Music",
  },
  {
    name: "Anti-gpt-detector",
    description:
      "An encryption algorithm used to counter GPT Inspector, which can humanize the text generated by GPT. A legitimate site for anti GPT-detection",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "RoBERTa",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/jianyq/Anti-gpt-detector",
  },
  {
    name: "Beijing Subway Navigation",
    description:
      "Subway navigation system with visualization function. Used Dijkstra algorithm to deal with the navigation problem. The results was visualized by OpenCV.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/jianyq/Beijing-Subway-Navigation",
  },
];

export { services, technologies, educations, experiences, testimonials, projects };
