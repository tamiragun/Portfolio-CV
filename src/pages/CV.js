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
          <ActivityCard activities={courses} title="Courses" />
          <ActivityCard activities={awards} title="Awards" />
          <ActivityCard activities={workActivities} title="Work experience" />
          <ActivityCard activities={educationActivities} title="Education" />
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
  "Scrum",
  "Product management",
  "Dutch - fluent",
  "French - fluent",
  "Spanish - fluent",
];

const currentStack = [
  "Java",
  "Spring Boot",
  "Node.js",
  "Express",
  "PHP",
  "Laravel",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "JWT",
  "Docker",
  "Git",
  "Github",
  "Heroku",
  "Netlify",
  "JavaScript",
  "Mocha",
  "Jest",
  "TDD",
  "React",
  "jQuery",
  "HTML",
  "CSS",
  "Bootstrap",
];

const courses = [
  {
    title: "Certified full-stack web & software engineer bootcamp",
    institution: "HyperionDev",
    dates: "March 2021-September 2021",
  },
  {
    title: "Individual certificates in coding languages and frameworks",
    institution: "Codecademy",
    dates: "March 2021-ongoing",
  },
  {
    title: "Introduction to Functional Programming with Python I & II",
    institution: "University of Michigan, via Coursera",
    dates: "January 2018-May 2018",
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
      "Participated as developer in a team of 4 that won first place in the June 2021 hackathon themed 'Disrupting Monolingualism in Digital Spaces'. Our project involved a chatbot, powered by Botlhale's multilingual NLP/AI software, that can translate pharmaceutical information leaflets in real time for non-native English speakers in South Africa.",
  },
];

const workActivities = [
  {
    title: "Freelance code reviewer",
    institution: "CoGrammar",
    dates: "November 2021-current",
    location: "Cape Town, South Africa",
    description:
      "I perform live code reviews for bootcamp students at the UK-based Makers Academy. It involves giving feedback on their coding process, including Test Driven Development, modelling, debugging, refactoring, version control, language conventions, etc.",
  },
  {
    title: "Chief Marketing Officer",
    institution: "HouseME",
    dates: "February 2018-current",
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
    dates: "February 2009-September 2011",
    location: "Brussels, Belgium",
    description:
      "My first job as a lobbyist involved advocating for more transparency in the extractive industries, particularly in Central Africa and Latin America.",
  },
  {
    title: "Intern",
    institution: "European Commission, Save the Children",
    dates: "September 2007-February 2009",
    location: "Brussels, Belgium",
    description:
      "Learned my trade as a lobbyist by interning at a non-profit organization's Brussels-based EU advocacy branch, and subsequently at a government department of the EU itself.",
  },
];

const educationActivities = [
  {
    title: "Certified full-stack web & software engineer bootcamp",
    institution: "HyperionDev",
    dates: "March 2021-September 2021",
    location: "Cape Town, South Africa",
  },
  {
    title: "MBA, electives in entrepreneurship",
    institution: "University of Cape Town",
    dates: "January 2017-December 2017",
    location: "Cape Town, South Africa",
  },
  {
    title: "BA, major in economics",
    institution: "Wellesley College",
    dates: "September 2003-June 2007",
    location: "Boston, USA",
  },
  {
    title: "High school degree, major in math and science",
    institution: "Lyceum van Antwerpen",
    dates: "September 1997-June 2003",
    location: "Antwerp, Belgium",
  },
];

//export default Cv;
