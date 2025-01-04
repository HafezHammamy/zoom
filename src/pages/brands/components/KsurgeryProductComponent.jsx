import { Box, Button, ButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

import opera_1_body_img from "assets/ksurgery/products/body/opera_body1.png";
import opera_1_img from "assets/ksurgery/products/face/opera1.png";
import opera_2_img from "assets/ksurgery/products/face/opera2.png";
import opera_3_img from "assets/ksurgery/products/face/opera3.png";
import opera_4_img from "assets/ksurgery/products/face/opera4.png";
import opera_1_rev_img from "assets/ksurgery/products/face/rev-opera-face1.png";
import opera_2_rev_img from "assets/ksurgery/products/face/rev-opera-face2.png";
import opera_1_body_rev_img from "assets/ksurgery/products/body/rev-opera-body1.png";

import ProductDetails from "./ProductDetails";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";

const KsurgeryProductComponent = ({ collection = 1 }) => {
  const [tabValue, setTabValue] = useState("face");
  const { t } = useTranslation();

  const tabs = [
    { value: "face", label: t(tokens.brands.our_collection.face) },
    { value: "body", label: t(tokens.brands.our_collection.body) },
  ];

  const faceProducts = [
    {
      value: "opera-1",
      title: t(tokens.brands.ksurgery.products[0].face[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[0].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[0].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[0].items[0]),
        t(tokens.brands.ksurgery.products[0].face[0].items[1]),
        t(tokens.brands.ksurgery.products[0].face[0].items[2]),
        t(tokens.brands.ksurgery.products[0].face[0].items[3]),
      ],
      img: opera_1_img,
    },
    {
      value: "opera-2",
      title: t(tokens.brands.ksurgery.products[0].face[1].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[1].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[1].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[1].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[1].items[0]),
        t(tokens.brands.ksurgery.products[0].face[1].items[1]),
        t(tokens.brands.ksurgery.products[0].face[1].items[2]),
        t(tokens.brands.ksurgery.products[0].face[1].items[3]),
      ],
      img: opera_2_img,
    },
    {
      value: "opera-3",
      title: t(tokens.brands.ksurgery.products[0].face[2].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[2].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[2].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[2].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[2].items[0]),
        t(tokens.brands.ksurgery.products[0].face[2].items[1]),
        t(tokens.brands.ksurgery.products[0].face[2].items[2]),
        t(tokens.brands.ksurgery.products[0].face[2].items[3]),
      ],

      img: opera_3_img,
    },
    {
      value: "opera-4",
      title: t(tokens.brands.ksurgery.products[0].face[3].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].face[3].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].face[3].subtitle),
      description: t(tokens.brands.ksurgery.products[0].face[3].description),
      items: [
        t(tokens.brands.ksurgery.products[0].face[3].items[0]),
        t(tokens.brands.ksurgery.products[0].face[3].items[1]),
        t(tokens.brands.ksurgery.products[0].face[3].items[2]),
        t(tokens.brands.ksurgery.products[0].face[3].items[3]),
      ],
      img: opera_4_img,
    },
  ];

  const bodyProducts = [
    {
      value: "opera-body-1",
      title: t(tokens.brands.ksurgery.products[0].body[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[0].body[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[0].body[0].subtitle),
      description: t(tokens.brands.ksurgery.products[0].body[0].description),
      description2: t(tokens.brands.ksurgery.products[0].body[0].description2),
      img: opera_1_body_img,
    },
  ];

  const faceRevProducts = [
    {
      value: "opera-1",
      title: t(tokens.brands.ksurgery.products[1].face[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].face[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].face[0].subtitle),
      description: t(tokens.brands.ksurgery.products[1].face[0].description),
      items: [
        t(tokens.brands.ksurgery.products[1].face[0].items[0]),
        t(tokens.brands.ksurgery.products[1].face[0].items[1]),
        t(tokens.brands.ksurgery.products[1].face[0].items[2]),
        t(tokens.brands.ksurgery.products[1].face[0].items[3]),
      ],
      img: opera_1_rev_img,
    },
    {
      title: t(tokens.brands.ksurgery.products[1].face[1].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].face[1].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].face[1].subtitle),
      description: t(tokens.brands.ksurgery.products[1].face[1].description),
      items: [
        t(tokens.brands.ksurgery.products[1].face[1].items[0]),
        t(tokens.brands.ksurgery.products[1].face[1].items[1]),
        t(tokens.brands.ksurgery.products[1].face[1].items[2]),
        t(tokens.brands.ksurgery.products[1].face[1].items[3]),
      ],
      value: "opera-2",
      img: opera_2_rev_img,
    },
  ];

  const bodyRevProducts = [
    {
      value: "opera-body-1",
      title: t(tokens.brands.ksurgery.products[1].body[0].title),
      buttonTitle: t(tokens.brands.ksurgery.products[1].body[0].buttonTitle),
      subtitle: t(tokens.brands.ksurgery.products[1].body[0].subtitle),
      description: t(tokens.brands.ksurgery.products[1].body[0].description),
      items: [
        t(tokens.brands.ksurgery.products[1].body[0].items[0]),
        t(tokens.brands.ksurgery.products[1].body[0].items[1]),
        t(tokens.brands.ksurgery.products[1].body[0].items[2]),
        t(tokens.brands.ksurgery.products[1].body[0].items[3]),
      ],
      img: opera_1_body_rev_img,
    },
  ];

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  return (
    <Box maxWidth="xxl" sx={{ height: "80vh" }}>
      <Stack alignItems={"center"} sx={{ width: "100%", padding: 2 }}>
        <Box sx={{ width: "70%", padding: 2 }}>
          <Stack spacing={5}>
            <Stack direction={"row"} justifyContent={"center"}>
              <ButtonGroup variant="contained">
                {tabs.map((tab) => (
                  <Button
                    onClick={() => {
                      handleTabChange(tab.value);
                    }}
                    color={tabValue === tab.value ? "primary" : "default"}
                    size="large"
                  >
                    {tab.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Stack>
            {tabValue === "face" && (
              <ProductDetails
                products={collection === 1 ? faceProducts : faceRevProducts}
                collection={collection}
              />
            )}
            {tabValue === "body" && (
              <ProductDetails
                products={collection === 1 ? bodyProducts : bodyRevProducts}
                collection={collection}
              />
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default KsurgeryProductComponent;
