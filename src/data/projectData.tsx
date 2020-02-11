import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export interface ProjectInfo {
  name: string
  desc: JSX.Element
  tags: string[]
  live?: string
  github?: string
  image: string
}

export interface ProjectList {
  data: ProjectInfo[]
}

export const ProjectData: ProjectList = {
  data: [
    {
      name: 'cue',
      desc: (
        <p>
          I joined{' '}
          <OutboundLink
            href="https://cornelldti.org"
            target="_blank"
            rel="noopener"
          >
            Cornell Design & Tech Initiative
          </OutboundLink>{' '}
          in Fall 2019 as a Full Stack Developer. My team is responsible for
          cue, an event-discovery app for Cornell students at Ithaca. I
          developed a set of scripts to facilitate populating our event database
          with external data.
        </p>
      ),
      tags: ['HTML/CSS', 'Javascript', 'Python', 'ReactJS', 'Django'],
      live: 'https://www.cornelldti.org/Projects/events',
      github: 'https://github.com/cornell-dti/events-backend/',
      image: 'cue.jpg',
    },
    {
      name: 'Ask Palette',
      desc: (
        <p>
          Generate color palettes from your search terms! Uses Google Cloud
          Vision to extract colors from search terms. Developed as a hackathon
          project at{' '}
          <OutboundLink
            href="https://bigredhacks.com"
            target="_blank"
            rel="noopener"
          >
            BigRed//Hacks
          </OutboundLink>
          .
        </p>
      ),
      tags: ['HTML/CSS', 'Python', 'Flask', 'Google Cloud'],
      live: 'https://askpalette.appspot.com/',
      github: 'https://github.com/Enochen/askpalette',
      image: 'askpalette.png',
    },
    {
      name: 'This Website',
      desc: (
        <p>
          Over winter break, I decided to learn some new technologies and use
          them to put something together. It seemed like a good idea to make a
          personal website, and this is what came out of that idea.
        </p>
      ),
      tags: ['HTML/CSS', 'TypeScript', 'GatsbyJS', 'GraphQL', 'React/Preact'],
      github: 'https://github.com/Enochen/portfolio',
      image: 'portfolio.png',
    },
    {
      name: 'Half Bot Half Brain',
      desc: (
        <p>
          It\'s like Mad Libs, but better. The backend generates grammatically
          correct text from input with the help of spaCy. Developed as a
          hackathon project at{' '}
          <OutboundLink
            href="https://teenhacksli.com/"
            target="_blank"
            rel="noopener"
          >
            TeenhacksLI
          </OutboundLink>
          .
        </p>
      ),
      tags: ['HTML/CSS', 'JavaScript', 'Python', 'spaCy'],
      live: 'https://halfbothalfbrain.netlify.com/',
      github: 'https://github.com/ageor0114/nyit-hackathon',
      image: 'hbhb.png',
    },
  ],
}