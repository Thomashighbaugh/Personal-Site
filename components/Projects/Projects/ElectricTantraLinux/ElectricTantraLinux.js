import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet
            pictureName="electrictantralogo.png"
            altText=" "
          />
        </div>
        <div className="project__details project__right">
          <Body
            projectTitle="Electric Tantra Linux"
            projectTag1="BASH"
            projectTag2="Linux"
            projectTag3="Dotfiles"
            projectDescription="An attempt to create a living demonstration of my configurations and simpler means of provisioning my systems that evolved into an entire Linux distro, complete with custom package repository to house AUR packages."
            feature1="AwesomeWM with my configuration by default"
            feature2="Custom GTK & Icon themes written specifically for the distro."
            feature3="Totally open sourced and open development, intended to be copied by others to meet their needs. "
            feature4="Featuring my customized arch-installation script with a Debian like GUI menu for users to select their desired system's components and modules within."
            githubLink="https://github.com/Thomashighbaugh/electric-tantra-linux-iso"
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
