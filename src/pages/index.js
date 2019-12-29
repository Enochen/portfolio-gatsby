import React from "react"
import BigName from "../components/intro/nameHeader"
import Section from "../components/section"
import IconLink from "../components/intro/iconLink"
import IconGroup from "../components/intro/iconGroup"
import Title from "../components/title"
import {
  FaGithub,
  FaNewspaper,
  FaLinkedin,
  FaUser,
  FaFlask,
} from "react-icons/fa"

const Heading = () => (
  <Section>
    <BigName name="Enoch Chen" desc="cs @ cornell" />
    <IconGroup>
      <IconLink label="About" icon={FaUser} link="#about" />
      <IconLink label="Projects" icon={FaFlask} link="#projects" />
      <IconLink
        label="Github"
        icon={FaGithub}
        link="http://github.com/Enochen"
        external={true}
      />
      <IconLink
        label="LinkedIn"
        icon={FaLinkedin}
        link="https://www.linkedin.com/in/enochen728/"
        external={true}
      />
      <IconLink
        label="Resume"
        icon={FaNewspaper}
        link="/Enoch Chen cv.pdf"
        external={true}
      />
    </IconGroup>
  </Section>
)

const Projects = () => (
  <Section id="projects" wide={true}>
    <Title text="Projects"></Title>
  </Section>
)

export default () => (
  <>
    <Heading />
  </>
)
