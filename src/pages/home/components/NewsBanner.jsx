import { Box, Container, Grid, Stack } from "@mui/system";

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
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";

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
        <Grid container spacing={2}>
          <Grid size={5} sx={{ paddingTop: 10, paddingLeft: "370px" }}>
            <QuoteTypography sx={{ color: "#012169" }} variant="h5">
              Dynamics Medical
            </QuoteTypography>
          </Grid>
          <Grid size={7}>
            <Box
              sx={{
                height: "65vh",
                borderRadius: 2,
                color: "white",
              }}
            >
              <Box>
                <Stack direction={"row"} spacing={2} justifyContent="center">
                  {items.map((item, index) => {
                    return (
                      <Card
                        key={item.title + index + "card"}
                        sx={{ width: 345 }}
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
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid size={5}></Grid>
          <Grid size={7}>
            <LinearProgress variant="determinate" value={15} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

NewsBanner.propTypes = {};

export default NewsBanner;
