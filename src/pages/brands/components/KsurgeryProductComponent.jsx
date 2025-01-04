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
      title: "Opéra REV Skinbooster Evolution L",
      buttonTitle: "Evolution L",
      value: "opera-1",
      subtitle: "Bio-revitalizing Filler",
      description: `A skinbooster with hyaluronic acid featuring bio-restructuring action, slightly cross-linked, designed to reduce fine lines, improve skin texture, and give a more youthful appearance.`,
      items: [
        "Application Areas: Forehead, periocular area, nasolabial area, perioral area, cheeks, cheekbones, hands, neck, and neckline",
        "Application Technique: EVA Technique",
        "Molecular Weights of Hyaluronic Acid (HA):500 kDa | 1000 kDa | 2000 kDa",
        "Concentration of Cross-linked HA: 20 mg/ml",
      ],
      img: opera_1_rev_img,
    },
    {
      title: "Opéra REV Skinbooster Evolution S",
      buttonTitle: "Evolution S",
      subtitle: "Biorevitalizing filler",
      description: `Skinbooster faces with hyaluronic acid slightly cross-linked, with biorestructuring action. Ideal for correcting slight facial imperfections, providing intensive hydration to the skin, and give softness to areas with reduced elasticity.`,
      items: [
        "Area of application: forehead, periocular area, nasolabial area, perioral area, cheeks, cheekbones, hands, neck and décolleté.",
        "Technique of application: EVA Technique",
        "Molecular weights of HA: 1000 kda | 1500 kda",
        "Concentration of cross-linked HA: 20 mg/ml",
      ],
      value: "opera-2",
      img: opera_2_rev_img,
    },
  ];

  const bodyRevProducts = [
    {
      title: "Opéra V Body Filler",
      buttonTitle: "Opéra V",
      value: "opera-body-1",
      subtitle: "Reshape legs and buttocks without surgery",
      description: `Opéra V is the innovative latest generation leg and buttock filler designed to treat body hollows as well as plump up the buttocks, fill the calves or reshape the knees.
  Thanks to its special formula, it guarantees optimal hydration, tissue rejuvenation and the gift of new tone, where a balanced diet and moderate physical activity fail to achieve results.`,
      description2: `Our body filler guarantees  total resorption  and the total  absence of post treatment granulomas. After treatment, you may immediately resume your day-to-day activities.`,
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
