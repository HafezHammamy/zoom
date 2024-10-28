import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
// import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/system/colorManipulator";
import logo from "assets/logo.png";
import { usePathname } from "hooks/use-pathname";
import { useWindowScroll } from "hooks/use-window-scroll";
// import { Logo } from "src/components/logo";
import { paths } from "paths";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import GuestSideNav from "./GuestSideNav";
import { RouterLink } from "./router-link";
import { TopNavItem } from "./top-nav-item";
import { useMobileNav } from "./use-mobile-nav";
import { SvgIcon, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { tokens } from "locales/tokens";
import { useSettings } from "hooks/use-settings";
// import { PagesPopover } from "./PagesPopover";

const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const mobileNav = useMobileNav();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [languageLabel, setLanguageLabel] = useState("en");
  const { handleUpdate } = useSettings();

  const handleLanguageLabels = useCallback(
    (language) => {
      if (language === "ar") {
        handleUpdate({
          direction: "rtl",
        });

        setLanguageLabel("English");
        setLanguage("en");
      }
      if (language === "en") {
        handleUpdate({
          direction: "ltr",
        });
        setLanguageLabel("عربي");
        setLanguage("ar");
      }
    },
    [handleUpdate]
  );

  const handleChange = useCallback(
    async (language) => {
      await i18n.changeLanguage(language);
      handleLanguageLabels(language);
    },
    [i18n, handleLanguageLabels]
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    handleLanguageLabels(savedLanguage || "en");
    return () => {};
  }, [language, languageLabel, handleLanguageLabels]);

  const items = [
    {
      title: t(tokens.nav.home),
      path: paths.index,
    },
    {
      title: t(tokens.nav.about),
      path: paths.aboutUs,
    },
    {
      title: t(tokens.nav.brands),
      path: paths.ourBrands,
    },
    {
      title: t(tokens.nav.contact),
      path: paths.contactUs,
    },
  ];

  // const { onMobileNavOpen } = props;
  const pathname = usePathname();
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  // const theme = useTheme();

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
        maxWidth="xxl"
        component="header"
        sx={{
          left: 0,
          position: "fixed",
          backdropFilter: "blur(6px)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "#fff",
          right: 0,
          top: 0,
          transition: (theme) =>
            theme.transitions.create("box-shadow, background-color", {
              easing: theme.transitions.easing.easeInOut,
              duration: 200,
            }),
          ...(elevate && {
            color: "#ab92e1",
            backgroundColor: (theme) =>
              alpha(theme.palette.background.paper, 0.9),
            boxShadow: 8,
          }),
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            boxShadow: "none",
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
                    <img
                      style={{ height: "100%" }}
                      src={logo}
                      alt={"Dynamics"}
                    />
                  </Box>
                )}
                {!mdUp && (
                  <Box style={{ height: "40px" }}>
                    {/* <img
                      style={{ height: "100%" }}
                      src={
                        theme.palette.mode === "dark"
                          ? ShortLightQualifiedCrewLogo
                          : ShortDarkQualifiedCrewLogo
                      }
                      alt={"Qualified Crew"}
                    /> */}
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
            >
              <Tooltip title={languageLabel}>
                <IconButton
                  onClick={() => handleChange(language)}
                  aria-label="language"
                >
                  <SvgIcon
                    sx={{
                      color: "#fff",
                      ...(elevate && {
                        color: "#ab92e1",
                      }),
                    }}
                  >
                    <LanguageIcon />
                  </SvgIcon>
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
