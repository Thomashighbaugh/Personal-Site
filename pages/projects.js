import Link from 'next/link';
import dynamic from 'next/dynamic';
import Layout from '../layout/Layout';
import PictureSet from '../components/PictureSet/PictureSet';
import Spinner from '../components/Spinner/Spinner';
/* eslint-disable */
/* eslint-disable */
const DynamicComponentWithNoSSR = dynamic(
  () => {
    return import('../components/ScrollMagic/scrollmagic');
  },
  { loading: () => <Spinner />, ssr: false },
);
/* eslint-enable */
/* eslint-enable */
import {
  FaGithub,
  FaDesktop,
  FaStar,
  FaArrowDown,
} from 'react-icons/fa';
import React from 'react';

const Projects = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR>
        <div className="Projects">
          <div className="projects">
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
                    Portfolio site which removes unnecessary clutter
                    from the UI while maintaining an attractive
                    interface.
                  </p>
                  <ul>
                    <li>
                      <FaStar />
                      Nested stylesheet, custom graphics, tasteful
                      colorscheme
                    </li>
                    <li>
                      <FaStar />
                      Multiple pages using the Gatsby Link component
                      to break from monotonous single page layouts.
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
            </div>            <div className="project">
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
                    Portfolio site which removes unnecessary clutter
                    from the UI while maintaining an attractive
                    interface.
                  </p>
                  <ul>
                    <li>
                      <FaStar />
                      Nested stylesheet, custom graphics, tasteful
                      colorscheme
                    </li>
                    <li>
                      <FaStar />
                      Multiple pages using the Gatsby Link component
                      to break from monotonous single page layouts.
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
            </div>
            <div className="project">
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
                      Functional Template built with low overhead from
                      the end user in mind
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
              <div className="project__video project__right">
                <PictureSet
                  pictureName="Not-Another-Devlog.png"
                  altText="Not Another Devlog"
                />
              </div>
            </div>

            <div className="project">
              <div className="project__video project__left">
                <PictureSet
                  pictureName="mydotfiles.png"
                  altText="My desktop demonstrating my dotfiles"
                />
              </div>
              <div className="project__details project__right">
                <div className="project__title">
                  <h3 className="heading-3">Dotfiles</h3>
                  <div className="tag-icons">
                    <span className="tag-icon">Linux</span>
                    <span className="tag-icon">Awesome WM</span>
                    <span className="tag-icon">
                      Customized Desktop Environment
                    </span>
                  </div>
                </div>

                <div className="project__description">
                  <p>
                    My extensive Linux configurations backed up with
                    Git and provisioned by a Makefile that also
                    provisions a fresh installation and features a
                    completely customized and finely tuned UI built on
                    top of AwesomeWM with Lua.
                  </p>
                  <ul>
                    <li>
                      <FaStar />
                      Thorough customization of dozens of programs,
                      custom executable scripts and custom GTK & Grub
                      themes. Vice.
                    </li>
                    <li>
                      <FaStar />
                      Custom Base16 theme, Vice, applied universally
                      to provisioned applications.
                    </li>
                    <li>
                      <FaStar />
                      Custom System Menus using Rofi
                    </li>
                    <li>
                      <FaStar />
                      Modular deployment via Makefile enabling
                      consistent environment across systems.
                    </li>
                  </ul>
                </div>
                <div className="project__links">
                  <a
                    href="https://github.com/Thomashighbaugh/dotfiles"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Repository"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__details project__left">
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
                    Experiment with Electron and solution to Markdown
                    editor woes, this Markdown editor implements the
                    basic save feature that so many other options
                    lacked and is packaged in several formats to work
                    across Linux distros.
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
              <div className="project__video project__right">
                <PictureSet pictureName="Opitx.png" altText="Opitx" />
              </div>
            </div>
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Projects;
