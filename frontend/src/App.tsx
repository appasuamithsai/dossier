import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import theme from "./theme/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioOptions from "./components/pages/PortfolioOptions";
import Entry from "./components/organisms/Entry";
import DesignFirstPage from "./components/pages/DesignFirstPage";
import ContextProvider from "./components/utils/ContextProvider";
import DashBoard from "./components/pages/DashBoard";
import FinancePortfolio from "./components/pages/FinancePortfolio";
import Progressbar from "./components/organisms/Progressbar";
import LoginPage from "./components/pages/LoginPage";
import UserPreferences from "./components/pages/UserPreferences";
import { UserContext } from "./components/utils/context";
import CreatePortfolioOptions from "./components/organisms/CreatePortfolioOptions";
import FirstPageInResume from "./components/organisms/FirstPageInResume";
import { useAuth0 } from "@auth0/auth0-react";
import SignInForm from "./components/organisms/SignInForm";
import OtpForm from "./components/organisms/OtpForm";
import StartCustomizing from "./components/pages/StartCustomizing";

export default function App() {
  const [userId, setUserId] = useState<any>("");
  const { isLoading } = useAuth0();
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ContextProvider>
              
              {userId || isLoading ? (
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/signup" element={<Entry />} />
                  <Route
                    path="/finance-portfolio"
                    element={<FinancePortfolio />}
                  />
                  <Route path="/first-page" element={<DesignFirstPage />} />
                  <Route
                    path="/portfolio-options"
                    element={<PortfolioOptions />}
                  />
                  <Route
                    path="/autofill-resume"
                    element={<UserPreferences />}
                  />
                  <Route
                    path="/manually-with-template"
                    element={<UserPreferences />}
                  />
                  <Route
                    path="/start-customizing"
                    element={<StartCustomizing />}
                  />
                  <Route
                    path="/create-portfolio"
                    element={<CreatePortfolioOptions />}
                  />
                  <Route path="/entry" element={<Entry />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
              ) : (
                <Routes>
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/signup" element={<Entry />} />
                  <Route path="*" element={<LoginPage />} />
                </Routes>
              )}
            </ContextProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
