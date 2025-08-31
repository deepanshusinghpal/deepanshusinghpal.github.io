// Run this command in terminal to update the github related information: node git_data_fetcher.mjs

/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Deepanshu's Portfolio",
  description:
    "A dedicated B. Tech student passionate about building efficient and scalable software solutions. I enjoy working on projects that blend technology and innovation to solve real-world challenges.",
  og: {
    title: "Deepanshu Portfolio",
    type: "website",
    url: "https://deepanshusinghpal.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Deepanshu",
  logo_name: "Deepanshu",
  nickname: "",
  subTitle:
    "A dedicated BTech student passionate about building efficient and scalable software solutions. I enjoy working on projects that blend technology and innovation to solve real-world challenges.",

  resumeLink:
    "https://drive.google.com/file/d/1wPKmOiIQyEo1WtExnv5NQ_DYfGrLKcSy/view?usp=drive_link",
  // Please change
  portfolio_repository: "https://github.com/deepanshusinghpal/deepanshusinghpal.github.io",
  githubProfile: "https://github.com/deepanshusinghpal",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/deepanshusinghpal",
  // linkedin: "https://www.linkedin.com/in/deepanshu-singh-pal/",
  // gmail: "2004deepanshusingh@gmail.com",
  // gitlab: "https://gitlab.com/username",
  // facebook: "https://www.facebook.com/deepanshu.pal.16082004",
  // twitter: "https://twitter.com/username",
  // instagram: "https://www.instagram.com/deepanshupal_2004/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deepanshu-singh-pal/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/deepanshusinghpal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/username",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:2004deepanshusingh@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/username",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/deepanshu.pal.16082004",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/deepanshupal_2004/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using React.js and Bootstrap",
        "⚡ Developing backend systems with Node.js, Express.js, and MySQL",
        "⚡ Implementing authentication and REST APIs for scalable applications",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
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
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        }
      ],

    },
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
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
        
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      "title": "UI/UX Design",
      "fileName": "DesignImg",
      "skills": [
        "⚡ Designing user-friendly and visually appealing interfaces for web applications",
        "⚡ Creating wireframes, prototypes, and mockups using Figma, Adobe XD, and Sketch",
        "⚡ Enhancing designs with Adobe Illustrator, Adobe Photoshop, and Canva",
        "⚡ Implementing responsive UI components using Bootstrap"
      ],
      "softwareSkills": [
        {
          "skillName": "Figma",
          "fontAwesomeClassname": "simple-icons:figma",
          "style": {
            "color": "#F24E1E"
          }
        },
        {
          "skillName": "Adobe XD",
          "fontAwesomeClassname": "simple-icons:adobexd",
          "style": {
            "color": "#FF2BC2"
          }
        },
        {
          "skillName": "Sketch",
          "fontAwesomeClassname": "simple-icons:sketch",
          "style": {
            "color": "#F7B500"
          }
        },
        {
          "skillName": "Adobe Illustrator",
          "fontAwesomeClassname": "simple-icons:adobeillustrator",
          "style": {
            "color": "#FF7C00"
          }
        },
        {
          "skillName": "Adobe Photoshop",
          "fontAwesomeClassname": "simple-icons:adobephotoshop",
          "style": {
            "color": "#31A8FF"
          }
        },
        {
          "skillName": "Canva",
          "fontAwesomeClassname": "simple-icons:canva",
          "style": {
            "color": "#00C4CC"
          }
        },
        {
          "skillName": "Bootstrap",
          "fontAwesomeClassname": "simple-icons:bootstrap",
          "style": {
            "color": "#7952B3"
          }
        }
      ]
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/deepanshupal_2004/",
    },
    // {
    //   siteName: "Git",
    //   iconifyClassname: "simple-icons:git",
    //   style: {
    //     color: "#F05032",
    //   },
    //   profileLink: "https://git-scm.com/",
    // },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717"
      },
      profileLink: "https://github.com/deepanshusinghpal"
    }

  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology, Design and Manufacturing, Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core subjects like DSA, DBMS, OS, CN, COA, CD, AI, and ML.",
        "⚡ Additionally, completed courses on Deep Learning, Data Science, Cloud Computing, and Full Stack Development.",
        "⚡ Worked on various projects involving web development, software engineering, and system design to gain practical experience.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Structures and Performance",
      subtitle: "- Taught by Christine Alvarado, Mia Minnes, and Leo Porter at UC San Diego",

      logo_path: "ucsd_logo.png",

      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/EM534OBDU00T",
      alt_name: "University of California San Diego",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Financial Accounting",
      subtitle: "- Prof. Brian J. Bushee, Wharton School, University of Pennsylvania",


      logo_path: "University_of_Pennsylvania_Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/T08MTJUH1O3U",
      alt_name: "University of Pennsylvania",
      color_code: "#1F70C199",
    },
    {
      title: "Docker Foundations Professional Certificate",
      subtitle: "- Shea Hanson, Head of Learning Content Strategy, LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/9c31d36e2424d0af75c54899ddf2e499e1e92fc305ed0dbd4106c2cdc057e908",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Machine Learning",
      subtitle: "- Prof. Balaraman Ravindran, NPTEL, Jan-Apr 2025 (12-week course)",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DsunRpIXeLmSrj-NzX_sSLZ-9MTy3vme/view",
      alt_name: "NPTEL",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Computing: Understanding Core Concepts",
      subtitle: "- David Linthicum, LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1HD1VUC3WPL-n3nMRZGnbEFWeAlstIdNy/view?usp=drive_link",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Learning GitHub",
      subtitle: "- Emanuele Bartolesi, LinkedIn Learning",
      logo_path: "linkedin_learning_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MdjZPrZWD8dh7hBr6zlLJxMEeRibYson/view?usp=drive_link",
      alt_name: "LinkedIn Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Salesforce Developer - Agentblazer Champion Program",
      subtitle: "- Salesforce Virtual Internship Program",
      logo_path: "salesforce_logo.png",
      certificate_link: "https://drive.google.com/file/d/1r_imztMEAwyUhohgSUwah5lIq-Rzjh6v/view?usp=drive_link",
      alt_name: "Salesforce",
      color_code: "#00A1E0",
    },
  ],
};

// Experience Page

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I'm eager to grow as an engineer and explore exciting opportunities in internships and engineering roles. With a passion for problem-solving and innovation, I'm open to roles as a Full Stack Web Developer, Frontend or Backend Developer, and Python or C/C++ Engineer. I'm ready to contribute, learn, and build impactful solutions!",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Salesforce Developer Intern (Agentblazer Champion Program)",
          company: "salesforce",
          company_url: "https://www.salesforce.com/",
          logo_path: "salesforce_logo.png",
          duration: "May 2025 – Jul 2025",
          location: "Virtual",
          description:
            "Completed the 8-week Salesforce Developer internship under the Agentblazer Champion Program. Gained hands-on experience in Salesforce CRM development, Apex programming, Lightning Web Components, and real-world business problem solving. Collaborated virtually with mentors and peers while building projects aligned with industry practices.",
          color: "00A1E0",
        },
        {
          title: "Web Development Intern",
          company: "Navodita Infotech",
          company_url: "https://www.navoditainfotech.com/",
          logo_path: "navodita_infotech.png",
          duration: "Aug 2025 – Sep 2025",
          location: "Virtual",
          description:
            "Completed a 1-month Web Development Internship at Navodita Infotech. Worked on tasks from the official Task List, submitted projects via the Task Submission Form, and accessed training courses. Gained hands-on experience in web development and practical understanding of project workflows.",
          color: "#FF6F61",
        },
        {
          title: "Web Development Intern",
          company: "Uptricks Services Pvt. Ltd.",
          company_url: "https://www.uptricks.com/",
          logo_path: "uptricks_logo.jpg",
          duration: "March 2025 – May 2025",
          location: "Virtual",
          description:
            "Completed Web Development Internship at Uptricks Services Pvt. Ltd. Gained hands-on experience in web development projects, learned industry-standard workflows, and successfully received the Internship Completion Certificate.",
          color: "#1F77B4",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "temp.jpg",
          duration: "",
          location: "",
          description:
            "",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Web Development Intern",
    //       company: "Uptricks Services Pvt. Ltd.",
    //       company_url: "https://uptricksservices.com/",
    //       logo_path: "uptricks_logo.png",
    //       duration: "Mar 2025 – May 2025",
    //       location: "Remote",
    //       description:
    //         "Worked on frontend development using HTML, CSS, JavaScript, and WordPress. Collaborated with the team to design and implement responsive websites aligned with client requirements.",
    //       color: "#000000",
    //     },
    //   ],
    // },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "temp.jpg",
          duration: "",
          location: "",
          description:
            "",
          color: "#4285F4",
        },
      ],
    },
  ],
};





// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on a variety of projects, ranging from full-stack web applications to system-level implementations. My experience includes developing scalable web platforms, creating personal portfolio websites, and implementing complex game logic in C++. I enjoy building efficient and user-friendly applications using modern technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  // description: "Some of my published Articles, Blogs and Research.",
  description: "Some of my published Projects.",
  avatar_image_path: "projects_image.svg",
};



const publications = {
  data: [
    {
      id: "krishi-rental-service",
      name: "Krishi Rental Service",
      createdAt: "Working",
      // createdAt: "2023-07-02T00:00:00Z",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      description: "A web and mobile platform for renting agricultural machinery, allowing farmers to access and lease equipment efficiently.",
      url: "https://github.com/Infiniper/Krishi-Rental-Services",
    },
    {
      id: "portfolio-website",
      name: "Personal Portfolio Website",
      // createdAt: "2023-09-19T00:00:00Z",
      createdAt: "Ongoing",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and achievements. Built with React and Tailwind CSS.",
      url: "https://github.com/deepanshusinghpal/Portfolio-Website",
    },
    {
      id: "chess-game-cpp",
      name: "Chess Game in C++",
      // createdAt: "2023-10-12T00:00:00Z",
      createdAt: "Ongoing",
      description: "A simple chess game developed in C++, featuring various functionalities such as castling, check, checkmate, pawn promotion, moving of pieces, and fifty-move draw.",
      url: "https://github.com/deepanshusinghpal/Chess-Game",
    },
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Deepanshu_upscaled.png",
    description:
      "I am active on almost all social media platforms. You can message me anytime, and I'll get back to you as soon as possible. I can assist with Machine Learning, Artificial Intelligence, React, Android Development, Cloud Computing, and Open Source contributions.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Jagannathagattu Hill, Kurnool- 518007, Andhra Pradesh, India.",
    locality: "Kurnool",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "518007",
    streetAddress: "Jagannathagattu Hill",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/m3iVhZNPu4LEAQSv5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};


// const contactPageData = {
//   contactSection: {
//     title: "Contact Me",
//     profile_image_path: "animated_deepanshu.png",
//     description:
//       "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
//   },
//   blogSection: {
//     title: "Blogs",
//     subtitle:
//       "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
//     link: "https://blogs.ashutoshhathidara.com/",
//     avatar_image_path: "blogs_image.svg",
//   },
//   addressSection: {
//     title: "Address",
//     subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
//     locality: "San Jose",
//     country: "USA",
//     region: "California",
//     postalCode: "95129",
//     streetAddress: "Saratoga Avenue",
//     avatar_image_path: "address_image.svg",
//     location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
//   },
//   phoneSection: {
//     title: "",
//     subtitle: "",
//   },
// };

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
  publicationsHeader,
  publications,
  contactPageData,
};
