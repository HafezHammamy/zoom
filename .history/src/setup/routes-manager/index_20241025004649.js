import { Box } from "@mui/material";
import { TopNav } from "common/layout/components/top-nav/TopNav";
import { Footer } from "layout/components/Footer";
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
