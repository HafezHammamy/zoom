import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import "./brands.css";
import { buttonStyle, videoStyle } from "./styles";

const heroTextStyle = {
  color: "#fff",
  width: "50%",
};

const BrandContainer = ({ title, description, video, subTitle }) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1, paddingTop: "10%" }}
        >
          <Stack spacing={3} sx={heroTextStyle} className="slide-up">
            <QuoteTypography variant="h6">{title}</QuoteTypography>
            <Typography variant="h5">{subTitle}</Typography>
            <StyledTypography variant="body2">{description} </StyledTypography>
            <Box>
              <Button sx={buttonStyle} size="large" variant="outlined">
                DISCOVER BRAND
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <video autoPlay muted loop playsInline style={videoStyle}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

BrandContainer.propTypes = {};

export default BrandContainer;
