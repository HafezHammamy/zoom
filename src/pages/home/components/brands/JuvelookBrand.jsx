import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/juvelook.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";

const JuvelookBrand = (props) => {
  return (
    <>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <Box maxWidth="xl" sx={textStyle}>
        <Box sx={{ width: "50%" }}>
          <Stack spacing={3}>
            <QuoteTypography variant="h6">Juvelook</QuoteTypography>
            <StyledTypography variant="h5">
              Experience Juvelook: Our unique PLA filler enhances your
              appearance with precision. Small PDLLA particles are injected into
              the dermis, evenly volumizing skin by boosting collagen
              production.
            </StyledTypography>
            <Box>
              <Button sx={buttonStyle} size="large" variant="outlined">
                DISCOVER BRAND
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

JuvelookBrand.propTypes = {};

export default JuvelookBrand;
