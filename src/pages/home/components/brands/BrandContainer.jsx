import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";
import "./brands.css";

const BrandContainer = ({ title, description, video, subTitle }) => {
  return (
    <>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={video} type="video/mp4" />
      </video>
      <Box maxWidth="xl" sx={textStyle}>
        <Box sx={{ width: "50%" }} className="slide-up">
          <Stack spacing={3}>
            <QuoteTypography variant="h6">{title}</QuoteTypography>
            <Typography variant="h5">{subTitle}</Typography>
            <StyledTypography variant="body2">{description} </StyledTypography>
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

BrandContainer.propTypes = {};

export default BrandContainer;
