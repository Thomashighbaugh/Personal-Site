import dynamic from 'next/dynamic';
import PictureSet from '../../../PictureSet/PictureSet';
import Spinner from '../../../Spinner/Spinner';
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

function NADProject() {
  return (
    <div className="project">
      <div className="project__video project__right">
        <PictureSet
          pictureName="Not-Another-Devlog.png"
          altText="Not Another Devlog"
        />
      </div>
      <div className="project__details project__left">
        <div className="project__title">
          <h3 className="heading-3">Not Another Devlog</h3>
          <div className="tag-icons">
            <span className="tag-icon">GatsbyJS</span>
            <span className="tag-icon">Prism.js</span>
          </div>
        </div>
        <div className="project__description">
          <p>Gatsby Blog</p>
          <ul>
            <li>
              <FaStar />
              Pagination
            </li>
            <li>
              <FaStar />
              Reimagined, Stylish Design
            </li>
            <li>
              <FaStar />
              Functional Template built with low overhead from the end
              user in mind
            </li>
            <li>
              <FaStar />
              Code Block Syntax Highlighting
            </li>
          </ul>
        </div>
        <div className="project__links">
          <a
            href="https://github.com/Thomashighbaugh/Not-Another-Devlog"
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            GitHub
            <FaGithub />
          </a>
          <a
            href="https://not-another-devlog.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
            title="Blog site"
          >
            Website
            <FaDesktop />
          </a>
        </div>
      </div>
    </div>
  );
}
export default NADProject;
