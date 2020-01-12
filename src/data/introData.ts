import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
  FaGraduationCap,
  FaRegUser,
} from "react-icons/fa"

const intro = {
  name: "Enoch Chen",
  desc: "cs @ cornell",
  aboutData: [
    "I am currently an undergrad at Cornell University studying Computer Science. I am passionate about designing effective and reliable systems. My goal is to make things that others can enjoy well.",
    "In my free time, I like tinkering with keyboards.",
    "Check out some of my stuff <a href = '#projects'>here</a>.",
  ],
  iconData: [
    {
      icon: FaUser,
      icon2: FaRegUser,
      label: "About",
    },
    {
      icon: FaFlask,
      label: "Projects",
      link: "#projects",
    },
    {
      icon: FaGithub,
      label: "Github",
      link: "http://github.com/Enochen",
      external: true,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/enochen728/",
      external: true,
    },
    {
      icon: FaGraduationCap,
      label: "Transcript",
      link: "/misc/2020-01-04-Transcript.pdf",
      external: true,
    },
    {
      icon: FaNewspaper,
      label: "Resume",
      link: "/misc/Enoch Chen resume.pdf",
      external: true,
    },
  ],
}

export default intro