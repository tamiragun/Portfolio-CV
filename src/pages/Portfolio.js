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
    title: "FoodQuick",
    stack: ["Java", "SQL Server", "Docker"],
    description:
      "This capstone project from the Java module at HyperionDev lets a user to place a basic food order from a fictional restaurant. It reads file input, takes user input, updates the database, and prints out new files. ",
    github_url: "https://github.com/tamiragun/FoodQuick",
    prod_url: null,
  },
  {
    title: "Wedding bells",
    stack: ["HTML", "SASS", "JavaScript", "jQuery"],
    description:
      "I'm getting married! For the capstone project concluding the front-end portion of the course at HyperionDev, I decided to have a go at a website I would have otherwise had built by someone else! Check out the website or my GitHub repository. You're invited to collaborate, although perhaps not to the wedding!",
    github_url: "https://github.com/tamiragun/capstone-html-css-js-website",
    prod_url: null,
  },
];
