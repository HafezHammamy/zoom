import { usePageView } from "hooks/use-page-view";
import useScrollToTop from "hooks/useScrollToTop";
import { Seo } from "layout/components/Seo";
import BrandsBanner from "pages/home/components/BrandsBanner";
import { BrandsHero } from "./components/BrandsHero";

const BrandsPage = (props) => {
  usePageView();
  useScrollToTop();

  return (
    <>
      <Seo />
      <main>
        <BrandsHero />
        <BrandsBanner />
      </main>
    </>
  );
};

BrandsPage.propTypes = {};

export default BrandsPage;
