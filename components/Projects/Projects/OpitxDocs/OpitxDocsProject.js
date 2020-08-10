import PictureSet from "../../../PictureSet/PictureSet";
import React from "react";
import Body from "../../Body/Body";

function OpitxDocsProject() {
  return (
    <div>
      <div className="project">
        <div className="project__details project__left">
          <Body
            projectTitle="Opitx Documentation Site"
            projectTag1="HTML"
            projectTag2="CSS"
            projectTag3="ES6"
            projectDescription="A documentation site to go along with the Opitx Markdown Editor that I wrote. The site conforms to the standard practices of other documentation sites as well as features my personal artwork (look familiar?) and is the first site to incorporate my then developing flare in web interface design."
            feature1="Exhaustive description of how to use the Opitx Markdown Editor"
            feature2="Rich, colorful UI that conforms to standard conventions for documentation sites while still having unique vibrance."
            feature3="Source code is written in HTML5, CSS3 and ES6, conforming to the standard conventions and best practices of each."
            feature4="Custom SVG icon"
            githubLink="https://github.com/Thomashighbaugh/Opitx-Docs-Site"
            hostedLink="https://opitx-docs-site-git-master.thighbaugh.vercel.app/"
            hostedTitle="Opitx Documentation Site"
          />
        </div>
        <div className="project__video project__right">
          <PictureSet pictureName="opitxdocsproject.png" altText=" " />
        </div>
      </div>
    </div>
  );
}
export default OpitxDocsProject;
