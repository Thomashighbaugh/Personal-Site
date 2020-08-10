import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function G5CCLifeBlogProject() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet pictureName="g5cclife.png" altText=" " />
        </div>
        <div className="project__details project__right">
          <Body
            projectTitle="Group 5's CCLife Blog"
            projectTag1="Gatsby.js"
            projectTag2="Styled Components"
            projectTag3="TinaCMS"
            projectDescription="A blog I wrote for a group project in a class on Javascript I took at a local community college. The project turned out much better than expected and while the first time I had used Styled Components, I was shocked at how well the site worked and functioned. It has become the basis for a blog template (WIP) and features a bunch of nifty features like a UI toggle to shift between light and dark mode and fully customized interface for TinaCMS, a content management system that doesn't rely on a vendor interface."
            feature1="TinaCMS fully incorporated and modified to fit overall UI"
            feature2="Custom artwork featuring scenes from the school I took the class at"
            feature3="Responsive layout with toggle to shift between light and dark mode"
            feature4="Source code compliant with Atomic Design principles thanks to Styled Components while still retaining a global style sheet for the inclusion of variable definitions for the colors of the light and dark mode"
            githubLink="https://github.com/Thomashighbaugh/g5-Blog-CCLife"
            hostedLink="https://g5-blog-ccl-ife-git-master.thomashighbaugh.vercel.app/"
            hostedTitle="G5 CCLife Blog"
          />
        </div>
      </div>
    </div>
  );
}
export default G5CCLifeBlogProject;
