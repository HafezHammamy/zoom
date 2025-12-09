import { Divider, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import Section from "pages/home/components/Section";

const SharedSection = ({
  title,
  description,
  background = "linear-gradient(to right, #c096f4,#5d2c71)",
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: background,
        color: "white",
        py: 4,
        px: 3,
      }}
    >
      <Section height="30vh">
        <Stack sx={{ height: "30vh" }} justifyContent="center">
          <Stack
            direction={"row"}
            justifyContent="center"
            alignItems="center"
            spacing={5}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <StyledTypography
              variant={theme.direction === "ltr" ? "h2" : "h2"}
              sx={{ width: "700px" }}
            >
              {title}
            </StyledTypography>
            <StyledTypography variant="body2">{description}</StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

SharedSection.propTypes = {};

export default SharedSection;
