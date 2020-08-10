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

function DotfilesProject() {
  return (
    // <div className="project">
    //   <div className="project__video project__left">
    //
    //     <div className="project__details project__right">
    //       <div className="project__title">
    //         <h3 className="heading-3">Dotfiles</h3>
    //         <div className="tag-icons">
    //           <span className="tag-icon">Linux</span>
    //           <span className="tag-icon">Awesome WM</span>
    //           <span className="tag-icon">
    //             Customized Desktop Environment
    //           </span>
    //         </div>
    //       </div>
    //
    //       <div className="project__description">
    //         <p>
    //           My extensive Linux configurations backed up with Git and
    //           provisioned by a Makefile that also provisions a fresh
    //           installation and features a completely customized and
    //           finely tuned UI built on top of AwesomeWM with Lua.
    //         </p>
    //         <ul>
    //         </ul>
    //       </div>
    //       <div className="project__links">
    //         <a
    //           href="https://github.com/Thomashighbaugh/dotfiles"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           title="GitHub Repository"
    //         >
    //           GitHub
    //           <FaGithub />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="project">
      <div className="project__details project__right">
        <div className="project__title">
          <h3 className="heading-3">Linux Dotfiles</h3>
          <div className="tag-icons">
            <span className="tag-icon">Linux</span>
            <span className="tag-icon">Lua</span>
            <span className="tag-icon">C</span>
          </div>
        </div>
        <div className="project__description">
          <p>
            My extensive Linux configurations backed up with Git and
            provisioned by a Makefile that also provisions a fresh
            installation and features a completely customized and
            finely tuned UI built on top of AwesomeWM with Lua.
          </p>
          <ul>
            <li>
              <FaStar />
              Thorough customization of dozens of programs, custom
              executable scripts and custom GTK & Grub themes. Vice.
            </li>
            <li>
              <FaStar />
              Custom Base16 theme, Vice, applied universally to
              provisioned applications.
            </li>
            <li>
              <FaStar />
              Custom System Menus using Rofi
            </li>
            <li>
              <FaStar />
              Modular deployment via Makefile enabling consistent
              environment across systems.
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
      <div className="project__video project__left">
        <PictureSet pictureName="mydotfiles.png" altText="desktop" />
      </div>
    </div>
  );
}
export default DotfilesProject;
