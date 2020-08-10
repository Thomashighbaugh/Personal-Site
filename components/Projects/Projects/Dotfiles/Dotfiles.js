import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__details project__left">
          <Body
            projectTitle="Dotfiles"
            projectTag1="C"
            projectTag2="Lua"
            projectTag3="Linux"
            projectDescription="The main repository housing my numerous"
            feature1="Thorough customization of dozens of programs, custom
executable scripts and custom GTK & Grub themes. Vice."
            feature2="Custom Base16 theme, Vice, applied universally to
provisioned applications."
            feature3="Modular deployment via Makefile enabling consistent
environment across systems."
            feature4="Also provisions the system by installing all the programs I require on my workstations (Arch Linux Only) ."
            githubLink="https://github.com/Thomashighbaugh/dotfiles"
          />
        </div>
        <div className="project__video project__right">
          <PictureSet pictureName="mydotfiles.png" altText=" " />
        </div>
      </div>
    </div>
  );
}
export default Project;
