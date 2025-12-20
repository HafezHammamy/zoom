import React, { useState } from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
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
      buttonStyle: { color: "#0DADA5", borderColor: "#0DADA5" },
      activeStyle: { backgroundColor: "#0DADA5" },
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
      buttonStyle: { color: "#E48F75", borderColor: "#E48F75" },
      activeStyle: { backgroundColor: "#E48F75" },
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
      buttonStyle: { color: "#F2E149", borderColor: "#F2E149" },
      activeStyle: { backgroundColor: "#F2E149" },
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
      buttonStyle: { color: "#DFA9B3", borderColor: "#DFA9B3" },
      activeStyle: { backgroundColor: "#DFA9B3" },
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
      buttonStyle: { color: "#EFB854", borderColor: "#EFB854" },
      activeStyle: { backgroundColor: "#EFB854" },
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, md: "2rem" },
        borderRadius: "8px",
      }}
      maxWidth="xxl"
    >
      <Stack alignItems={"stretch"} sx={{ width: "100%" }}>
        <Container maxWidth="xl" sx={{ py: { xs: 1, md: 2 } }}>
          <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
            {products?.map((product) =>
              product.value === tabValue ? (
                <>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.875rem", md: "inherit" },
                        mb: { xs: 1, md: 0 },
                      }}
                    >
                      {product.title}
                    </Typography>
                    <Box
                      sx={{
                        height: { xs: "auto", md: "50px" },
                        mb: { xs: 1, md: 0 },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#6D6E71",
                          fontSize: { xs: "0.875rem", md: "inherit" },
                        }}
                      >
                        {product.subtitle}
                      </Typography>
                    </Box>

                    <Box sx={{ mt: { xs: 1, md: 2 }, mb: { xs: 1, md: 2 } }}>
                      {product.preQuestion && (
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#8B49AA",
                            fontSize: { xs: "0.75rem", md: "inherit" },
                          }}
                        >
                          {product.preQuestion}
                        </Typography>
                      )}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#5A2772",
                          fontSize: { xs: "0.75rem", md: "inherit" },
                        }}
                      >
                        {product.question}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: { xs: 1, md: 2 },
                        color: "#6D6E71",
                        fontSize: { xs: "0.75rem", md: "inherit" },
                      }}
                    >
                      {product.description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        minHeight: { xs: "auto", md: "457px" },
                        mb: { xs: 2, md: 0 },
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
                          width: { xs: "80%", md: "100%" },
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: "#5A2772",
                        fontSize: { xs: "0.875rem", md: "inherit" },
                      }}
                    >
                      {t(tokens.brands.renee.keyBenefits)}
                    </Typography>
                    <Typography
                      component="ul"
                      sx={{
                        pl: 2,
                        fontSize: { xs: "0.75rem", md: "1rem" },
                      }}
                    >
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
              <Grid
                item
                xs={12}
                md={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 1, md: 2 }}
                  sx={{ width: { xs: "100%", md: "auto" } }}
                >
                  {products?.map((product) => (
                    <Button
                      variant={
                        product.value === tabValue ? "contained" : "outlined"
                      }
                      onClick={() => handleTabChange(product.value)}
                      sx={{
                        minWidth: { xs: "100%", md: "150px" },
                        fontSize: { xs: "0.75rem", md: "inherit" },
                        py: { xs: 1, md: 1.5 },
                        ...(product.value === tabValue
                          ? product.activeStyle
                          : product.buttonStyle),
                      }}
                    >
                      {product.buttonTitle}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </Box>
  );
};

export default ReneeProductComponent;
