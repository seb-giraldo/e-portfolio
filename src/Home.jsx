import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ProjectCard from "./components/ProjectCard";
import projectArray from "../PROJECT_LIST";
import Languages from "./components/Languages";

const App = () => {
  return (
    <>
      <section id="about-me">
        <div className="flex flex-1">
          <div className="about-me__info row">
            <div className="about-me__info--container">
              <figure className="about-me__picture--mask">
                <img
                  src="/headshot.jpg"
                  className="about-me__picture"
                  alt="Sebastian Giraldo headshot"
                />
              </figure>
              <h1 className="about-me__info--title">
                Hello, I'm <span className="text--green">Sebastian.</span>
                <span className="wave">&nbsp;👋🏼</span>
              </h1>
              <p className="about-me__info--para">
                I am a
                <strong className="text--green">
                  &nbsp;Junior Frontend Software Engineer&nbsp;
                </strong>
                looking to add a keen eye and attention to detail to your team.
                I am passionate about creating intuitive, interesting, and
                accessible web experiences that users love. <br />
                Let's get to work!
              </p>
              <div className="about-me__links">
                <a
                  href="https://www.linkedin.com/in/sebastian-giraldo-mejia/"
                  className="about-me__link"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href="https://github.com/seb-giraldo"
                  className="about-me__link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:sebastiangiraldo96@gmail.com"
                  className="about-me__link"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <figure className="about-me__img--container">
                <img
                  className="about-me__img"
                  src="/undraw_code-thinking_tqs9.svg"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Languages />

      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              Here are some of my <span className="text--green">projects</span>
            </h1>
            <ul className="project__list">
              {projectArray.map((project, i) => (
                <ProjectCard
                  key={i}
                  project={project}
                  fadeDirection={i % 2 === 0 ? "left" : "right"}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
