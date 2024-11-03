import React from "react";
import PropTypes from "prop-types";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";

const JuvelookPage = (props) => {
  usePageView();
  useScrollToTop();

  return <div></div>;
};

JuvelookPage.propTypes = {};

export default JuvelookPage;
