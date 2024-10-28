import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/system/colorManipulator";
// import QualifiedCrewLogoLight from "assets/logo-light.svg";
// import ShortDarkQualifiedCrewLogo from "assets/logo-short-dark.svg";
// import ShortLightQualifiedCrewLogo from "assets/logo-short-light.svg";
// import QualifiedCrewLogo from "assets/logo.svg";
import { usePathname } from "hooks/use-pathname";
import { useWindowScroll } from "hooks/use-window-scroll";
// import { Logo } from "src/components/logo";
import { paths } from "paths";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";

import GuestSideNav from "./GuestSideNav";
import { RouterLink } from "./router-link";
// import { PagesPopover } from "./PagesPopover";
import { TopNavItem } from "./TopNavItem";

const items = [
  {
    title: "Home",
    path: paths.index,
  },
  {
    title: "Pricing",
    path: paths.pricing,
  },
  {
    title: "Contact us",
    path: paths.contact,
  },
  // {
  //   title: "Services",
  //   popover: <PagesPopover />,
  // },
];

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  // const { onMobileNavOpen } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const theme = useTheme();

  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;
  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <>
      {!lgUp && (
        <GuestSideNav
          items={items}
          onClose={mobileNav.handleClose}
          open={mobileNav.open}
        />
      )}
      <Box
        component="header"
        sx={{
          left: 0,
          position: "fixed",
          right: 0,
          top: 0,
          pt: 2,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backdropFilter: "blur(6px)",
            backgroundColor: "transparent",
            borderRadius: 2.5,
            boxShadow: "none",
            transition: (theme) =>
              theme.transitions.create("box-shadow, background-color", {
                easing: theme.transitions.easing.easeInOut,
                duration: 200,
              }),
            ...(elevate && {
              backgroundColor: (theme) =>
                alpha(theme.palette.background.paper, 0.9),
              boxShadow: 8,
            }),
          }}
        >
          <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{ flexGrow: 1 }}
            >
              <Stack
                alignItems="center"
                component={RouterLink}
                direction="row"
                display="inline-flex"
                href={paths.index}
                spacing={1}
                sx={{ textDecoration: "none" }}
              >
                {mdUp && (
                  <Box style={{ height: "30px" }}>
                    {/* <img
                      style={{ height: "100%" }}
                      src={
                        theme.palette.mode === "dark"
                          ? QualifiedCrewLogoLight
                          : QualifiedCrewLogo
                      }
                      alt={"Qualified Crew"}
                    /> */}
                  </Box>
                )}
                {!mdUp && (
                  <Box style={{ height: "40px" }}>
                    <img
                      style={{ height: "100%" }}
                      src={
                        theme.palette.mode === "dark"
                          ? ShortLightQualifiedCrewLogo
                          : ShortDarkQualifiedCrewLogo
                      }
                      alt={"Qualified Crew"}
                    />
                  </Box>
                )}
              </Stack>
            </Stack>
            {mdUp && (
              <Stack alignItems="center" direction="row" spacing={2}>
                <Box component="nav" sx={{ height: "100%" }}>
                  <Stack
                    component="ul"
                    alignItems="center"
                    justifyContent="center"
                    direction="row"
                    spacing={1}
                    sx={{
                      height: "100%",
                      listStyle: "none",
                      m: 0,
                      p: 0,
                    }}
                  >
                    <>
                      {items.map((item) => {
                        const checkPath = !!(item.path && pathname);
                        const partialMatch = checkPath
                          ? pathname.includes(item.path)
                          : false;
                        const exactMatch = checkPath
                          ? pathname === item.path
                          : false;
                        const active = item.popover ? partialMatch : exactMatch;

                        return (
                          <TopNavItem
                            active={active}
                            external={item.external}
                            key={item.title}
                            path={item.path}
                            popover={item.popover}
                            title={item.title}
                          />
                        );
                      })}
                    </>
                  </Stack>
                </Box>
              </Stack>
            )}

            <Stack
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ flexGrow: 1 }}
            ></Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
