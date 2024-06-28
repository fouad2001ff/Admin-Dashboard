import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../9-pie/Pie";
import BarChart from "../8-bar chart/BarChart";

function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={1} flexWrap={"wrap"} mt={2} mb={3}>
      <Paper sx={{ p: 3, minWidth: "48%" , flexGrow: ' 1' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: theme.palette.secondary.main }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />

        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h6">$48,352 revenue generated</Typography>

          <Typography variant="h6">
            Includes extra misc expenditures and costs
          </Typography>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, flexGrow: 1 }}>
        <Typography
          sx={{ fontWeight: "bold", color: theme.palette.secondary.main }}
          variant="h6"
        >
          Sales Quantity
        </Typography>

        <BarChart isDashbord={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;
