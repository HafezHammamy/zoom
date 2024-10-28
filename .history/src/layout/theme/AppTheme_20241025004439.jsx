import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useNprogress } from "hooks/use-nprogress";
import React from "react";
import { Helmet } from "react-helmet-async";

import { createTheme } from "./CreateTheme";
import { RTL } from "./RTL";

const AppTheme = ({ children, settings, auth }) => {
  const theme = createTheme({
    colorPreset: settings.colorPreset,
    contrast: settings.contrast,
    direction: settings.direction,
    paletteMode: settings.paletteMode,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  useNprogress();

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="color-scheme" content={settings.paletteMode} />
        <meta name="theme-color" content={theme.palette.neutral[900]} />
      </Helmet>

      <RTL direction={settings.direction}>
        <CssBaseline />
        {children}
        {/* <SettingsButton onClick={settings.handleDrawerOpen} /> */}
        <SettingsDrawer
          canReset={settings.isCustom}
          onClose={settings.handleDrawerClose}
          onReset={settings.handleReset}
          onUpdate={settings.handleUpdate}
          open={settings.openDrawer}
          values={{
            colorPreset: settings.colorPreset,
            contrast: settings.contrast,
            direction: settings.direction,
            paletteMode: settings.paletteMode,
            responsiveFontSizes: settings.responsiveFontSizes,
            stretch: settings.stretch,
            layout: settings.layout,
            navColor: settings.navColor,
          }}
        />
      </RTL>
    </ThemeProvider>
  );
};

export default AppTheme;
