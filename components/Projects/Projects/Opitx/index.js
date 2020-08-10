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
            projectTitle=""
            projectTag1=""
            projectTag2=""
            projectTag3=""
            projectDescription=""
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
