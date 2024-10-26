import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import video from "assets/renee.mp4";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { buttonStyle, textStyle, videoStyle } from "./styles";

const LenisnaBrand = (props) => {
  return (
    <>
      <div
        style={{
          ...videoStyle,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundImage: 'url("/assets/Lenisna-7.jpg")',
        }}
      >
        <source src={video} type="video/mp4" />
      </div>
      <Box maxWidth="xl" sx={textStyle}>
        <Box sx={{ width: "50%" }}>
          <Stack spacing={3}>
            <QuoteTypography variant="h6">Lenisna</QuoteTypography>
            <StyledTypography variant="h5">
              Experience LENISNA: Our innovative spherical particles stimulate
              collagen production, offering natural volume for facial and body
              contouring. Ideal for wrinkle reduction and scar treatment.{" "}
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

LenisnaBrand.propTypes = {};

export default LenisnaBrand;
