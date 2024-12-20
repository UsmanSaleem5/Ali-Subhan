import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, CRUD APIs, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Express, CRUD APIs, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
  
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Dost Logic",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "mongoDB","NodeJs","ExpressJs" ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Freelancing",
    description: `Designed and developed user interfaces for web applications using HTML , CSS and . Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vanilla js", "PhP"],
  },
  {
    year: "2021 - 2022",
    role: "Programmer",
    company:"Freelancing",
    description: `Learning new programing language like Python ,C++ etc. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams which help me lot of in the feild of programing.`,
    technologies: ["Python", "C", "C++", "C#"],
  },

];

export const PROJECTS = [

  {
    title: "AlphaCrypt VPN Landing Page",
    description: "The AlphaCrypt VPN Landing Page is a fully responsive and modern web interface designed to promote AlphaCrypt VPN, a secure and fast VPN service. The page focuses on delivering an engaging user experience while showcasing the product’s features, benefits, and pricing plans.",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wIn7uqOWP7MaFAodUjnxw6Ua9pveZC4ijMbjlcIrA7twDA56y3Dpj24ZTUBFT0xIQ_0&usqp=CAU",
    liveDemo: "https://alphacrypt-vpn.example.com",
    github: "https://github.com/yourname/alphacrypt-vpn",
  },

  {
    title: "Admin Pannel",
    image: project2,
    description:
      "A powerful and intuitive Admin Panel designed to streamline user management and simplify backend operations. Built with the MERN stack, this panel includes dynamic user tables with pagination, custom filtering options, and real-time status toggling between active and suspended states. Implemented with responsive design.",
    technologies: ["React", "ExpressJS", "NodeJS", "MongoDB"],
  },
  {
    title: "Nft-MarketPlace Website",
    image: project1,
    description:
      "A fully functional NFT e-commerce website with features like product listing, shopping cart, and user authentication. and whit that also have alot of pages like User Profile ",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
  },

  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
   
  },
];

export const CONTACT = {
  address: "IST University , Islamabad",
  phoneNo: "+92 346-9613122 ",
  email: "alisubhansaleem@gmail.com",
};
