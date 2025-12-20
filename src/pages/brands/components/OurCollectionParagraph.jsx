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
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Section height={{ xs: "auto", md: "30vh" }}>
        <Stack
          sx={{
            height: { xs: "auto", md: "30vh" },
            minHeight: { xs: "auto", md: "30vh" },
          }}
          justifyContent="center"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems={{ xs: "flex-start", md: "self-end" }}
            spacing={{ xs: 2, md: 5 }}
            divider={
              <Divider
                orientation={{ xs: "horizontal", md: "vertical" }}
                flexItem
                sx={{
                  "@media (max-width: 899px)": {
                    width: "100%",
                    my: 1,
                  },
                }}
              />
            }
          >
            <StyledTypography
              variant={theme.direction === "ltr" ? "h2" : "h2"}
              sx={{
                "@media (max-width: 899px)": {
                  fontSize: "1.5rem",
                },
              }}
            >
              {t(tokens.brands.our_collection.title)}
            </StyledTypography>
            <StyledTypography
              variant="body2"
              sx={{
                "@media (max-width: 899px)": {
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                },
              }}
            >
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
