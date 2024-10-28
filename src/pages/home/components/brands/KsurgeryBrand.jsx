import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/ksugery.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const KsurgeryBrand = (props) => {
  return (
    <>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <Box maxWidth="xl" sx={textStyle}>
        <Box sx={{ width: "50%" }} className="slide-up">
          <Stack spacing={3}>
            <QuoteTypography variant="h6">Ksurgery</QuoteTypography>
            <StyledTypography variant="body2">
              Our Italian-made hyaluronic acid treatments blend cutting-edge
              technology with natural beauty enhancement. Ksurgery MED, by
              Vidapharma, delivers safe, effective, and scientifically-validated
              products, designed to meet the high standards of medical
              professionals in aesthetic care.
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

KsurgeryBrand.propTypes = {};

export default KsurgeryBrand;
