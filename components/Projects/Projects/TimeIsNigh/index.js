import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function TimeIsNighProject() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <Body
            projectTitle="Time Is Nigh"
            projectTag1="React.js"
            projectTag2="Styled Components"
            projectTag3="ES6"
            projectDescription="A quick demonstration of my capacity with React.js I put together in response to a client inquiry."
            feature1="Functional timer"
            feature2="Swirling icon animations"
            feature3="Custom SVG icons"
            feature4="Big, bold fonts and a responsive layout for viewing on smaller screens or mobile"
            githubLink="https://github.com/Thomashighbaugh/Time-Is-Nigh"
          />
        </div>
        <div className="project__details project__right">
          <PictureSet
            pictureName="timeisnigh.png"
            altText="Time is Nigh Web App"
          />
        </div>
      </div>
    </div>
  );
}
export default TimeIsNighProject;
