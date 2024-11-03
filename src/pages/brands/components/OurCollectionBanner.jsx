import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/product-01.png";
import image2 from "assets/product-02.png";
import image3 from "assets/product-03.png";
import image4 from "assets/product-04.png";

import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";
import { paths } from "paths";
import { RouterLink } from "layout/components/router-link";

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
      description: t(tokens.brands.ksurgery.description2),
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
          padding: 10,
          margin: 0,
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          <Grid offset={1} size={3} sx={{ paddingTop: 1 }}>
            <QuoteTypography sx={{ color: "#012169" }} variant="h6">
              {t(tokens.brands.our_collection.title)}
            </QuoteTypography>
          </Grid>
          {items.map((item, index) => {
            return (
              <Grid size={2}>
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
                    key={item.title + index + "card"}
                    sx={{ width: "100%", height: "100%", borderRadius: 0 }}
                  >
                    <CardMedia
                      sx={{ height: 300 }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ fontSize: "100% !important" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            );
          })}
          <Grid offset={4} size={8} sx={{ mt: 5 }}>
            <LinearProgress variant="determinate" value={15} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

OurCollectionBanner.propTypes = {};

export default OurCollectionBanner;
