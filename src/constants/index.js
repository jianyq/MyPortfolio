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
  resumebot,
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
    title: "Co-founder and Software Engineer",
    company_name: "Qiyin Tech",
    icon: qiyin,
    iconBg: "#ffffff",
    date: "November 2021 - February 2023",
    points: [
      "Algorithm Development: Developed a novel music evaluation and generation system using neural networks based \
      on Transformer in C++ and Python, utilizing music theory to promote music exchange and transmission.",
      "Web3 and Metaverse Integration: Established webpage by reactjs, leveraged ONNX for model exportation, \
      leading to a more lightweight deployment on a Linux remote server. Implemented Nginx for high-performance HTTP \
      server capabilities and Redis-py for client interfacing, contributing to an improved server response time by 20%.",
      "Fundraising & Recognition: Raised $300,000 in investments for the web3 and meta-universe integrated music \
      platform Qiyin Music. As co-first author published paper in IEEE ICME 22 (Top 4 Conference in Computer Music)"
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Tsinghua University NLP Lab",
    icon: thunlp,
    iconBg: "#ffffff",
    date: "March 2022 - January 2023",
    points: [
      "Data Cleaning & Processing: Developed an effective data cleaning solution with Gensim and FastNLP, used \
      Scrapy and selenium for web scraping, leading to a richer and cleaner dataset for model training.",
      "Model Building: Continue SongNet’s work, Created NLP models with Huggingface and KeyBert, introducing \
      the ability to generate lyrics based on specific keywords, length, and other elements.",
      "Impact: The improvements to data quality and model capabilities led to a 15% increase in the accuracy of lyrics \
      generation, showed excellent results on multiple data sets, providing a more engaging user experience."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "SenseTime",
    icon: sensetime,
    iconBg: "#ffffff",
    date: "June 2021 - December 2021",
    points: [
      "Algorithm Improvement: Enhanced the performance of existing Computer Vision models by researching and \
      implementing new algorithms, leading to a significant 25% improvement in model efficiency.",
      "AI Education: Led interactive courses on trending topics such as Face Recognition and Autonomous Driving, \
      which increased student engagement by 30%. Courses have been approved by Shanghai Education Commission",
      "Software Packaging: Simplified and integrated models into user-friendly packages for AI-education products, \
      improving load times and usability in the educational setting. Related SDK receives 100k+ usage."
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
    name: "ResumeBot",
    description:
      "Chat with my resume.Used LangChain with OpenAI API to enable the creation of a generic \
      interface for all language models, amplifying the functionalities of ResumeBot. \
      ○ Leveraged Gradio and CSS to construct an interactive interface, deployed on Hugging Face Spaces",
    tags: [
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "Gradio",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: resumebot,
    source_code_link: "https://huggingface.co/spaces/jianyq/ResumeBot",
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
