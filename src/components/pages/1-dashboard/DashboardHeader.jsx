import { Box, Button } from "@mui/material";
import Header from "../../Header";
import { DownloadOutlined } from "@mui/icons-material";

function DashboardHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: " center",
      }}
    >
      <Header title={"DASHBOARD"} subTitle={"Welcome to your dashboar"} />
      <Button
        sx={{ padding: "6px 10px" , mb:3 }}
        variant="contained"
        startIcon={<DownloadOutlined />}
      >
        Download Reports
      </Button>
    </Box>
  );
}

export default DashboardHeader;
