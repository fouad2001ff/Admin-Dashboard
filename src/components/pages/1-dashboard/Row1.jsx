import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import {
  EmailOutlined,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";

function Row1() {
  const theme = useTheme();
  return (
    <Stack flexDirection="row" gap={2} flexWrap="wrap">
      <Card
        icon={
          <EmailOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"12,361"}
        title={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"category10"}
      />
      <Card
        icon={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        number={"Sales obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"nivo"}
      />

      <Card
        icon={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"32,441"}
        title={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"dark2"}
      />
      <Card
        icon={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        number={"1,325,134"}
        title={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"accent"}
      />
    </Stack>
  );
}

export default Row1;
