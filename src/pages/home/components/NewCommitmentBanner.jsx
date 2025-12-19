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
        py: { xs: 2, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Section height="30vh">
        <Stack sx={{ height: "30vh" }} justifyContent="center">
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 5 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <StyledTypography
              variant={theme.direction === "ltr" ? "h2" : "h2"}
              sx={{
                textAlign: "left",
                "@media (max-width: 899px)": {
                  fontSize: "1.25rem",
                },
              }}
            >
              {(() => {
                const title = t(tokens.commitment.title);
                const parts = title.split(" ");
                const first = parts[0] || "";
                const second = parts[1] || "";
                const third = parts.slice(2).join(" ") || "";
                return (
                  <>
                    {first}
                    <br />
                    {second}
                    <br />
                    <span style={{ whiteSpace: "nowrap" }}>{third}</span>
                  </>
                );
              })()}
            </StyledTypography>
            <StyledTypography
              variant="body2"
              sx={{
                textAlign: "left",
                "@media (max-width: 899px)": {
                  fontSize: "0.75rem",
                },
              }}
            >
              {t(tokens.commitment.paragraph)}
            </StyledTypography>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

export default NewCommitmentBanner;
