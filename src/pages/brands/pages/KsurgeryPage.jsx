import { Box, Container } from "@mui/system";
import girlImage from "assets/ksurgery/ksurgery-filler.jpg";
import icons from "assets/ksurgery/icons.svg";
import image from "assets/ksurgery/cover-girl.png";
import image2 from "assets/ksurgery/cover-girl-2.svg";
import productImage from "assets/ksurgery/ksurgery-product.jpg";
import video from "assets/ksurgery/kusrgery-movie.mp4";
import video2 from "assets/ksurgery/kusrgery-movie2.mp4";
import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { ImageHero } from "layout/components/ImageHero";
import { Seo } from "layout/components/Seo";
import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import AboutSection from "pages/about/components/AboutSection";
import { useTranslation } from "react-i18next";
import background_green from "assets/dynamics-gradient-green.png";
import ProductComponent from "../components/ProductComponent";

const KsurgeryPage = (props) => {
  const { t } = useTranslation();

  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <VideoHero
          title={t(tokens.brands.ksurgery.title)}
          description={t(tokens.brands.ksurgery.description)}
          videoSrc={video}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />
        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#FFFFFF"
              title={t(tokens.brands.ksurgery.whatIs)}
              paragraph={t(tokens.brands.ksurgery.whatIsDescription)}
              passedImage={productImage}
              hideAction
            />
          </Container>
        </Box>
        <Box maxWidth="xxl" sx={{ backgroundColor: "#FFFFFF" }}>
          <Container maxWidth="xxl">
            <AboutSection
              backgroundColor="#FFFFFF"
              reverse={true}
              title={t(tokens.brands.ksurgery.application)}
              paragraph={t(tokens.brands.ksurgery.applicationDescription)}
              passedImage={girlImage}
              hideAction
              backImage={background_green}
            />
          </Container>
        </Box>
        <Box component={"img"} src={icons} maxWidth="xxl" />
        <VideoHero
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          videoSrc={video2}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
        />

        <ProductComponent />

        <ImageHero
          image={image}
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
          darken={false}
        />
        <ImageHero
          image={image2}
          title={t(tokens.brands.ksurgery.howIs)}
          description={t(tokens.brands.ksurgery.howIsDescription)}
          actionPath="#"
          actionLabel={t(tokens.common.buttons.readMore)}
          darken={false}
        />
      </main>
    </>
  );
};

KsurgeryPage.propTypes = {};

export default KsurgeryPage;
