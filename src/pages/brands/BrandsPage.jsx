import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import BrandsBanner from "pages/home/components/BrandsBanner";
import { useTranslation } from "react-i18next";
import { BrandsHero } from "./components/BrandsHero";

const BrandsPage = (props) => {
  usePageView();
  const { t } = useTranslation();

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
