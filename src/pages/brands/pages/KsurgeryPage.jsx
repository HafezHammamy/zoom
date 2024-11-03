import React from "react";
import PropTypes from "prop-types";
import useScrollToTop from "hooks/useScrollToTop";
import { usePageView } from "hooks/use-page-view";

const KsurgeryPage = (props) => {
  usePageView();
  useScrollToTop();
  return <div></div>;
};

KsurgeryPage.propTypes = {};

export default KsurgeryPage;
