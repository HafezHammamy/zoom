import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";

const heroTextStyle = {
  paddingBottom: 0,
  display: "block",
  position: "absolute",
  bottom: "80px",
  left: "90px",
  right: "90px",
  height: "auto",
  textAlign: "left",
  color: "#fff",
};

const heroButton = {
  color: "white",
  borderColor: "white",
  height: "65px",
  width: "281px",
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

export const HomeHero = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backgroundImage: 'url("/assets/hero-cover.webp")',
        background:
          "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/assets/hero-cover.webp')",
        height: "80vh",
        pt: "120px",
      }}
    >
      <Container maxWidth="xxl" sx={{ position: "relative", height: "100%" }}>
        <Box maxWidth="xl" sx={heroTextStyle}>
          <Box sx={{ width: "50%" }}>
            <Stack spacing={3}>
              <StyledTypography variant="h2">
                Discover Our Brands
              </StyledTypography>
              <StyledTypography variant="h2">
                Discover our premium aesthetic and beauty brands, carefully
                selected for exceptional results.
              </StyledTypography>
              <Box>
                <Button sx={heroButton} size="large" variant="outlined">
                  Read More
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
