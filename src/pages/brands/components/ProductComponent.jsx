import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const ProductComponent = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      maxWidth="xxl"
      sx={{ width: "100%", maxWidth: 800, margin: "auto", padding: 2 }}
    >
      {/* Tabs for Face/Body */}

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        centered
        sx={{ marginBottom: 2 }}
        TabIndicatorProps={{
          style: { backgroundColor: "#6c63ff" },
        }}
      >
        <Tab label="Face" />
        <Tab label="Body" />
      </Tabs>

      {/* Content Section */}
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          OPERA II
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Medium-superficial lines
        </Typography>
        <Typography variant="body1" gutterBottom>
          Medium Filler with a soft consistency capable of correcting the
          medium-superficial lines of the body, redefining the nose and temple
          volumes as well as enhancing lip volume.
        </Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Treatment: nose, tear trough, lips, temples...
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Volume enhancing effect: Soft
            </Typography>
          </li>
          <li>
            <Typography variant="body2">Pack: 1x1ml</Typography>
          </li>
          <li>
            <Typography variant="body2">HA concentration: 1x1ml</Typography>
          </li>
        </ul>

        {/* Product Image */}
        <Card sx={{ maxWidth: 250, marginTop: 2 }}>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/250" // Replace with the actual image URL
            alt="Product Image"
          />
        </Card>

        {/* Buttons */}
        <Box
          sx={{ display: "flex", justifyContent: "space-around", marginTop: 2 }}
        >
          <Button variant="outlined" color="primary">
            Opera 1
          </Button>
          <Button variant="contained" color="primary">
            Opera 2
          </Button>
          <Button variant="outlined" color="primary">
            Opera 3
          </Button>
          <Button variant="outlined" color="primary">
            Opera 4
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductComponent;
