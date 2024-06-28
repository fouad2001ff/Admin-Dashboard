// @ts-nocheck
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {  Box, AppBar as MuiAppBar, alpha } from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  MenuOutlined,
  NotificationsOutlined,
  Person2Outlined,
  SettingsOutlined,
} from "@mui/icons-material";
import SearchBar from "./SearchBar";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();

  const toggleMode = ({ icon }) => {
    const newMode = theme.palette.mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("currentMode", newMode);
  };

  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuOutlined />
        </IconButton>
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Box display={'flex'} flexDirection={'row'}>
          <IconButton onClick={toggleMode} color="inherit">
            {theme.palette.mode === "light" ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )}
          </IconButton>
          <IconButton color="inherit">
            <NotificationsOutlined />
          </IconButton>
          <IconButton color="inherit">
            <SettingsOutlined />
          </IconButton>
          <IconButton color="inherit">
            <Person2Outlined />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
