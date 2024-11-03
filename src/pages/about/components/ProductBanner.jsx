import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button, useTheme } from "@mui/material";
import StyledTypography, {
  QuoteTypography,
} from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import product from "assets/sdf-01.png";
import productRtl from "assets/sdf-02.png";
import { RouterLink } from "layout/components/router-link";
import { paths } from "paths";

const heroButton = {
  color: "white",
  borderColor: "white",
  height: "65px",
  width: "281px",
  "&:hover": {
    borderColor: "white",
    color: "#ab92e1",
    backgroundColor: "white",
  },
};

const heroTextStyle = {
  color: "#fff",
  width: "50%",
  height: "100%",
};

export const ProductBanner = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";

  return (
    <>
      <Box
        maxWidth="xxl"
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url(${isRtl ? productRtl : product})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
        }}
      >
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <Stack spacing={3} sx={heroTextStyle} justifyContent="center">
            <QuoteTypography variant="body1">
              {t(tokens.about.page.product.title)}
            </QuoteTypography>
            <StyledTypography variant="h2">
              {t(tokens.about.page.product.subtitle)}
            </StyledTypography>
            <StyledTypography variant="caption">
              {t(tokens.about.page.product.paragraph)}
            </StyledTypography>
            <Box>
              <Button
                LinkComponent={RouterLink}
                href={paths.ourBrands}
                sx={heroButton}
                size="large"
                variant="outlined"
              >
                {t(tokens.common.buttons.readMore)}
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

ProductBanner.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
