import { usePageView } from "hooks/use-page-view";
import { Seo } from "layout/components/Seo";
import ContactInfo from "./components/ContactInfo";
import ContactSection from "./components/ContactSection";
import { ContactUsHero } from "./components/ContactUsHero";

const ContactUsPage = (props) => {
  usePageView();

  return (
    <>
      <Seo />
      <main>
        <ContactUsHero />
        <ContactSection />
        <ContactInfo />
      </main>
    </>
  );
};

ContactUsPage.propTypes = {};

export default ContactUsPage;
