import { addDecorator } from "@storybook/react";
import theme from "../src/theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { MemoryRouter } from "react-router-dom";
import { StylesProvider } from "@mui/styles";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "emotion-theming";
import ContextProvider from "../src/components/utils/ContextProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ContextProvider>
            <Story />
          </ContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </MuiThemeProvider>
  </StylesProvider>
));
addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
