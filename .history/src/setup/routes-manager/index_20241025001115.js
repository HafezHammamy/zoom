import { Box } from "@mui/material";
import { Footer } from "common/layout/components/Footer";
import NotFound from "common/layout/components/NotFound";
import { DrawerHeader } from "common/layout/components/sidebar/Styled";
import { TopNav } from "common/layout/components/top-nav/TopNav";
import { Outlet } from "react-router-dom";

import { authRoutes } from "./auth";
import { dashboardRoutes } from "./dashbord";
import { getGestRoutes } from "./guestRouts";

export const routes = [
  {
    element: (
      <Box>
        <DrawerHeader />
        <TopNav />
        <Outlet />
        <Footer />
      </Box>
    ),
    children: [...getGestRoutes],
  },
  ...authRoutes,
  ...dashboardRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];
