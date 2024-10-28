import { Box, Container, Stack } from "@mui/system";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";

const boxStyle = {
  heigh: "100%",
  paddingTop: "15%",
  paddingRight: "7%",
  paddingLeft: "7%",
  color: "#012169",
};

const CommitmentBanner = (props) => {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("/assets/statement-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "672px",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: "0 !important",
          margin: 0,
        }}
      >
        <Box maxWidth="xxl">
          <Box sx={boxStyle}>
            <Stack spacing={4}>
              <QuoteTypography variant="h6">
                Our Commitment to Excellence
              </QuoteTypography>
              <StyledTypography variant="body2">
                At Dynamics, we're on an inspiring journey of growth and
                refinement in the world of aesthetics. Our passion guides us to
                explore new possibilities and bring fresh perspectives to our
                field. We're dedicated to thoughtfully expanding our range of
                products and enhancing our services, always with a focus on
                quality and innovation.
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
