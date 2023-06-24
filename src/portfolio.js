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
  subTitle: `Welcome to my portfolio! I am a skilled software developer with experience 
    in building software for Data Science, Machine Learning, 
    Data Engineering, and Fullstack Software.`,
  resumeLink: "test",
  portfolio_repository: "https://github.com/stephenjera/stephenjera",
  githubProfile: "https://github.com/stephenjera",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/stephenjera".
  // linkedin: "https://www.linkedin.com/in/stephen-j-298727115/",

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
  {
    name: "Instagram",
    link: "https://www.instagram.com/stephenjeranyama/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Engineering",
      fileName: "ProgrammerImg",
      skills: [
        "⚡ Developing ELT pipelines with dbt and Snowflake for efficient data processing.",
        "⚡ Designing OLTP and OLAP database systems",
        "⚡ Using cloud platforms to create custom connectors for Fivetran",
      ],
      softwareSkills: [
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "logos:snowflake-icon",
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
        {
          skillName: "dbt",
          fontAwesomeClassname: "simple-icons:dbt",
          style: {
            backgroundColor: "transparent",
            color: "#FF694A",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "skill-icons:gcp-light",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Fullstack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience with front-end technologies such as JavaScript and TypeScript, and front-end frameworks like React.",
        "⚡ Proficiency in back-end technologies such as Node.js and Python, and back-end frameworks like FastAPI.",
        "⚡ Creating APIs with database technologies such as PostgreSQL and BigQuery, and hosting them on cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "TypesScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "logos:html-5",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "logos:css-3",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Utilizing machine learning techniques to create predictive models and derive insights from data.",
        "⚡ Developing multiple linear regression models with high r2 scores.",
        "⚡ Applying statistical analysis techniques to evaluate model performance.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
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
          skillName: "Jupyter Notebooks",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
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
    {
      title: "Snowflake Hands On Essentials - Data Warehouse",
      subtitle: "",
      logo_path: "Snowflake-Essentials-Data-Warehouse_2x.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Snowflake Hands On Essentials - Data Warehouse",
      color_code: "#FFFFFF",
    },
    {
      title: "Snowflake Hands On Essentials - Data Applications",
      subtitle: "",
      logo_path: "Snowflake-Essentials-Data-Applications_2x.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Hands On Essentials - Data Applications",
      color_code: "#FFFFFF",
    },
    {
      title: "Snowflake Hands On Essentials - Data Sharing",
      subtitle: "",
      logo_path: "Snowflake-Essentials-Data-Sharing_2x.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Hands On Essentials - Data Sharing",
      color_code: "#FFFFFF",
    },
    {
      title: "Snowflake Hands On Essentials - Data Lake",
      subtitle: "",
      logo_path: "Snowflake-Data-Lake.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Hands On Essentials - Data Lake",
      color_code: "#FFFFFF",
    },
    {
      title: "Snowflake Hands On Essentials - Data Engineering",
      subtitle: "",
      logo_path: "Snowflake Essentials-Data-Engineering.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Hands On Essentials - Data Engineering",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description: `As a Data Consultant at Rockborne, I delivered high-quality results for a client
    specializing in Analytics with Tableau. My projects included developing 
    a web app and building ELT pipelines. I also have experience as a Test Automation Engineer
    and have explored fields such as robotics design and machine learning through my university projects.`,
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
            `Consulted for a client specializing in Analytics with Tableau as part
            of the Data Engineering team, delivering high-quality results.
            Automated workflows with N8N and built ELT pipelines with dbt
            and Snowflake, utilizing Kimball data modeling techniques.
            Completed a 16-week intensive data training program, achiev-
            ing proficiency in Cloud Engineering Data Engineering, Python,
            SQL, Data Science, Machine Learning, Data Visualization, Power BI,
            Tableau, DevOps, Docker, Relational Database Concepts, and
            presentations`,
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
