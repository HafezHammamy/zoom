import { Box, Container, Stack } from "@mui/system";
import BGImage from "assets/statement-bg.png";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const boxStyle = {
  heigh: "100%",
  paddingTop: "15%",
  color: "#012169",
};

const CommitmentBanner = (props) => {
  const { t } = useTranslation();
  return (
    <Section backGroundImage={BGImage}>
      <Stack spacing={4} sx={boxStyle}>
        <QuoteTypography variant="h3">
          {t(tokens.commitment.title)}
        </QuoteTypography>
        <StyledTypography variant="body2">
          {t(tokens.commitment.paragraph)}
        </StyledTypography>
      </Stack>
    </Section>
  );
};

CommitmentBanner.propTypes = {};

export default CommitmentBanner;
