import { Box, Container, Grid, Stack } from "@mui/system";

import image1 from "assets/product-01.png";
import image2 from "assets/product-02.png";
import image3 from "assets/product-03.png";
import image4 from "assets/product-04.png";

import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { RouterLink } from "layout/components/router-link";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { paths } from "paths";
import { useTranslation } from "react-i18next";

const OurCollectionBanner = (props) => {
  const { t } = useTranslation();
  const items = [
    {
      image: image1,
      title: t(tokens.brands.juvelook.subtitle),
      description: t(tokens.brands.juvelook.description2),
      path: paths.brands.juvelook,
    },
    {
      image: image2,
      title: t(tokens.brands.lenisna.subtitle),
      description: t(tokens.brands.lenisna.description2),
      path: paths.brands.lenisna,
    },
    {
      image: image3,
      title: t(tokens.brands.renee.subtitle),
      description: t(tokens.brands.renee.description2),
      path: paths.brands.renee,
    },
    {
      image: image4,
      title: t(tokens.brands.ksurgery.subtitle),
      description: "t(tokens.brands.ksurgery.description2)",
      path: paths.brands.ksurgery,
    },
  ];

  return (
    <Box
      maxWidth="xxl"
      sx={{
        backgroundColor: "#eee8f5",
      }}
    >
      <Container
        maxWidth="xxl"
        sx={{
          position: "relative",
          height: "100%",
          padding: { xs: 2, md: 10 },
          margin: 0,
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          <Grid
            offset={{ xs: 0, md: 1 }}
            size={{ xs: 12, md: 3 }}
            sx={{ paddingTop: 1 }}
          >
            <Stack spacing={2}>
              <QuoteTypography
                sx={{
                  color: "#012169",
                  "@media (max-width: 899px)": {
                    fontSize: "1rem",
                  },
                }}
                variant="h6"
              >
                {t(tokens.brands.our_collection.title)}
              </QuoteTypography>
              <Typography
                sx={{
                  color: "#012169",
                  "@media (max-width: 899px)": {
                    fontSize: "1.25rem",
                  },
                }}
                variant="h3"
              >
                {t(tokens.brands.our_collection.paragraph2)}
              </Typography>
            </Stack>
          </Grid>
          {items.map((item, index) => {
            return (
              <Grid key={item.title + index} size={{ xs: 12, md: 2 }}>
                <ButtonBase
                  LinkComponent={RouterLink}
                  href={item.path}
                  sx={{
                    textAlign: "left",
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "scale(1.02)",
                    },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <Card
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 0,
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: { xs: 200, md: 300 },
                      }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent sx={{ padding: { xs: 1.5, md: 2 } }}>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{
                          fontSize: { xs: "0.875rem", md: "100% !important" },
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        component="div"
                        sx={{
                          color: "text.secondary",
                          textAlign: "justify",
                          textJustify: "inter-word",
                          wordSpacing: "0.15em",
                          letterSpacing: "0.02em",
                          lineHeight: 1.7,
                          display: "block",
                          width: "100%",
                          fontSize: { xs: "0.75rem", md: "inherit" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

OurCollectionBanner.propTypes = {};

export default OurCollectionBanner;
