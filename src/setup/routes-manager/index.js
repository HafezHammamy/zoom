import { Box } from "@mui/material";
import { Footer } from "layout/components/Footer";
import NotFound from "layout/components/NotFound";
import { TopNav } from "layout/components/TopNav";
import AboutUsPage from "pages/about/AboutUsPage";
import BrandsPage from "pages/brands/BrandsPage";
import JuvelookPage from "pages/brands/pages/JuvelookPage";
import KsurgeryPage from "pages/brands/pages/KsurgeryPage";
import LenisnaPage from "pages/brands/pages/LenisnaPage";
import ReneePage from "pages/brands/pages/ReneePage";
import ContactUsPage from "pages/contact/ContactUsPage";
import HomePage from "pages/home/HomePage";
import VisionPage from "pages/vision/VisionPage";
import TermsAndConditionsPage from "pages/terms/TermsAndConditionsPage";
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
        path: "zoom",
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
      {
        path: paths.brands.juvelook,
        element: <JuvelookPage />,
      },
      {
        path: paths.brands.renee,
        element: <ReneePage />,
      },
      {
        path: paths.brands.lenisna,
        element: <LenisnaPage />,
      },
      {
        path: paths.brands.ksurgery,
        element: <KsurgeryPage />,
      },
      {
        path: paths.termsAndConditions,
        element: <TermsAndConditionsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
