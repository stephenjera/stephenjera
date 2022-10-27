/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Stephen's Portfolio",
  description:
    "A recent graduate looking to explore the world of data, artificial intelligence and machine learning",
  og: {
    title: "Stephen Portfolio",
    type: "website",
    url: "https://stephenjera.github.io/stephenjera/",
  },
};

//Home Page
const greeting = {
  title: "Stephen Jeranyama",
  logo_name: "Stephen Jeranyama",
  nickname: "",
  subTitle:
    "A recent graduate looking to explore the world of data, artificial intelligence, machine learning and embedded systems.",
  resumeLink: "test",
  portfolio_repository: "https://github.com/stephenjera/stephenjera",
  githubProfile: "https://github.com/stephenjera",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/blaze21777".
  // linkedin: "https://www.linkedin.com/in/stephen-j-298727115/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/stephenjera",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/stephen-j-298727115/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience developing LSTMs and CNN models for Automatic Music Transcription.",
        "⚡ Using random forests and SVMs for feature selection and predictions.",
        "⚡ Predictions using Linear Regression techniques on weather data.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter Notebooks",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Postgresql",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Embedded Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing embedded software for Arduinos, Raspberry Pis and STM32s.",
        "⚡ Circuit designs for robotics and embedded hardware.",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos:arduino",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "logos:c",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Raspberry Pi",
          fontAwesomeClassname: "logos:raspberry-pi",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "STM Microelectronics",
          fontAwesomeClassname: "simple-icons:stmicroelectronics",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    /*
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    */
    /*
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    */
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/stje_411",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/blaze21777",
    },
    {
      siteName: "Credley",
      iconifyClassname: "simple-icons:credly",
      style: {
        color: "#FF6B00",
      },
      profileLink: "https://www.credly.com/users/stephen-jeranyama/badges",
    },
    {
      siteName: "Sololearn",
      iconifyClassname: "simple-icons:sololearn",
      style: {
        color: "#111111",
      },
      profileLink: "https://www.sololearn.com/profile/933118",
    },
    {
      siteName: "Codewars",
      iconifyClassname: "simple-icons:codewars",
      style: {
        color: "#de684f",
      },
      profileLink: "https://www.codewars.com/users/blaze21777",
    },
    {
      siteName: "Plurasight",
      iconifyClassname: "logos:pluralsight-icon",
      style: {
        color: "#de684f",
      },
      profileLink: "https://app.pluralsight.com/profile/stephen-jeranyama",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Loughborough University",
      subtitle: "MEng(Hons) DIS Electronic and Computer Systems Engineering",
      //logo_path: "lboro_logo_2.png",
      alt_name: "Loughborough University",
      duration: "2016 - 2022",
      descriptions: [
        "Electronic and Computer Systems Engineering taught me to combine digital electronics, microprocessors and software to develop and enable the potential of embedded computer systems.",
        "Key Modules:",
        "⚡ Machine Learning - Principles and Applications for Engineers",
        "⚡ Real-Time Software Engineering",
        "⚡ Programming Multicore Systems",
        "⚡ Computer Architecture",
        "⚡ Robotics Project Design and Management",
        "⚡ Electronic System Design with FPGAs",
      ],
      website_link: "https://www.lboro.ac.uk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DP-900 Azure Data Fundementals",
      subtitle: "",
      logo_path: "azure-data-fundamentals-600x600.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Azure Data Fundamentals",
      color_code: "#FFFFFF",
    },

    {
      title: "Data Science Foundations - Level 2",
      subtitle: "",
      logo_path: "Data_Sci_Foundations_Level_2_-_CC_-_2019.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Data Science Foundations",
      color_code: "#FFFFFF",
    },

    {
      title: "Applied Data Science with Python - Level 2",
      subtitle: "",
      logo_path: "Applied_Data_Science_with_Python.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Applied Data Science with Python",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description:
    "I have gained experience on my placement as a Test Automation Engineer and my university projects varying from robotics design, machine learning and programming in several languages such as C/C++, Python and LabVIEW.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Graduate Consultant",
          company: "Rockborne",
          company_url: "https://rockborne.com/",
          logo_path: "Rockborne-logo-red.jpg",
          duration: "July 2022 - PRESENT",
          location: "London",
          description: [
            "Rockborne is an expert provider of specialist Data & Analytics consultants. ",
            "Rockborne provides bespoke technical, business, and interpersonal training. ",
            "Bikeshare SQL Project: I cleaned and explored the Divvy bikes dataset, using joins, CTEs ",
            "and views in PostgreSQL and created visualisations in Excel to answer business questions ",
            "to present to stakeholders. ",
            "Superstore Excel Project: Utilising Excel pivot tables and charts, a dashboard showing ",
            "KPIs of the Superstore dataset was created and presented to stakeholders.",
          ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Test Automation Engineer Intern",
          company: "Abaco Systems",
          company_url: "https://www.abaco.com/",
          logo_path: "abaco_logo.jpg",
          duration: "August 2020 - July 2021",
          location: "Towcester, Northamptonshire",
          description: [
            "Abaco Systems designs COTS rugged embedded computing products. During this placement I ",
            "created drivers for controlling thermal chambers using LabVIEW, ",
            "created test solutions for single board computers with a Linux OS using NI TestStand, ",
            "updated and created requirements documents for software development using ",
            "Dynamic Object-Oriented Requirements System (Doors), ",
            "Used agile software development, Jira, to plan and complete biweekly tasks and ",
            "used Perforce version control system to track changes in development, main and released code.",
          ],
          color: "#4285F4",
        },
      ],
    },

    {
      title: "Volunteering",
      experiences: [
        {
          title: "Digital Champion",
          company: "Doddridge Centre",
          company_url: "https://en-gb.facebook.com/Doddridgeandstjames",
          logo_path: "Doddridge_Centre.jpg",
          duration: "September 2017 - November 2017",
          location: "Northampton, Northamptonshire",
          description: [
            "I Mentored elders on their first experience with a computer to help them build new skills to apply for jobs ",
            "and I taught new volunteers how to deliver the Digital Champion course. ",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: [
    "My projects focus on developing good programming skills and implementing best practices in a practical manner. They utilise different languages to ",
    "build upon the fundamentals that are constant across all languages.",
  ],
  avatar_image_path: "projects_image.svg",
};
/*
const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};
*/
// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "deeplearning_ai_logo.png",
    description: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: " Work Address",
    subtitle:
      "Rockborne, 1st floor, Melbury House, 51 Wimbledon Hill Rd, London SW19 7QW",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/dir//Rockborne,+1c+Alwyne+Rd,+London+SW19+7AB/@51.4228339,-0.2087956,17z/data=!4m16!1m6!3m5!1s0x0:0x4dfd25617d24dc4e!2sRockborne!8m2!3d51.4228681!4d-0.208387!4m8!1m0!1m5!1m1!1s0x48760968083e1a61:0x4dfd25617d24dc4e!2m2!1d-0.2091896!2d51.4228941!3e2",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  contactPageData,
};
