import Link from "next/link";
import Layout from "../layout/Layout";
import PictureSet from "../components/PictureSet/PictureSet";
import React from "react";
/* eslint-disable */

const Index = () => {
  return (
    <Layout title="Index" className="index">
      <div className="introduction">
        <h2 className="heading-2" id="intro">
          Hi! I&apos;m <br />
          <span className="introduction__content">Thomas Leon Highbaugh</span>
        </h2>

        <hr />
        <h3 className="heading-3 introduction__subtitle">
          a Web Developer from Hayward, California
        </h3>
      </div>
    </Layout>
  );
};
export default Index;
