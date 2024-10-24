import { Box } from "@mui/material";
import { Footer } from "common/layout/components/Footer";
import NotFound from "common/layout/components/NotFound";
import { DrawerHeader } from "common/layout/components/sidebar/Styled";
import { TopNav } from "common/layout/components/top-nav/TopNav";
import { Outlet } from "react-router-dom";

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
