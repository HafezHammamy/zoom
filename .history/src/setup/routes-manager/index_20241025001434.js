import { Box } from "@mui/material";
import { Footer } from "common/layout/components/Footer";
import NotFound from "common/layout/components/NotFound";
import { TopNav } from "common/layout/components/top-nav/TopNav";
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
    children: [...getGestRoutes],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
