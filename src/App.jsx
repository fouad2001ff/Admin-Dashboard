import { ThemeProvider } from "@emotion/react";
import TopBar from "./components/topbar/Topbar";
import  { useMemo, useState } from "react";
import { Box, CssBaseline,  createTheme, styled } from "@mui/material";
import { getDesignTokens } from "./theme";
import SideBar from "./components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export default function App() {
  const [mode, setMode] = useState(localStorage.getItem("currentMode"));
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
       <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        setMode={setMode}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
        </Box>
    </ThemeProvider>
  );
}
