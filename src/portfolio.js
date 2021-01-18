/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Matthew Smith",
  logo_name: "Matthew Smith",
  nickname: "Bubba",
  subTitle:
    "A hardworking individual who will make sure deadlines are met and help others along the way.",
  resumeLink:
    "https://docs.google.com/document/d/1kK3Euw6zOCExEUr4K97wt1RIJ9G9CelYN__7CvBDim0/edit?usp=sharing",
  portfolio_repository: "https://github.com/MatthewSmith23?tab=repositories",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/MatthewSmith23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/matthew-smith-504a781a1/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCIwCADEJ9dB6tUPLEaqXRSw/videos",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:smith0223@ymail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/BubbaSmith32",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mattbubba.smith",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/coding.bub/",
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
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using  React Native",
        "⚡ Creating application backend in Node & Express",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Wilmington University",
      subtitle: "B.S. in Marketing",
      logo_path: "WILMU.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019-Present",
      descriptions: [
        "⚡ I have studied branding and promotion of products & services.",
        "⚡ Also demonstrating my communication skills with valid and reliable research",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.wilmu.edu/",
    },
    {
      title: "Middlesex Community College",
      subtitle: "Liberal Arts - Business A.A.",
      logo_path: "MCC.jpeg",
      alt_name: "IIITDM Kurnool",
      duration: "2017-2018",
      descriptions: [
        "⚡ Building a solid foundation on the basics of business.",
        "⚡ Learning the fundamentals and instilling effective work ethic.",
        "⚡ Studied business theories & aquired skilles in management and marketing. ",
      ],
      website_link: "https://www.middlesexcc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "",
      logo_path: "RUT.jpg",
      certificate_link: "",
      alt_name: "Rutgers University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Coming out of this program I am open to work anywhere and to get experience anywhere I can! ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Delivery Driver",
          company: "DoorDash",
          company_url: "",
          logo_path: "doordash-square-red.jpg",
          duration: "Feb 2020 - Present",
          location: "Northern Delaware",
          description:
            "Evaluate customer needs and determined appropriate action, referring thier questions to management when necessary. Selected the most efficient routes in compliance with delivery instructions. Resolved customer complaints and adjusted orders. Operated motor vehicles in a safe and efficient manner.",
          color: "#9b1578",
        },
        {
          title: "Valet Manager",
          company: "Parking Solutions",
          company_url: "",
          logo_path: "PARKING.png",
          duration: "Feb 2016 - Jan 2019",
          location: "Various locations in New Jersey",
          description:
            "Coordinate parking services provided to patrons. Essential responsibilites include setting work schedules, recruiting and training staff, assigning work, monitoring personnel performance, and collaborating with business owners.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Currently pursuing",
          company: "Anywhere",
          company_url: "",
          logo_path: "internship-759.jpg",
          duration: "Present",
          location: "New Jersey",
          description:
            "Applying and interviewing in the marketing areas of Technology, Sports, and Manufacturing.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Food Bank",
          company: "",
          company_url: "",
          logo_path: "OIP.jpeg",
          duration: "March 2016 - May 2018",
          location: "New Jersey",
          description:
            "Run clothing and food drives to collect and provide required essentials to the less fortunate.",
          color: "#4285F4",
        },
        {
          title: "Homeless Shelter",
          company: "",
          company_url: "",
          logo_path: "OIP (1).jpeg",
          duration: "Aug 2016 - Present",
          location: "New Jersey",
          description:
            "Warehouse work, including unloading delivery trucks, organizing and stockig pantry shelves and retrieving goods for assembly lines. Work on the assembly lines to pack boxes for the needy.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Down below I have a few of my projects listed using a bunch of different technologies & providing my github link to all of my repos.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "CHUNKK.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I will be glad to communicate with you !",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "Shoot me an email if you have any questions!",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Email Me",
    subtitle: "smith0223@ymail.com",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
