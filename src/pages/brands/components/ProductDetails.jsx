import { Box, Button, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const ProductDetails = ({ products }) => {
  const theme = useTheme();
  const [productTab, setProductTab] = useState(
    products ? products[0].value : ""
  );

  return (
    <Box>
      {products?.map((product) => {
        return product.value === productTab ? (
          <Stack direction={"row"} sx={{ height: "50vh" }}>
            <Box width={"50%"}>
              <Stack spacing={1}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color={theme.palette.primary.main}
                  gutterBottom
                >
                  {product.subtitle}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {product.description}
                </Typography>
              </Stack>

              <ul style={{ color: theme.palette.primary.main }}>
                {product?.items?.map((item) => {
                  return (
                    <li key={item}>
                      <Typography variant="body">{item} </Typography>
                    </li>
                  );
                })}
              </ul>
              {product.description2 && (
                <Typography variant="body1" gutterBottom>
                  {product.description2}
                </Typography>
              )}
            </Box>
            <Box width={"50%"}>
              <Box
                component="img"
                src={
                  product.img ? product.img : "https://via.placeholder.com/250"
                }
                sx={{ width: "100%" }}
                alt="Product Image"
              />
            </Box>
          </Stack>
        ) : null;
      })}

      <Stack alignItems={"center"}>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          sx={{ width: "50%" }}
        >
          {products.length > 1 &&
            products?.map((product) => {
              return (
                <Button
                  onClick={() => {
                    setProductTab(product.value);
                  }}
                  variant={
                    product.value === productTab ? "contained" : "outlined"
                  }
                >
                  {product.title}
                </Button>
              );
            })}
        </Stack>
      </Stack>
    </Box>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
