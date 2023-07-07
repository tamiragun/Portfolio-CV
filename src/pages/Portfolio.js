import React from "react";
import { PortfolioCard } from "../components/portfolioCard";

export class Portfolio extends React.Component {
  render() {
    return <PortfolioCard projects={portfolioProjects} />;
  }
}

const portfolioProjects = [
  {
    title: "RainbowMeds",
    stack: ["Python", "Flask", "HTML", "Bootstrap"],
    description:
      'This project involves a chatbot, powered by Botlhale\'s multilingual NLP/AI software, that can translate pharmaceutical information leaflets in real time for non-native English speakers in South Africa. I worked on it with 3 others in the June 2021 hackathon themed "Disrupting Monolingualism in Digital Spaces". We won first place.',
    github_url: "https://github.com/tamiragun/RainbowMeds",
    prod_url: "https://tamiragun.github.io/RainbowMeds/",
  },
  {
    title: "Doc2Blog",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "React",
      "Bootstrap",
      "Heroku",
    ],
    description:
      "For our HyperionDev graduate programme, my teammate and I had to build a basic deadlines management, file upload, and spell check system for bloggers.",
    github_url: "https://github.com/tamiragun/Doc2Blog",
    //prod_url: "https://doc2blog.herokuapp.com/",
    prod_url: null,
  },
  {
    title: "FoodQuick",
    stack: ["Java", "SQL Server", "Docker"],
    description:
      "This capstone project from the Java module at HyperionDev lets a user to place a basic food order from a fictional restaurant. It reads file input, takes user input, updates the database, and prints out new files. ",
    github_url: "https://github.com/tamiragun/FoodQuick",
    prod_url: null,
  },
  {
    title: "Git search",
    stack: ["Node", "Express", "JavaScript", "React", "CSS"],
    description:
      "This capstone project for the Node/JS module at HyperionDev, I built a search function that retrieves a user from the Github and/or Gitlab API, and returns their basic profile information. You can also drill down into their top repositories and see their latest commits.",
    github_url: "https://github.com/tamiragun/capstone-git-user-search-app",
    prod_url: null,
  },
  {
    title: "Wedding bells",
    stack: ["PHP", "MySQL", "Wordpress"],
    description:
      "A paired project where my brother made the front end of his wedding website on Wordpress and I implemented some back-end and database functionality to enable guests to reserve gifts on the registry.",
    github_url:
      "https://github.com/tamiragun/wedding-register-wordpress-plugin",
    //prod_url: "http://www.buggenburg.be/",
    prod_url: null,
  },
  {
    title: "Ricca furniture",
    stack: ["HTML", "CSS", "JavaScript", "Netlify"],
    description:
      "As a part of the FEDSA mentoring programme, I built a homepage for a fictitious furniture company, based on a Figma design and some interactive feature requests.",
    github_url: "https://github.com/tamiragun/fedsa-project-1",
    prod_url: "https://ricca.netlify.app/",
  },
  {
    title: "Hangman",
    stack: ["JavaScript", "React", "CSS", "Heroku"],
    description:
      "Play the famous word guessing game against the computer with this single page application.",
    github_url: "https://github.com/tamiragun/hangman",
    // prod_url: "https://tamiragun-hangman.herokuapp.com/",
    prod_url: null,
  },
  {
    title: "Cool tech",
    stack: ["PHP", "Laravel", "SQL Server"],
    description:
      "This capstone project for the PHP module at HyperionDev had me build out a basic blog for the fictitious company 'Cool Tech'. It has navigation, search functionality, and loads of Latin...",
    github_url: "https://github.com/tamiragun/capstone-laravel-blog",
    prod_url: null,
  },
  {
    title: "Monte Hall",
    stack: ["JavaScript", "React", "CSS", "Netflify"],
    description:
      "Test this famous statistics riddle for yourself, by opening doors and winning prizes on my React app.",
    github_url: "https://github.com/tamiragun/Monty-Hall",
    prod_url: "https://monte-hall.netlify.app/",
  },
  {
    title: "Wedding patchwork",
    stack: ["HTML", "SCSS", "Sass", "JavaScript", "jQuery"],
    description:
      "I'm getting married! For the capstone project concluding the front-end portion of the course at HyperionDev, I decided to have a go at a website I would have otherwise had built by someone else! Check out the website or my GitHub repository. You're invited to collaborate, although perhaps not to the wedding!",
    github_url: "https://github.com/tamiragun/capstone-html-css-js-website",
    prod_url: null,
  },
];
