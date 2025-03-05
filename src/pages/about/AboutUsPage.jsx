import { Box, Container } from "@mui/system";
import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { AboutUsHero } from "./components/AboutUsHero";
import { ProductBanner } from "./components/ProductBanner";
import ValuesBanner from "./components/ValuesBanner";

import background_dark from "assets/dynamics-gradient-dark.png";
import background_green from "assets/dynamics-gradient-green.png";
import useScrollToTop from "hooks/useScrollToTop";
import DualSection from "./components/DualSection";

const AboutUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <AboutUsHero />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#eee8f5" }}>
          <Container maxWidth="xxl">
            <DualSection
              reverse={true}
              title1={t(tokens.about.title)}
              paragraph1={t(tokens.about.page.card1)}
              title2={t(tokens.about.page.card2.title)}
              paragraph2={t(tokens.about.page.card2.paragraph)}
              backImage2={background_green}
            />
          </Container>
          <Container maxWidth="xl">
            <ValuesBanner />
          </Container>
          <Container maxWidth="xxl">
            <DualSection
              reverse={true}
              title1={t(tokens.about.page.card3.title)}
              paragraph1={t(tokens.about.page.card3.paragraph)}
              title2={t(tokens.about.page.card4.title)}
              paragraph2={t(tokens.about.page.card4.paragraph)}
              backImage1={background_dark}
              backImage2={background_green}
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
