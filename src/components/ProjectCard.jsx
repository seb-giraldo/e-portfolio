import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink, faBuilding } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ project, fadeDirection }) => {
  AOS.init({
    duration: 550,
    once: true,
  });

  return (
    <li className="project" data-aos={`fade-${fadeDirection}`}>
      <div className="project__wrapper">
        <img
          className="project__img"
          src={`/${project.image}`}
          alt="portfolio"
        />
        <div className="project__description">
          <h3 className="project__description--title">{project.title}</h3>
          <h4 className="project__description--sub-title">
            {project.languages}
          </h4>
          <p
            className="project__description--para"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <div className="project__description--links">
            <a
              href={project.github}
              target="_blank"
              className="project__description--link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={project.projectLink}
              target="_blank"
              className="project__description--link"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
            {project.companyPage && (
              <a
                href={project.companyPage}
                target="_blank"
                className="project__description--link"
              >
                <FontAwesomeIcon icon={faBuilding} />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
