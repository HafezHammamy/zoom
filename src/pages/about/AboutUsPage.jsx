import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import React from "react";
import { AboutUsHero } from "./components/AboutUsHero";

const AboutUsPage = (props) => {
  usePageView();

  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
      </main>
    </>
  );
};

AboutUsPage.propTypes = {};

export default AboutUsPage;
