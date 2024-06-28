import { Box, Paper } from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Geography from "../11-geography/Geography";

function Dashboard() {
  return (
    <Box>
      <DashboardHeader />
      <Row1 />
      <Row2 />
      <Row3 />
      <Paper>
        <Geography isDashboard={true} />
      </Paper>
    </Box>
  );
}

export default Dashboard;
