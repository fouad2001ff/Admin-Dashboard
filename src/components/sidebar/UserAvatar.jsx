import { Avatar, Box, Typography, useTheme } from "@mui/material";


function UserAvatar({open ,}) {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 1, mx: "auto" }}>
    <Avatar
      sx={{
        mb: 1,
        width: open ? 88 : 44,
        height: open ? 88 : 44,
        border: "2px solid white",
        transition: "0.25s",
      }}
      alt="Remy Sharp"
      src="imgs\team-01.png"
    />

    <Typography sx={{ fontSize: open ? 17 : 0 }} align="center">
      Fouad
    </Typography>
    <Typography
      sx={{ fontSize: open ? 17 : 0 }}
      color={theme.palette.info.main}
      align="center"
    >
      Admin
    </Typography>
  </Box>
  )
}

export default UserAvatar