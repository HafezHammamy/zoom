import { Box, Container, Stack } from "@mui/system";

const Section = ({ backGroundImage, children }) => {
  return (
    <Box
      maxWidth="xxl"
      sx={
        backGroundImage
          ? {
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${backGroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "672px",
            }
          : {
              position: "relative",
              height: "100vh",
              width: "100%",
              overflow: "hidden",
            }
      }
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
          sx={{ flexGrow: 1 }}
        >
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

Section.propTypes = {};

export default Section;
