import React from "react";
import PropTypes from "prop-types";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";

const LenisnaPage = (props) => {
  usePageView();
  useScrollToTop();

  return <div></div>;
};

LenisnaPage.propTypes = {};

export default LenisnaPage;
