import { Button, useTheme } from "@mui/material";
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
}) => {
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  return (
    <Box
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: "100vh",
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
          backgroundPosition: "center",
          transform: isRtl ? "none" : "scaleX(-1)",
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="lg"
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
          sx={{ height: "100%", flexDirection: "row" }}
        >
          <Stack
            spacing={3}
            sx={{
              color: "#fff",
              width: "50%",
              textAlign: "left",
              alignItems: "flex-start",
            }}
          >
            {component ? (
              <>{component}</>
            ) : (
              <>
                <StyledTypography variant="h2">{title}</StyledTypography>
                <StyledTypography variant="body3">
                  {description}
                </StyledTypography>
                <Box>
                  {actionLabel && (
                    <Button
                      sx={{
                        textTransform: "uppercase",
                        color: "white",
                        borderColor: "white",
                        height: "65px",
                        width: "auto",
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
