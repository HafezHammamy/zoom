import { Box, Container, Grid } from "@mui/system";

import image1 from "assets/val1.png";
import image2 from "assets/val2.png";
import image3 from "assets/val3.png";
import image4 from "assets/val4.png";
import image5 from "assets/val5.png";
import image6 from "assets/val6.png";

import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import { QuoteTypography } from "layout/components/StyledTypography";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

const ValuesBanner = (props) => {
  const { t } = useTranslation();
  const items1 = [
    {
      image: image1,
      title: t(tokens.about.page.values.value1.title),
      description: t(tokens.about.page.values.value1.paragraph),
    },
    {
      image: image2,
      title: t(tokens.about.page.values.value2.title),
      description: t(tokens.about.page.values.value2.paragraph),
    },
    {
      image: image3,
      title: t(tokens.about.page.values.value3.title),
      description: t(tokens.about.page.values.value3.paragraph),
    },
    {
      image: image4,
      title: t(tokens.about.page.values.value4.title),
      description: t(tokens.about.page.values.value4.paragraph),
    },
    {
      image: image5,
      title: t(tokens.about.page.values.value5.title),
      description: t(tokens.about.page.values.value5.paragraph),
    },
    {
      image: image6,
      title: t(tokens.about.page.values.value6.title),
      description: t(tokens.about.page.values.value6.paragraph),
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
          <Grid size={12} sx={{ paddingTop: 1 }}>
            <Grid size={3} sx={{ paddingTop: 1, paddingBottom: 1 }}>
              <QuoteTypography sx={{ color: "#012169" }} variant="h6">
                Our Values
              </QuoteTypography>
            </Grid>
          </Grid>
          {items1.map((item, index) => {
            return (
              <Grid size={3}>
                <Card
                  key={item.title + index + "card"}
                  sx={{ width: "100%", height: "100%", borderRadius: 0 }}
                >
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
          <Grid size={12} sx={{ mt: 5, mb: 5 }}>
            <LinearProgress variant="determinate" value={15} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ValuesBanner.propTypes = {};

export default ValuesBanner;
