import { About } from "../components/about.js";
import { ActivityCard } from "../components/activityCard.js";
import { MoreInfo } from "../components/moreInfo";
import React from "react";
import "./CV.css";

export class Cv extends React.Component {
  constructor(props) {
    super(props);

    /*Establish the screen size at the start*/
    if (window.matchMedia("(min-width: 800px)").matches) {
      this.state = { device: "desktop" };
    } else {
      this.state = { device: "mobile" };
    }

    this.handleChange = this.handleChange.bind(this);
  }

  /*Event handler for when the screen size changes */
  handleChange(mediaQuery) {
    if (mediaQuery.matches) {
      // If media query matches
      this.setState({ device: "desktop" });
    } else {
      this.setState({ device: "mobile" });
    }
  }

  render() {
    /*Event listener for screen size changes, from 
    https://www.w3schools.com/howto/howto_js_media_queries.asp */
    var mediaQuery = window.matchMedia("(min-width: 800px)");
    mediaQuery.addListener(this.handleChange);

    return (
      <div className="cv">
        <div className="side-section">
          <About skills={currentStack} />
          {/*This should show up under the about section only on desktop devices*/}
          {this.state.device === "desktop" && (
            <MoreInfo skills={currentSkills} id="more-info-desktop" />
          )}
        </div>
        <div className="main-section">
          <ActivityCard activities={workActivities} title="Work experience" />
          <ActivityCard activities={educationActivities} title="Education" />
          <ActivityCard activities={awards} title="Awards" />
          <ActivityCard activities={courses} title="Courses" />
          {/*This should show up under the main section only on mobile devices*/}
          {this.state.device === "mobile" && (
            <MoreInfo skills={currentSkills} id="more-info-desktop" />
          )}{" "}
        </div>
      </div>
    );
  }
}

/*Data to populate the various lists*/
const currentSkills = [
  "English - native",
  "Software development",
  "Product management",
  "Dutch - fluent",
  "French - fluent",
  "Spanish - fluent",
  "Setswana - conversational",
];

const currentStack = [
  "Node.js",
  "Typescript",
  "JavaScript",
  "Express",
  "React",
  "Firebase",
  "Java",
  "Spring Boot",
  "C#",
  ".NET",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Firestore",
  "MongoDB",
  "Github Actions",
  "Gitlab",
  "Azure",
  "Google CLoud Platform",
  "AWS",
  "Pulumi",
  "Serverless",
  "Docker",
  "Kubernetes",
  "Heroku",
  "Mocha",
  "Jest",
  "Appium",
  "Mock Server",
  "Testcontainers",
  "TDD",
  "Swagger",
  "HTML",
  "CSS",
  "Bootstrap",
];

const courses = [
  {
    title: "Certified full-stack web & software engineer bootcamp",
    institution: "HyperionDev",
    dates: "March 2021 - September 2021",
  },
  {
    title: "Individual certificates in coding languages and frameworks",
    institution: "Codecademy",
    dates: "March 2021 - ongoing",
  },
  {
    title: "Introduction to Functional Programming with Python I & II",
    institution: "University of Michigan, via Coursera",
    dates: "January 2018 - May 2018",
  },
];
const awards = [
  {
    title:
      "First prize in Neuro Linguistic Programming & Artificial Intelligence hackathon",
    institution: "Botlhale AI",
    dates: "June 2021",
    location: "Cape Town, South Africa",
    description:
      "Came first place in the hackathon themed 'Disrupting Monolingualism in Digital Spaces'. Our project involved a chatbot, powered by Botlhale's multilingual NLP/AI software, that can translate pharmaceutical information leaflets in real time for non-native English speakers in South Africa.",
  },
  {
    title: "Second prize in Open Payments hackathon",
    institution: "Interledger",
    dates: "October 2024",
    location: "Cape Town, South Africa",
    description:
      "Our team extended the Interledger Protocol to enable multi-party and multi-channel payment approvals.",
  },
  {
    title: "Second prize in AI 4 Women hackathon",
    institution: "Girlcode ZA",
    dates: "August 2023",
    location: "Cape Town, South Africa",
    description:
      "Our team developed an index that rates AI models on how likely they are to include gender bias, and offers mitigation strategies for the model.",
  },
];

const workActivities = [
  {
    title: "Software Engineer",
    institution: "Peach Payments",
    dates: "April 2024 - April 2025",
    location: "Cape Town, South Africa",
    description:
      "Working as a full-stack software engineer for a payment gateway. I am responsible for designing, building, deploying and maintaining billing solutions along with their required infrastructure. I work mostly in Typescript and SQL, using AWS lambdas, ECS, S3, SQS queues, Serverless, and Gitlab pipelines.",
  },
  {
    title: "Software Engineer",
    institution: "WhereIsMyTransport",
    dates: "July 2022 - July 2023",
    location: "Cape Town, South Africa",
    description:
      "Worked as a full-stack software engineer on a public transport mobile app. Within the microservices architecture I was mostly responsible for building and maintaining our back-end services, infrastructure, deployment process, and testing framework. Worked principally in Typesript and Java, using various tools and frameworks such as Firebase, React, Appium, Azure pipelines, Github Actions, Pulumi, Airflow, Flutter, and .NET.",
  },
  {
    title: "Freelance code reviewer",
    institution: "Cogrammar",
    dates: "November 2021 - June 2022",
    location: "Cape Town, South Africa",
    description:
      "Performed live code reviews for bootcamp students at the UK-based Makers Academy. It involves giving feedback on their coding process, including Test Driven Development, modelling, debugging, refactoring, version control, language conventions, etc.",
  },
  {
    title: "Chief Marketing Officer",
    institution: "HouseME",
    dates: "February 2018 - October 2021",
    location: "Cape Town, South Africa",
    description:
      "Started out as Head of Strategy, where I served as go-between for our tech and operations teams, collecting requirements, project managing deployments, and reporting on production issues. Product managed the roll-out of a new CRM, implemented email automation, and oversaw a domain-wide data migration project. After being promoted to CMO, I applied a data-centric approach to all our marketing activities and achieved a reduction of 65% to our customer acquisition cost. Oversaw the migration of our entire website to a Content Management System, coupled with a UX overhaul that led to a conversion rate improvement of 30%. Built over a dozen pages and landing pages using Wordpress. Rolled out an SEO strategy that saw web traffic increase by 400% over 2 years. Pioneered the automation of our SMS and email campaigns.",
  },
  {
    title: "Brussels Director",
    institution: "ONE",
    dates: "September 2011 - December 2016",
    location: "Brussels, Belgium",
    description:
      "Started as Policy Manager and was subsequently promoted to Deputy Brussels Director and eventually Brussels Director, leading ONE's lobbying efforts towards the European Union. Successfully advocated for more transparency in financial and money laundering legislation. Led a team of 7 persons and a volunteer network of 300, and opened a new office in the Netherlands.",
  },
  {
    title: "Advocacy Manager",
    institution: "Broederlijk Delen",
    dates: "February 2009 - September 2011",
    location: "Brussels, Belgium",
    description:
      "My first job as a lobbyist involved advocating for more transparency in the extractive industries, particularly in Central Africa and Latin America.",
  },
  {
    title: "Intern",
    institution: "European Commission, Save the Children",
    dates: "September 2007 - February 2009",
    location: "Brussels, Belgium",
    description:
      "Learned my trade as a lobbyist by interning at a non-profit organization's Brussels-based EU advocacy branch, and subsequently at a government department of the EU itself.",
  },
];

const educationActivities = [
  {
    title: "Certified full-stack web & software engineer bootcamp",
    institution: "HyperionDev",
    dates: "March 2021 - September 2021",
    location: "Cape Town, South Africa",
  },
  {
    title: "MBA, electives in entrepreneurship",
    institution: "University of Cape Town",
    dates: "January 2017 - December 2017",
    location: "Cape Town, South Africa",
  },
  {
    title: "BA, major in economics",
    institution: "Wellesley College",
    dates: "September 2003 - June 2007",
    location: "Boston, USA",
  },
  {
    title: "High school degree, major in math and science",
    institution: "Lyceum van Antwerpen",
    dates: "September 1997 - June 2003",
    location: "Antwerp, Belgium",
  },
];

//export default Cv;
