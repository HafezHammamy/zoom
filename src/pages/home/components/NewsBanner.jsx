import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/1.png";
import image2 from "assets/2.png";
import image3 from "assets/3.png";
import image4 from "assets/4.png";

import {
  Card,
  CardContent,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
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
          padding: 10,
          margin: 0,
        }}
      >
        <Grid container spacing={2} alignItems="stretch">
          <Grid offset={1} size={3} sx={{ paddingTop: 1 }}>
            <QuoteTypography sx={{ color: "#012169" }} variant="h6">
              {t(tokens.site.name)}
            </QuoteTypography>
          </Grid>
          {items.map((item, index) => {
            return (
              <Grid size={2}>
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
                    <Typography gutterBottom variant="body2" component="div">
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

NewsBanner.propTypes = {};

export default NewsBanner;
