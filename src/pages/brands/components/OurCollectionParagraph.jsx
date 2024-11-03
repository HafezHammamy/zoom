import { useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import BGImage from "assets/statement-bg.png";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import Section from "pages/home/components/Section";
import { useTranslation } from "react-i18next";

const boxStyle = {
  heigh: "100%",
  paddingTop: "15%",
  color: "#012169",
};

const OurCollectionParagraph = (props) => {
  const theme = useTheme();

  const { t } = useTranslation();
  return (
    <Section backGroundImage={BGImage}>
      <Stack spacing={4} sx={boxStyle}>
        <QuoteTypography variant={theme.direction === "ltr" ? "h3" : "h2"}>
          {t(tokens.brands.our_collection.title)}
        </QuoteTypography>
        <StyledTypography variant="body2">
          {t(tokens.brands.our_collection.paragraph)}
        </StyledTypography>
      </Stack>
    </Section>
  );
};

OurCollectionParagraph.propTypes = {};

export default OurCollectionParagraph;
