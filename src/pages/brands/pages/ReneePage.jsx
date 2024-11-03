import React from "react";
import PropTypes from "prop-types";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";

const ReneePage = (props) => {
  usePageView();
  useScrollToTop();

  return <div></div>;
};

ReneePage.propTypes = {};

export default ReneePage;
