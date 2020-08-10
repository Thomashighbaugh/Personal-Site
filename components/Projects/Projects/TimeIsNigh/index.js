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

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet
            pictureName="portfolio-last.png"
            altText="Gatsby Portfolio Site"
          />
        </div>
        <div className="project__details project__right">
          <div className="project__title">
            <h3 className="heading-3">Gatsby Portfolio</h3>
            <div className="tag-icons">
              <span className="tag-icon">GatsbyJS</span>
              <span className="tag-icon">GraphQL</span>
              <span className="tag-icon">SCSS</span>
            </div>
          </div>
          <div className="project__description">
            <p>
              Portfolio site which removes unnecessary clutter from
              the UI while maintaining an attractive interface.
            </p>
            <ul>
              <li>
                <FaStar />
                Nested stylesheet, custom graphics, tasteful
                colorscheme
              </li>
              <li>
                <FaStar />
                Multiple pages using the Gatsby Link component to
                break from monotonous single page layouts.
              </li>
              <li>
                <FaStar />
                Custom card components to house various content
              </li>
              <li>
                <FaStar />
                SEO Optimized
              </li>
            </ul>
          </div>
          <div className="project__links">
            <a
              href="https://github.com/Thomashighbaugh/portfolioGatsbySCSS"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
            >
              GitHub
              <FaGithub />
            </a>
            <a
              href="https://portfolio-gatsby-scss.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
              title="DisappearingBarns live site"
            >
              Website
              <FaDesktop />
            </a>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
export default Project;
