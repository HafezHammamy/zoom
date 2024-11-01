import { Box, Container } from "@mui/system";
import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { tokens } from "locales/tokens";
import React from "react";
import { useTranslation } from "react-i18next";
import AboutSection from "./components/AboutSection";
import { AboutUsHero } from "./components/AboutUsHero";
import { ProductBanner } from "./components/ProductBanner";
import ValuesBanner from "./components/ValuesBanner";
import image1 from "assets/dynamics123.png";
import image2 from "assets/dynamicshpp.png";
import image3 from "assets/dfghkl.png";
import image4 from "assets/gghhjkl.png";

const AboutUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();

  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5" }}>
          <Container maxWidth="lg">
            <AboutSection
              reverse={true}
              title={t(tokens.about.title)}
              paragraph={t(tokens.about.page.card1)}
              passedImage={image1}
            />
            <AboutSection
              title={t(tokens.about.page.card2.title)}
              paragraph={t(tokens.about.page.card2.paragraph)}
              passedImage={image2}
            />
            <ValuesBanner />
            <AboutSection
              reverse={true}
              title={t(tokens.about.page.card3.title)}
              paragraph={t(tokens.about.page.card3.paragraph)}
              passedImage={image3}
            />
            <AboutSection
              title={t(tokens.about.page.card4.title)}
              paragraph={t(tokens.about.page.card4.paragraph)}
              passedImage={image4}
            />
          </Container>
        </Box>
        <ProductBanner />
      </main>
    </>
  );
};

AboutUsPage.propTypes = {};

export default AboutUsPage;
