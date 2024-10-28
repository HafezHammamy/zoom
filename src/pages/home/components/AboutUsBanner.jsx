import { Button, Paper, Typography } from "@mui/material";
import { Box, Container, Grid, Stack } from "@mui/system";

import image from "assets/gradient.png";
import image2 from "assets/image-2.png";
import { buttonStyle } from "./brands/styles";

const AboutUsBanner = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#eee8f5",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: 10,
          margin: 0,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={5} sx={{ position: "relative" }}>
            <Box
              component="img"
              src={image2}
              alt="About Us"
              sx={{
                position: "absolute",
                height: "600px",
                borderRadius: 2,
                right: -100,
                top: 100,
                zIndex: 1,
              }}
            />
          </Grid>
          <Grid size={7}>
            <Box
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "85vh",
                borderRadius: 2,
                color: "white",
              }}
            >
              <Box>
                <Stack direction={"row"} justifyContent="center">
                  <Stack
                    spacing={5}
                    direction={"column"}
                    sx={{ width: "50%", marginTop: "20%" }}
                  >
                    <Typography variant="h2">About Us </Typography>
                    <Typography variant="body2">
                      We pride ourselves on our unique approach, which
                      integrates the experience of seasoned professionals with
                      the fresh perspectives of emerging talent. This synergy
                      enables us to develop advanced products and services that
                      not only keep pace with industry trends but often set new
                      standards.
                    </Typography>
                    <Button sx={buttonStyle} size="large" variant="outlined">
                      LEARN MORE
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

AboutUsBanner.propTypes = {};

export default AboutUsBanner;
