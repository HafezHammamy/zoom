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

const NewsBanner = (props) => {
  const items = [
    {
      image: image1,
      title: "Global Expertise, Local Touch",
      description:
        "We combine international expertise with a deep understanding of local beauty standards, ensuring our solutions resonate with diverse cultural contexts.",
    },
    {
      image: image2,
      title: "Collaborative Growth",
      description:
        "We believe in the power of collaboration, fostering partnerships that drive innovation and growth in the aesthetic industry.",
    },
    {
      image: image3,
      title: "Empowering Education",
      description:
        "We are committed to educating our clients and partners about the latest advancements in aesthetics, empowering them to make informed decisions.",
    },
    {
      image: image4,
      title: "Client Empowerment",
      description:
        "We aim to empower our clients with knowledge and confidence, helping them make informed decisions about their aesthetic journey.",
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
          <Grid size={5} sx={{ padding: 10 }}>
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
                  {items.map((item) => {
                    return (
                      <Card sx={{ width: 345 }}>
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
