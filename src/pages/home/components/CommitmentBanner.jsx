import { Box, Container, Stack } from "@mui/system";
import BGImage from "assets/statement-bg.png";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

const boxStyle = {
  heigh: "100%",
  paddingTop: "15%",
  paddingLeft: "370px",
  color: "#012169",
};

const CommitmentBanner = (props) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BGImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "672px",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          height: "100%",
          padding: "0 !important",
          margin: 0,
        }}
      >
        <Box>
          <Box sx={boxStyle}>
            <Stack spacing={4}>
              <QuoteTypography variant="h4">
                {t(tokens.commitment.title)}
              </QuoteTypography>
              <StyledTypography variant="body2">
                {t(tokens.commitment.paragraph)}
              </StyledTypography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

CommitmentBanner.propTypes = {};

export default CommitmentBanner;
