import PictureSet from '../../../PictureSet/PictureSet';
import React from 'react';
import Body from '../../Body/Body';

function Project() {
  return (
    <div>
      <div className="project">
        <div className="project__video project__left">
          <PictureSet
            pictureName="Opitx.png"
            altText="Opitx Markdown editor in use"
          />
        </div>
        <div className="project__details project__right">
          <Body
            projectTitle="Opitx"
            projectTag1="Electron"
            projectTag2="React.js"
            projectTag3="SCSS"
            projectDescription="A markdown editor I wrote after becoming frustrated with the Markdown editors to be found for the Linux platform. The editor is written in Electron to enable its use on desktop, since I intended to use it to replace desktop applications. It utilizes React and SCSS to both stylize it as well as provide it functionality, as Electron is merely a wrapper for web technologies enabling their use offline."
            feature1="A markdown preview pane next to the editor pane"
            feature2="Default page giving users instructions on using Markdown by providing a syntax guide with examples"
            feature3="Leverages CodeMirror's platform for Markdown Editor pane UX"
            feature4="Packaged into RPM and DEB formats for use in different Linux environments"
            githubLink="https://github.com/Thomashighbaugh/Opitx"
            hostedLink="https://github.com/Thomashighbaugh/Opitx/"
          />
        </div>
      </div>
    </div>
  );
}
export default Project;
