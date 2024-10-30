import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { tokens } from "locales/tokens";
import React from "react";
import { useTranslation } from "react-i18next";
import AboutSection from "./components/AboutSection";
import { AboutUsHero } from "./components/AboutUsHero";
import ValuesBanner from "./components/ValuesBanner";

const AboutUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();

  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
        <AboutSection
          reverse={true}
          title={t(tokens.about.title)}
          paragraph={t(tokens.about.page.card1)}
        />
        <AboutSection
          title={t(tokens.about.page.card2.title)}
          paragraph={t(tokens.about.page.card2.paragraph)}
        />
        <ValuesBanner />
        <AboutSection
          reverse={true}
          title={t(tokens.about.page.card3.title)}
          paragraph={t(tokens.about.page.card3.paragraph)}
        />
        <AboutSection
          title={t(tokens.about.page.card4.title)}
          paragraph={t(tokens.about.page.card4.paragraph)}
        />
      </main>
    </>
  );
};

AboutUsPage.propTypes = {};

export default AboutUsPage;
