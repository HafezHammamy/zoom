import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { tokens } from "locales/tokens";
import { useTranslation } from "react-i18next";

import product1 from "assets/renee/product1.png";
import product2 from "assets/renee/product2.png";
import product3 from "assets/renee/product3.png";
import product4 from "assets/renee/product4.png";
import product5 from "assets/renee/product5.png";

const ReneeProductComponent = () => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState("product-1");

  const products = [
    {
      value: "product-1",
      title: t(tokens.brands.renee.products[0].skin[0].title),
      preQuestion: t(tokens.brands.renee.products[0].skin[0].preQuestion),
      question: t(tokens.brands.renee.products[0].skin[0].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[0].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[0].subtitle),
      description: t(tokens.brands.renee.products[0].skin[0].description),
      items: [
        t(tokens.brands.renee.products[0].skin[0].items[0]),
        t(tokens.brands.renee.products[0].skin[0].items[1]),
        t(tokens.brands.renee.products[0].skin[0].items[2]),
      ],
      img: product1,
      buttonStyle: { color: "#009688", borderColor: "#009688" },
      activeStyle: { backgroundColor: "#009688" },
    },
    {
      title: t(tokens.brands.renee.products[0].skin[1].title),
      question: t(tokens.brands.renee.products[0].skin[1].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[1].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[1].subtitle),
      description: t(tokens.brands.renee.products[0].skin[1].description),
      items: [
        t(tokens.brands.renee.products[0].skin[1].items[0]),
        t(tokens.brands.renee.products[0].skin[1].items[1]),
        t(tokens.brands.renee.products[0].skin[1].items[2]),
      ],
      value: "product-2",
      img: product2,
      buttonStyle: { color: "#FF5722", borderColor: "#FF5722" },
      activeStyle: { backgroundColor: "#FF5722" },
    },
    {
      title: t(tokens.brands.renee.products[0].skin[2].title),
      question: t(tokens.brands.renee.products[0].skin[2].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[2].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[2].subtitle),
      description: t(tokens.brands.renee.products[0].skin[2].description),
      items: [
        t(tokens.brands.renee.products[0].skin[2].items[0]),
        t(tokens.brands.renee.products[0].skin[2].items[1]),
        t(tokens.brands.renee.products[0].skin[2].items[2]),
      ],
      value: "product-3",
      img: product3,
      buttonStyle: { color: "#FFD700", borderColor: "#FFD700" },
      activeStyle: { backgroundColor: "#FFD700" },
    },
    {
      title: t(tokens.brands.renee.products[0].skin[3].title),
      question: t(tokens.brands.renee.products[0].skin[3].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[3].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[3].subtitle),
      description: t(tokens.brands.renee.products[0].skin[3].description),
      items: [
        t(tokens.brands.renee.products[0].skin[3].items[0]),
        t(tokens.brands.renee.products[0].skin[3].items[1]),
        t(tokens.brands.renee.products[0].skin[3].items[2]),
      ],
      value: "product-4",
      img: product4,
      buttonStyle: { color: "#E91E63", borderColor: "#E91E63" },
      activeStyle: { backgroundColor: "#E91E63" },
    },
    {
      title: t(tokens.brands.renee.products[0].skin[4].title),
      question: t(tokens.brands.renee.products[0].skin[4].question),
      buttonTitle: t(tokens.brands.renee.products[0].skin[4].buttonTitle),
      subtitle: t(tokens.brands.renee.products[0].skin[4].subtitle),
      description: t(tokens.brands.renee.products[0].skin[4].description),
      items: [
        t(tokens.brands.renee.products[0].skin[4].items[0]),
        t(tokens.brands.renee.products[0].skin[4].items[1]),
        t(tokens.brands.renee.products[0].skin[4].items[2]),
      ],
      value: "product-5",
      img: product5,
      buttonStyle: { color: "#FFC107", borderColor: "#FFC107" },
      activeStyle: { backgroundColor: "#FFC107" },
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Box
      sx={{
        padding: "2rem",
        borderRadius: "8px",
      }}
      maxWidth="xxl"
    >
      <Stack alignItems={"center"} sx={{ width: "100%", padding: 2 }}>
        <Box sx={{ width: "70%", padding: 2 }}>
          <Grid container spacing={4} alignItems="center">
            {products?.map((product) =>
              product.value === tabValue ? (
                <>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2">{product.title}</Typography>
                    <Typography variant="body1" sx={{ color: "#6D6E71" }}>
                      {product.subtitle}
                    </Typography>

                    <Box sx={{ mt: 2, mb: 2 }}>
                      {product.preQuestion && (
                        <Typography variant="body2" sx={{ color: "#8B49AA" }}>
                          {product.preQuestion}
                        </Typography>
                      )}
                      <Typography variant="body2" sx={{ color: "#5A2772" }}>
                        {product.question}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{ mb: 2, color: "#6D6E71" }}
                    >
                      {product.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        minHeight: "457px",
                      }}
                    >
                      <Box
                        component="img"
                        src={product.img}
                        alt="Renee Lift"
                        loading="lazy"
                        sx={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body2"
                      sx={{ mb: 1, color: "#5A2772" }}
                    >
                      {t(tokens.brands.renee.keyBenefits)}
                    </Typography>
                    <Typography component="ul" sx={{ pl: 2, fontSize: "1rem" }}>
                      {product.items.map((item) => (
                        <li>{item}</li>
                      ))}
                    </Typography>
                  </Grid>
                </>
              ) : null
            )}

            <Grid item xs={12} md={12}>
              {/* Button Section */}
              <Stack direction="row" justifyContent={"space-between"}>
                {products?.map((product) => (
                  <Button
                    variant={
                      product.value === tabValue ? "contained" : "outlined"
                    }
                    onClick={() => {
                      handleTabChange(product.value);
                    }}
                    sx={
                      product.value === tabValue
                        ? product.activeStyle
                        : product.buttonStyle
                    }
                  >
                    {product.buttonTitle}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReneeProductComponent;
