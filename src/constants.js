// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import davlogo from './assets/education_logo/dav.png';
import JUlogo from './assets/education_logo/Ju.png';
import xavierslogo from './assets/education_logo/xaviers.png';


// Project Section Logo's
import classroom from './assets/work_logo/classroom.png';
import news from './assets/work_logo/news.png';
import health from './assets/work_logo/health.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: JUlogo,
      school: "Jadavpur University, Kolkata, West Bengal",
      date: "Nov 2022 - Present",
      grade: "8.95 CGPA",
      desc: "I am currently pursuing my Bachelor of Engineering (BE) degree in Information Technology from Jadavpur University, Kolkata, West Bengal. In this ongoing course, I have gained a strong foundation in programming, software development, and computer science fundamentals. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Web Technologies, and Software Engineering. ",
      degree: "Bachelor of Engineering (BE) in Information Technology",
    },
    {
      id: 1,
      img: davlogo,
      school: "DAV Model School, Durgapur, West Bengal",
      date: "Apr 2019 - March 2021",
      grade: "86.8%",
      desc: "I completed my class 12 education from DAV Model School, Durgapur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: xavierslogo,
      school: "ST. Xavier's School, Durgapur, West Bengal",
      date: "Apr 2007 - March 2019",
      grade: "94.8%",
      desc: "I completed my class 10 education from ST. Xavier's School, Durgapur, West Bengal under the ICSE board, where I studied Arts, Science with Computer Applications.",
      degree: "ICSE(X), Arts, Science with Computer Applications.",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Based HealthCare App",
      description:
        "A powerful and user-friendly React.js application designed to give health related guidance by the use of AI tools. It has the feature of tracking nearby hospitals, thereby helping in emenergency. It also has a first aid store, where health related things are sold at a discounted price.",
      image: health,
      tags: ["React JS", "API", "JavaScript", "Node.js", "Express", "MongoDB", "MaterialUI"],
      github: "https://github.com/Purnendu-JU/HealthApp",
      webapp: "https://health-client-frontend.vercel.app/",
    },
    {
      id: 1,
      title: "Smart Classroom",
      description:
        "A MERN stack application, that helps to streamline educational interactions and enhance teaching learning experiences, containing the feature of easy creation of classes and attendance tracking by the generation of a 6 length unique code. The app is well Accomplished of notifying about announcements made and assignments posted to every enrolled students via mail by the use of Nodemailer package.",
      image: classroom,
      tags: ["React JS", "JavaScript", "Node.js", "Express", "MongoDB", "MaterialUI"],
      github: "https://github.com/Purnendu-JU/SmartClassroom",
      webapp: "https://frontend-classroom.vercel.app/",
    },
    {
      id: 2,
      title: "News Web",
      description:
        "A React-based News Application that fetches data from a News API which led to the display of real time news from all over the world consisting news of 7 categories(sports, business, general, health, science, entertainment). It contains a robust search algorithm that processes user queries in real-time, delivering up to 10 matching articles with 75% accuracy.",
      image: news,
      tags: ["React JS", "JavaScript", "Node.js", "Express", "MongoDB", "BootStrap5", "API"],
      github: "https://github.com/Purnendu-JU/NewsApp",
      webapp: "https://newsapp-iota-fawn.vercel.app/login",
    }
  ];  