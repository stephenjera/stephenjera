/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Stephen's Portfolio",
  description:
    "Data expert experienced in AI, machine learning and data engineering.",
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
  subTitle: `Welcome to my portfolio! As a data specialist, 
  I leverage my software engineering skills to build robust solutions 
  for, data science, machine learning, and data engineering.`,
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
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ AI Model Development: I design and implement machine learning models, focusing on optimizing hyperparameters to enhance model accuracy and performance.",
        "⚡ Machine Learning Pipelines: I build and automate MLOps pipelines to streamline model training, ensure version control, and track performance efficiently.",
        "⚡ Software Development Integration: I integrate machine learning models into software projects, employing best practices in containerization and unit testing to ensure robust and reliable implementations.",
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
          skillName: "Pytorch",
          fontAwesomeClassname: "logos:pytorch-icon",
          style: {
            backgroundColor: "transparent",
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
    {
      title: "Data Engineering",
      fileName: "ProgrammerImg",
      skills: [
        "⚡ Automating Data Workflows: I build and orchestrate data pipelines to ensure seamless data extraction, transformation, and loading, optimizing the flow of information across systems.",
        "⚡ Cloud-Based Data Management: I design efficient databases for both transactional and analytical processing, facilitating robust data analysis and retrieval in cloud environments.",
        "⚡ API and Visualization Expertise: I develop custom connectors and APIs to enable efficient data access and create insightful visualizations, enhancing data-driven decision-making.",
      ],
      softwareSkills: [
        {
          skillName: "Terraform",
          fontAwesomeClassname: "vscode-icons:file-type-terraform",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "vscode-icons:file-type-graphql",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
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
      title: "AWS Knowledge: Cloud Essentials",
      subtitle: "",
      logo_path: "aws_knowledge_cloud_essentials.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "AWS Knowledge: Cloud Essentials",
      color_code: "#FFFFFF",
    },
    {
      title: "ThoughtSpot Professional",
      subtitle: "",
      logo_path: "ThoughtSpot_Certified_Professional.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "ThoughtSpot Certified Professional",
      color_code: "#FFFFFF",
    },
    {
      title: "ThoughtSpot Cloud Architect",
      subtitle: "",
      logo_path: "ThoughtSpot_Cloud_Architect.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "ThoughtSpot Cloud Architect",
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
      title: "Snowflake Hands On Essentials - Data Engineering",
      subtitle: "",
      logo_path: "Snowflake Essentials-Data-Engineering.png",
      certificate_link: "https://www.credly.com/users/stephen-jeranyama/badges",
      alt_name: "Hands On Essentials - Data Engineering",
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
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description: `
  Leveraging my data skills, 
  I led a team to develop a recruitment data dashboard, transitioning the company to structured,
  data-driven reports. I consulted on monitoring solutions, automated data migrations, and optimized data pipelines.
  I also worked on research projects, developed machine learning models, and established MLOps pipelines,
  ensuring robust implementations. This blend of experience bridges data and actionable insights, driving impactful solutions.`,
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Data Engineer",
          company: "Aviva",
          company_url: "https://www.aviva.co.uk/",
          logo_path: "aviva_logo.png",
          duration: "July 2024 - Present",
          location: "London",
          description: [
            `Experienced in data engineering within cloud environments,
            with a strong focus on DataOps and CI/CD practices. Proficient in writing clean, 
            maintainable code in SQL and Python, with additional knowledge in data pipeline engineering and best practices.
            Skilled in designing and managing efficient databases for both transactional and analytical processing,
            ensuring robust data analysis and retrieval. This experience has equipped me with the ability to bridge the
            gap between data and actionable insights, driving impactful solutions across various business domains.`,
          ],
          color: "#4285F4",
        },
        {
          title: "Data Engineer Consultant",
          company: "Actica Consulting",
          company_url: "https://actica.co.uk/",
          logo_path: "Actica-Logo-White-Background-1.png",
          duration: "Febuary 2024 - July 2024",
          location: "Guildford",
          description: [
            `Led a team of three in a Recruitment Data Analysis project,
              ensuring effective collaboration and project delivery to develop a
              comprehensive Power BI dashboard to visualise recruitment data,
              providing actionable insights. Conducted regular scrum meetings with the Director, presenting
              major ideas, project progress, and transitioned the company from
              inconsistent reporting to a structured report that addressed core
              business needs.`,
          ],
          color: "#4285F4",
        },
        {
          title: "Data Consultant",
          company: "Rockborne",
          company_url: "https://rockborne.com/",
          logo_path: "Rockborne-logo-red.jpg",
          duration: "July 2022 - December 2023",
          location: "London",
          description: [
            `Consulted on a Snowflake usage monitoring solution. Built a
            Kimball model using dbt and Snowflake information schema for a
            Power BI dashboard. Enabled successful client PoC, demonstrating
            data-driven decision-making value.
            Automated Oracle to Snowflake migration for a client, ensuring
            a complete audit trail. Developed a Python script with regular
            expressions to convert DDL syntax and leverage SQL to generate
            the corresponding Snowflake DDL statements.
            Optimised client's data pipeline for loading SQL Server backups into
            Snowflake. Documented Python script (Markdown), containerized
            with Docker, deployed on Azure Container Instances and
            automated via Azure Logic Apps`,
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
