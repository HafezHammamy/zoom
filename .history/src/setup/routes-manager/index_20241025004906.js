import { Box } from "@mui/material";
import { Footer } from "layout/components/Footer";
import NotFound from "layout/components/NotFound";
import HomePage from "pages/home/HomePage";
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
