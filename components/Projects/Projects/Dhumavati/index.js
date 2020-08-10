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
            projectTitle="Dhumavati GTK Theme"
            projectTag1="GTK"
            projectTag2="SCSS"
            projectTag3="SVG"
            projectDescription="A custom GTK theme, which is one of the methods of styling Linux windows, that I wrote for use within my personal workstation environment. It is rendered using SCSS which is converted into GTK-flavored CSS by a script that is included in the repository. It also features SVGs that are also rendered as needed using another script that converts them into PNG format recognized by the GTK system. Colorscheme is derived from my custom Vice Color Scheme for base16."
            feature1="Dark interface using Vice Color Scheme"
            feature2="Custom Scripts to render SVGs into PNGs, parse the SCSS into GTK-flavored CSS and install the theme globally."
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
