import PropTypes from 'prop-types';
import { FaGithub, FaDesktop, FaStar } from 'react-icons/fa';
import React from 'react';

const Body = ({
  projectTitle,
  projectTag1,
  projectTag2,
  projectTag3,
  projectDescription,
  feature1,
  feature2,
  feature3,
  feature4,
  githubLink,
  hostedLink,
  hostedTitle,
}) => {
  return (
    <div>
      <div className="project__title">
        <h3 className="heading-3">{projectTitle}</h3>
        <div className="tag-icons">
          <span className="tag-icon">{projectTag1}</span>
          <span className="tag-icon">{projectTag2}</span>
          <span className="tag-icon">{projectTag3}</span>
        </div>
      </div>
      <div className="project__description">
        <p>{projectDescription}</p>
        <ul>
          <li>
            <FaStar />
            {feature1}
          </li>
          <li>
            <FaStar />
            {feature2}
          </li>
          <li>
            <FaStar />
            {feature3}
          </li>
          <li>
            <FaStar />
            {feature4}
          </li>
        </ul>
      </div>
      <div className="project__links">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
        >
          GitHub
          <FaGithub />
        </a>
        <a
          href={hostedLink}
          target="blank"
          rel="noopener noreferrer"
          title={hostedTitle}
        >
          Website
          <FaDesktop />
        </a>
      </div>
    </div>
  );
};

Body.propTypes = {
  projectTitle: PropTypes.string,
  projectTag1: PropTypes.string,
  projectTag2: PropTypes.string,
  projectTag3: PropTypes.string,
  projectDescription: PropTypes.string,
  feature1: PropTypes.string,
  feature2: PropTypes.string,
  feature3: PropTypes.string,
  feature4: PropTypes.string,
  githubLink: PropTypes.string,
  hostedLink: PropTypes.string,
  hostedTitle: PropTypes.string,
};
export default Body;
