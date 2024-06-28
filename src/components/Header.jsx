import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

function Header({title , subTitle}) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.info.light, fontWeight: "bold" ,  [theme.breakpoints.down('sm')]: {fontSize: ' 1px'}  }}
        >
         {title}
        </Typography>
        <Typography variant="body1">{subTitle}</Typography>
      </Box>
    </>
  );
}

export default Header;
