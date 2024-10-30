import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import { useTranslation } from "react-i18next";
import { ContactUsHero } from "./components/ContactUsHero";

const ContactUsPage = (props) => {
  usePageView();
  const { t } = useTranslation();

  return (
    <>
      <Seo />
      <main>
        <ContactUsHero />
      </main>
    </>
  );
};

ContactUsPage.propTypes = {};

export default ContactUsPage;
