import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../10-LineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

function Row2() {
  const theme = useTheme();
  return (
    <Stack sx={{ mt: 5, flexDirection: "row", flexWrap: "wrap", gap: 1.1 }}>
      <Paper sx={{ maxWidth: 900, flexGrow: " 1 " }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={1.2}
        >
          <Box>
            <Typography
              sx={{
                ml: 4,
                mt: 2,
                mb: 1,
                color: theme.palette.secondary.main,
                fontWeight: "bold",
              }}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography sx={{ ml: 4 }} variant="body2">
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>

      <Box
        sx={{
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
          overflow: "auto",
          borderRadius: "4px"
        }}
      >
        <Paper sx={{ p: 1.2 }}>
          <Typography
            sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                p: 1.2,
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body1">{item.user}</Typography>
              </Box>
              <Typography>{item.date}</Typography>
              <Typography
                bgcolor={theme.palette.error.main}
                p={0.5}
                borderRadius={1}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export default Row2;
