import dynamic from 'next/dynamic';
import Spinner from '../../../Spinner/Spinner';
import PropTypes from 'prop-types';

/* eslint-disable */
/* eslint-disable */
const DynamicComponentWithNoSSR = dynamic(
  () => {
    return import('../../../ScrollMagic/scrollmagic');
  },
  { loading: () => <Spinner />, ssr: false },
);
/* eslint-enable */
/* eslint-enable */
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
        <h3 className="heading-3">{props.projectTitle}</h3>
        <div className="tag-icons">
          <span className="tag-icon">{props.projectTag1}</span>
          <span className="tag-icon">{props.projectTag2}</span>
          <span className="tag-icon">{props.projectTag3}</span>
        </div>
      </div>
      <div className="project__description">
        <p>{props.projectDescription}</p>
        <ul>
          <li>
            <FaStar />
            {props.feature1}
          </li>
          <li>
            <FaStar />
            {props.feature2}
          </li>
          <li>
            <FaStar />
            {props.feature3}
          </li>
          <li>
            <FaStar />
            {props.feature4}
          </li>
        </ul>
      </div>
      <div className="project__links">
        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
        >
          GitHub
          <FaGithub />
        </a>
        <a
          href={props.hostedLink}
          target="blank"
          rel="noopener noreferrer"
          title={props.hostedTitle}
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
