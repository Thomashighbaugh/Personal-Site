import Link from "next/link";
import Layout from "../layout/Layout";
import PictureSet from "../components/PictureSet/PictureSet";
import React from "react";
/* eslint-disable */

const Index = () => {
  return (
    <Layout title="Thomas Leon Highbaugh | Full Stack Web Developer | Graphics Designer | Linux Systems Administrator">
      <div className="introduction">
        <h2 className="heading-2" id="intro">
          <span className="introduction__content">Thomas Leon Highbaugh</span>
        </h2>
        <hr />
        <div className="introduction__subtitle__container">
          <h3 className="heading-3 introduction__subtitle">
            Full Stack Web Developer
          </h3>
          <h3 className="heading-3 introduction__subtitle">
            Linux Systems Administrator
          </h3>
          <h3 className="heading-3 introduction__subtitle">
            Graphics Designer
          </h3>
          <h2 className="heading-6 introduction__location ">
            Monterey, California
          </h2>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
