import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate, useLocation } from "react-router-dom";

import React from 'react'

function ListItems({items, open}) {
    const theme = useTheme();
  
    const navigate = useNavigate();
    let location = useLocation();
  return (
    <List>
{items.map((item) => (
  <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
    <Tooltip title={item.text} placement="right" >
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.3,
        bgcolor:
          location.pathname === item.path
            ? theme.palette.mode === "dark"
              ? grey[800]
              : grey[300]
            : null,
            '&:hover .list-item-text': {
              opacity: 1,
            },
      }}
      onClick={() => {
        navigate(item.path);
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
    </Tooltip>
  </ListItem>
))}
</List>
  )
}

export default ListItems