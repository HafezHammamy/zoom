import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const HomeHero = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundImage: 'url("/assets/hero-cover.webp")',
        height: "80vh",
        pt: "120px",
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="lg"></Box>
      </Container>
    </Box>
  );
};
