import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      {/** Color Context */}
      <ThemeProvider theme={theme}>
        {/** Theme Provider for MUI */}
        <CssBaseline /> {/** Reset css values  */}
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;