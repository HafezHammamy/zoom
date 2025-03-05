import { useTheme } from "@emotion/react";
import { Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import StyledTypography from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import Section from "./Section";

const NewCommitmentBanner = () => {
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #6bb6b6, #a9e0eb)",
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
              {t(tokens.commitment.title)}
            </StyledTypography>
            <StyledTypography variant="body2">
              {t(tokens.commitment.paragraph)}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

export default NewCommitmentBanner;
