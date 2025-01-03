import { Box, Button, ButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

import opera_1_body_img from "assets/ksurgery/products/body/opera_body1.png";
import opera_1_img from "assets/ksurgery/products/face/opera1.png";
import opera_2_img from "assets/ksurgery/products/face/opera2.png";
import opera_3_img from "assets/ksurgery/products/face/opera3.png";
import opera_4_img from "assets/ksurgery/products/face/opera4.png";
import ProductDetails from "./ProductDetails";

const tabs = [
  { value: "face", label: "Face" },
  { value: "body", label: "Body" },
];

const faceProducts = [
  {
    title: "OPERA I",
    value: "opera-1",
    subtitle: "Fine lines",
    description: `Soft Filler, able to correct wrinkles from fine to medium.`,
    items: [
      "Treatment: barcodes; acne scars; perioral lines, cheek, smokers lines, crows feet",
      "Volume enhancing effect: Soft",
      "Pack: 1x1ml",
      "HA concentration: 1x1ml",
    ],
    img: opera_1_img,
  },
  {
    title: "OPERA II",
    subtitle: "Medium-superficial lines",
    description: `Medium Filler with a soft consistency capable of correcting the medium-superficial lines of the body, redefining the nose and temple volumes as well as enhancing lip volume.`,
    items: [
      "Treatment: nose; tear trough; lips; temples; medium-deep furrows; frown lines, nasolabial folds, laugh lines, accordion lines",
      "Volume enhancing effect: Soft",
      "Pack: 1x1ml",
      "HA concentration: 1x1ml",
    ],
    value: "opera-2",
    img: opera_2_img,
  },
  {
    title: "OPERA III",
    subtitle: "Deeper wrinkles and smile lines",
    description: `Filler capable of correcting deeper lines such as nasolabial wrinkles, marionette lines, jaw margins, small cheek volumes and achieving fuller lips.`,
    items: [
      "Treatment: nasolabial folds; marionette lines; jawline; deep wrinkles; lips; deep furrows; crows feet; tear through; bunny lines; perioral lines; smokers lines",
      "Volume enhancing effect: Strong",
      "Pack: 1x1ml",
      "HA concentration: 1x1ml",
    ],
    value: "opera-3",
    img: opera_3_img,
  },
  {
    title: "OPERA IV",
    subtitle: "Deep lines and signs of ageing",
    description: `Volumetric filler developed to counteract particularly marked signs of ageing by creating a pleasant mini lifting effect. It treats deep furrows, reshapes the structures of the jaw contour and works extensively on cheeks and nose.`,
    items: [
      "Treatment: nasolabial folds; marionette lines; jawline; deep wrinkles; lips; deep furrows; mental crease; chin wrinkles; cheek; jowl",
      "Volume enhancing effect: Strong",
      "Pack: 1x1ml",
      "HA concentration: 1x1ml",
    ],
    value: "opera-4",
    img: opera_4_img,
  },
];

const bodyProducts = [
  {
    title: "Opéra V Body Filler",
    value: "opera-body-1",
    subtitle: "Reshape legs and buttocks without surgery",
    description: `Opéra V is the innovative latest generation leg and buttock filler designed to treat body hollows as well as plump up the buttocks, fill the calves or reshape the knees.
Thanks to its special formula, it guarantees optimal hydration, tissue rejuvenation and the gift of new tone, where a balanced diet and moderate physical activity fail to achieve results.`,
    description2: `Our body filler guarantees  total resorption  and the total  absence of post treatment granulomas. After treatment, you may immediately resume your day-to-day activities.`,
    img: opera_1_body_img,
  },
];

const ProductComponent = () => {
  const [tabValue, setTabValue] = useState("face");

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
            {tabValue === "face" && <ProductDetails products={faceProducts} />}
            {tabValue === "body" && <ProductDetails products={bodyProducts} />}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductComponent;
