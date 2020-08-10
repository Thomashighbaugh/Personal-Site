import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet pictureName="resurgens3.png" altText=" " />
        </div>
        <div className="project__details project__right">
          <Body
            projectTitle="Resurgens III"
            projectTag1="ES6"
            projectTag2="CSS"
            projectTag3="HTML"
            projectDescription="The third version of my portfolio site, this one was the first to incorporate major features with Javascript and is a one page web application that uses tabs to break up the content into reasonable portions."
            feature1="Custom background art"
            feature2="Tasteful Color Scheme"
            feature3="Fast and responsive elements"
            feature4="Incorporation of transitions and animations that utilize JS to render"
            githubLink="https://github.com/Thomashighbaugh/resurgens3"
            hostedLink="https://resurgens3.vercel.app/"
            hostedTitle="Resurgens III"
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
