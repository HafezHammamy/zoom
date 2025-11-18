import { VideoHero } from "layout/components/VideoHero";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import video from "assets/ContactUsMovie.mp4";

export const ContactUsHero = (props) => {
  const { t } = useTranslation();

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <VideoHero
      title={t(tokens.nav.contact)}
      description={t(tokens.contact.hero.paragraph)}
      videoSrc={video}
      actionLabel={t(tokens.nav.contact)}
      actionOnClick={scrollToForm}
    />
  );
};

ContactUsHero.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
