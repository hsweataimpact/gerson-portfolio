/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gerson Stuva",
  title: "Hi all, I'm ",
  subTitle: emoji(
    "A Senior Software Engineer 🚀 with experience in building web and mobile applications using scripting languages and object-oriented programming (OOP)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Vv4MYROUs51llbUhYdY5GZD9DT0d31F5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Pillar0128",
  linkedin: "https://www.linkedin.com/in/gerson-stuva-b5702736b/",
  gmail: "gerson.stuva@aimpacthk.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY WEB AND MOBILE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Develop and maintain scalable and robust backend services for various web applications."
    ),
    emoji(
      "⚡ Optimize mobile applications for maximum speed and scalability while ensuring they adhere to platform-specific design guidelines"
    ),
    emoji("⚡ Mobile Development and PWA in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of AI technologies (Chatgpt-3, RASA...) and third party services (AWS, GCP, AZURE, Firebase, Google Maps, Stripe...)"
    ),
    emoji("⚡ Leverage Blockchain Development like Crypto, Casino")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "EtherJs",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "BitBucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fab fa-confluence"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kennesaw State University",
      logo: require("./assets/images/kennesawUniversity.png"),
      subHeader: "Bachelor's degree in Computer Science",
      duration: "Sep 2013 - Aug 2016",
      desc: "Engaged in various workshops, including Agile Development, Cloud Computing, and Cybersecurity, gaining practical skills and industry insights.",
      descBullets: [
        "Academic Excellence: Graduated with distinction, placing in the top 10% of my class.",
        "Vice President (2016): Led a team of 10 in organizing monthly tech talks, coding workshops, and networking events with industry leaders, resulting in a 25% increase in membership engagement."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "99%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "98%"
    },
    {
      Stack: "Programming",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Aimpact",
      companylogo: require("./assets/images/aimpact.png"),
      date: "Mar 2022 – May 2025",
      descBullets: [
        "Spearhead full-stack development with React, Angular, Vue, Node.js, PHP, MongoDB, and AWS, enhancing user experience and system scalability.",
        "Implemented state management in complex SPAs using React Hooks and optimized Angular and Vue applications with the latest features.",
        "Designed reusable UI components with Styled Components and TailwindCSS, and integrated GPT-3 for enriched user interaction.",
        "Developed RESTful APIs and robust PWAs, improving offline functionality and push notification integration.",
        "Built and optimized cross-platform mobile apps with React Native and native development tools.",
        "Applied agile practices for sprint planning and delivery, conducted code reviews, and led junior developer mentorship.",
        "Set up application monitoring, analyzed performance metrics, and adapted strategies based on user engagement data."
      ]
    },
    {
      role: "Software Engineer",
      company: "EE Solutions",
      companylogo: require("./assets/images/eeSolutions.jpg"),
      date: "May 2019 – Feb 2022",
      descBullets: [
        "Engineered full-stack web applications using React, Angular, Vue, Node.js, C#, Java, and Python, focusing on creating scalable and secure solutions.",
        "Enhanced application performance with Next.js by employing server-side rendering and static generation.",
        "Embraced TypeScript for type-safe, maintainable code, applying OOP, FP, and FRP methodologies.",
        "Implemented Nest.js for efficient dependency management and built interactive API documentation with its OpenAPI integration.",
        "Developed high-quality, maintainable React Native mobile apps, incorporating Motion UI for dynamic user interfaces.",
        "Leveraged AWS Lambda in a serverless architecture for authentication, payment processing, and notifications, streamlining operations.",
        "Integrated Google Analytics, Stripe, and SendGrid to deliver scalable, secure application features."
      ]
    },
    {
      role: "Software Developer",
      company: "Cheetah Agency",
      companylogo: require("./assets/images/cheetahAgency.png"),
      date: "Nov 2017 – Apr 2019",
      descBullets: [
        "Developed frontends with React, Angular, and Vue, focusing on modular design, dynamic routing, and engaging UX with Vue's advanced features.",
        "Implemented voice search using Web Speech API and Google Cloud Speech-to-Text, enhancing user interactivity.",
        "Introduced Dark Mode for improved accessibility and user comfort in various lighting conditions.",
        "Adhered to web standards for responsive design, cross-browser compatibility, and SEO to optimize quality and performance.",
        "Strengthened web app security using SSL, JWT, and OAuth for encryption and access control.",
        "Engineered backend PHP functionalities for course management, progress tracking, email notifications, and file handling.",
        "Created a flexible GraphQL API with PHP for efficient data querying and manipulation."
      ]
    },
    {
      role: "Junior Developer",
      company: "OUTLIANT",
      companylogo: require("./assets/images/outliant.jpg"),
      date: "SEP 2016 – OCT 2017",
      descBullets: [
        "Built responsive UIs with HTML, CSS, and JavaScript that worked well across browsers and devices.",
        "Used REST APIs and JSON to handle data efficiently in web and mobile apps.",
        "Tested and fixed bugs to keep apps running smoothly.",
        "Used tools like jQuery and Bootstrap to speed up development and add features.",
        "Kept up with new tech and trends to keep improving my frontend and mobile dev skills."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/coachLogo.png"),
      projectName: "E-Commerce",
      projectDesc: "Retail Apparel and Fashion, 320K followers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://coach.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/moenyminxLogo.jpg"),
      projectName: "Financial Service",
      projectDesc: "Investments & Money Goals, in One Place, 125 followers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.moneyminx.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.jpg"),
      projectName: "Staffing and Recruiting",
      projectDesc: "Digital recruitment and staffing, 2K followers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/duelbitsLogo.jpg"),
      projectName: "Casino",
      projectDesc:
        "Gambling Facilities and Casinos Abraham de Veerstraat, 3K followers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://duelbits.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Mobile Web Specialist - Google",
      subtitle:
        "Completed Certifcation from Google for Mobile & Web Development on 18th Apr 2022",
      image: require("./assets/images/mobilewebLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certificate",
          // url: "https://drive.google.com/file/d/1DtBUSQamf2p67AEw__TIOHyMr3Je_kku/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Aarhus 2021",
      slides_url:
        "https://docs.google.com/presentation/d/1yJzR4Ku2TkN2MFLHm3oR4AzpHixg60N2A57UqzU4RBA/edit?usp=sharing",
      event_url:
        "https://m.facebook.com/GDGAalborg/videos/meet-likeminded-people-on-devfest2021where-campus-ucn-at-sofiendalsvejwhen-frida/430164522121836/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 305 771 2135",
  email_address: "gerson.stuva@aimpacthk.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable
};
