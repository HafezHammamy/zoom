import { Divider, useTheme } from "@mui/material";
import { Box, Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import Section from "pages/home/components/Section";
import { useTranslation } from "react-i18next";

const OurCollectionParagraph = (props) => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #ec5e87,rgb(245, 203, 218))",
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
            alignItems="self-end"
            spacing={5}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <StyledTypography variant={theme.direction === "ltr" ? "h2" : "h2"}>
              {t(tokens.brands.our_collection.title)}
            </StyledTypography>
            <StyledTypography variant="body2">
              {t(tokens.brands.our_collection.paragraph)}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

OurCollectionParagraph.propTypes = {};

export default OurCollectionParagraph;
