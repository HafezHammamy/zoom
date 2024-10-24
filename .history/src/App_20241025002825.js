import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "setup/routes-manager";
import { SettingsConsumer, SettingsProvider } from "layout/settings";
import AppTheme from "layout/theme/AppTheme";

function App() {
  const element = useRoutes(routes);

  return (
    <SettingsProvider>
      <SettingsConsumer>
        {(settings) => {
          // Prevent theme flicker when restoring custom settings from browser storage
          if (!settings.isInitialized) {
            // return null;
          }

          return <AppTheme settings={settings}>{element}</AppTheme>;
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}

export default App;
