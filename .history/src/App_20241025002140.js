import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "setup/routes-manager";
import { SettingsProvider } from "layout/settings";

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

          return (
            <AppTheme settings={settings}>
              {element}
              <ToastContainer
                transition={Flip}
                theme="dark"
                newestOnTop
                position="bottom-right"
              />
            </AppTheme>
          );
        }}
      </SettingsConsumer>
    </SettingsProvider>
  );
}

export default App;
