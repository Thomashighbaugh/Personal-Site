import dynamic from "next/dynamic";
import Layout from "../layout/Layout";
import Spinner from "../components/Spinner/Spinner";
/* eslint-disable */
/* eslint-disable */
const DynamicComponentWithNoSSR = dynamic(
  () => {
    return import("../components/ScrollMagic/scrollmagic");
  },
  { loading: () => <Spinner />, ssr: false }
);
/* eslint-enable */
import React from "react";
import DotfilesProject from "../components/Projects/Projects/Dotfiles/Dotfiles";
import OpitxProject from "../components/Projects/Projects/Opitx/OpitxProject";
import TimeIsNighProject from "../components/Projects/Projects/TimeIsNigh/TimeIsNighProject";
import ResurgensIIIProject from "../components/Projects/Projects/ResurgensIII/ResurgensIIIProject";
import OpitxDocsProject from "../components/Projects/Projects/OpitxDocs/OpitxDocsProject";
import G5CCLifeBlogProject from "../components/Projects/Projects/G5/G5CCLifeBlogProject";

const Projects = () => {
  return (
    <Layout title="Projects">
      <DynamicComponentWithNoSSR>
        <div className="Projects">
          <div className="projects">
            <TimeIsNighProject />
            <G5CCLifeBlogProject />
            <DotfilesProject />
            <OpitxProject />
            <OpitxDocsProject />
            <ResurgensIIIProject />
          </div>
        </div>
      </DynamicComponentWithNoSSR>
    </Layout>
  );
};

export default Projects;
