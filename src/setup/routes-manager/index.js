import { Box } from "@mui/material";
import { Footer } from "layout/components/Footer";
import NotFound from "layout/components/NotFound";
import { TopNav } from "layout/components/TopNav";
import AboutUsPage from "pages/about/AboutUsPage";
import BrandsPage from "pages/brands/BrandsPage";
import ContactUsPage from "pages/contact/ContactUsPage";
import HomePage from "pages/home/HomePage";
import VisionPage from "pages/vision/VisionPage";
import { paths } from "paths";
import { Outlet } from "react-router-dom";

export const routes = [
  {
    element: (
      <Box>
        <TopNav />
        <Outlet />
        <Footer />
      </Box>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        index: "zoom",
        element: <HomePage />,
      },
      {
        path: paths.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: paths.contactUs,
        element: <ContactUsPage />,
      },
      {
        path: paths.vision,
        element: <VisionPage />,
      },
      {
        path: paths.ourBrands,
        element: <BrandsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
