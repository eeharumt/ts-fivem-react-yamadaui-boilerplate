import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UIProvider } from "@yamada-ui/react";
import App from "./components/App";
import { VisibilityProvider } from "./providers/VisibilityProvider";

import {
  extendTheme,
  UIStyle,
  ThemeConfig,
  extendConfig,
} from "@yamada-ui/react";

const globalStyle: UIStyle = {
  body: {
    bg: "none",
  },
};
const customTheme = extendTheme({ styles: { globalStyle } })();
export const config: ThemeConfig = {
  initialColorMode: "dark",
};
const customConfig = extendConfig(config);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider theme={customTheme} config={customConfig}>
      {/* <VisibilityProvider componentName="Welcome"> */}
        <App />
      {/* </VisibilityProvider> */}
    </UIProvider>
  </StrictMode>
);
