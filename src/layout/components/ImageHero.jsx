import { Button, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import StyledTypography from "layout/components/StyledTypography";
import { RouterLink } from "./router-link";

export const ImageHero = ({
  image,
  title,
  description,
  actionPath,
  actionLabel,
  darken = true,
  component = undefined,
  descriptionSx = {},
}) => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  return (
    <Box
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: { xs: "auto", md: "100vh" },
        minHeight: { xs: "400px", md: "100vh" },
        width: "100%",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: darken ? "brightness(50%)" : "",
          backgroundPosition: { xs: "center center", md: "center" },
          transform: isRtl ? "none" : "scaleX(-1)",
          zIndex: 0,
        },
      }}
    >
      {/* Overlay to match VideoHero */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{
            height: "100%",
            flexDirection: { xs: "column", md: "row" },
            py: { xs: 4, md: 0 },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              color: "#fff",
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              alignItems: { xs: "center", md: "flex-start" },
              position: "relative",
              zIndex: 2,
              px: { xs: 2, md: 0 },
            }}
          >
            {component ? (
              <>{component}</>
            ) : (
              <>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "3rem" },
                  }}
                >
                  {title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "inherit" },
                    lineHeight: { xs: 1.6, md: "inherit" },
                    ...descriptionSx,
                  }}
                >
                  {description}
                </StyledTypography>
                <Box>
                  {actionLabel && (
                    <Button
                      sx={{
                        textTransform: "uppercase",
                        color: "white",
                        borderColor: "white",
                        height: { xs: "50px", md: "65px" },
                        width: { xs: "100%", md: "auto" },
                        fontSize: { xs: "0.75rem", md: "inherit" },
                        "&:hover": {
                          borderColor: "white",
                          color: "#ab92e1",
                          backgroundColor: "white",
                        },
                      }}
                      LinkComponent={RouterLink}
                      href={actionPath}
                      size="large"
                      variant="outlined"
                    >
                      {actionLabel}
                    </Button>
                  )}
                </Box>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
