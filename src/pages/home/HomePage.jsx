import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import AboutUsBanner from "./components/AboutUsBanner";
import BrandsBanner from "./components/BrandsBanner";
import CommitmentBanner from "./components/CommitmentBanner";
import { HomeHero } from "./components/HeroHome";

const HomePage = (props) => {
  usePageView();

  return (
    <>
      <Seo />
      <main>
        <HomeHero />
        <CommitmentBanner />
        <BrandsBanner />
        <AboutUsBanner />
      </main>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
