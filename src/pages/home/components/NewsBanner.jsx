import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/1.png";
import image2 from "assets/2.png";
import image3 from "assets/3.png";
import image4 from "assets/4.png";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

const NewsBanner = (props) => {
  const { t } = useTranslation();
  const items = [
    {
      image: image1,
      title: t(tokens.cards.card1.title),
      description: t(tokens.cards.card1.paragraph),
    },
    {
      image: image2,
      title: t(tokens.cards.card2.title),
      description: t(tokens.cards.card2.paragraph),
    },
    {
      image: image3,
      title: t(tokens.cards.card3.title),
      description: t(tokens.cards.card3.paragraph),
    },
    {
      image: image4,
      title: t(tokens.cards.card4.title),
      description: t(tokens.cards.card4.paragraph),
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
            <QuoteTypography
              sx={{
                color: "#012169",
                "@media (max-width: 899px)": {
                  fontSize: "1rem",
                },
              }}
              variant="h6"
            >
              {t(tokens.site.name)}
            </QuoteTypography>
          </Grid>
          {items.map((item, index) => {
            return (
              <Grid key={item.title + index} size={{ xs: 6, md: 2 }}>
                <Card sx={{ width: "100%", height: "100%", borderRadius: 0 }}>
                  <CardMedia
                    sx={{
                      height: { xs: 150, md: 300 },
                    }}
                    image={item.image}
                    title={item.title}
                  />
                  <CardContent sx={{ padding: { xs: 1, md: 2 } }}>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{
                        "@media (max-width: 899px)": {
                          fontSize: "0.75rem",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        "@media (max-width: 899px)": {
                          fontSize: "0.65rem",
                        },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

NewsBanner.propTypes = {};

export default NewsBanner;
