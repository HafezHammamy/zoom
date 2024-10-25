import React from "react";
import PropTypes from "prop-types";
import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { HomeHero } from "./components/HeroHome";

const HomePage = (props) => {
  usePageView();

  return (
    <>
      <Seo />
      <main>
        <HomeHero />
      </main>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
