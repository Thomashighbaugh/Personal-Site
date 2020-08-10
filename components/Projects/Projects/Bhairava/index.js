import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet pictureName="portfolio-last.png" altText=" " />
        </div>
        <div className="project__details project__right">
          <Body
            projectTitle="Bhairava Grub Theme"
            projectTag1="Linux"
            projectTag2="BASH scripts"
            projectTag3="Bootloader"
            projectDescription="A customization of the Grub Bootloader that loads the Linux kernel when the system starts. It is styled in a muted gray with purple accents and white text for ease of use and accessiblity for those who find the default painful to look at and hard to determine the functionality of. "
            feature1=""
            feature2=""
            feature3=""
            feature4=""
            githubLink=""
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
