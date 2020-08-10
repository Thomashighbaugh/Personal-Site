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

function OpitxProject() {
  return (
    <div className="project">
      <div className="project__video project__left">
        <PictureSet pictureName="Opitx.png" altText="Opitx" />
      </div>
      <div className="project__details project__right">
        <div className="project__title">
          <h3 className="heading-3">Opitx Markdown Editor</h3>
          <div className="tag-icons">
            <span className="tag-icon">Electron</span>
            <span className="tag-icon">React</span>
            <span className="tag-icon">SCSS</span>
          </div>
        </div>
        <div className="project__description">
          <p>
            Experiment with Electron and solution to Markdown editor
            woes, this Markdown editor implements the basic save
            feature that so many other options lacked and is packaged
            in several formats to work across Linux distros.
          </p>
          <ul>
            <li>
              <FaStar />
              Prism.js Syntax Highlighting
            </li>
            <li>
              <FaStar />
              Save Functionality Allow for User Control
            </li>
            <li>
              <FaStar />
              Minimalist Dark Interface
            </li>
            <li>
              <FaStar />
              Packaged in Multiple Formats using Webpack{' '}
            </li>
            <li>
              <FaStar />
              Full Documentation Site
            </li>
          </ul>
        </div>
        <div className="project__links">
          <a
            href="https://github.com/Thomashighbaugh/Opitx"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
          >
            GitHub
            <FaGithub />
          </a>
          <a
            href="https://opitx-docs.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
            title="Jekyll site"
          >
            Documentation
            <FaDesktop />
          </a>
        </div>
      </div>

    </div>
  );
}
export default OpitxProject;
