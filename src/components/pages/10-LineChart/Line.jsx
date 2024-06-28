import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "japan",
    color: "hsl(283, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 138,
      },
      {
        x: "helicopter",
        y: 73,
      },
      {
        x: "boat",
        y: 66,
      },
      {
        x: "train",
        y: 27,
      },
      {
        x: "subway",
        y: 268,
      },
      {
        x: "bus",
        y: 148,
      },
      {
        x: "car",
        y: 106,
      },
      {
        x: "moto",
        y: 101,
      },
      {
        x: "bicycle",
        y: 188,
      },
      {
        x: "horse",
        y: 74,
      },
      {
        x: "skateboard",
        y: 89,
      },
      {
        x: "others",
        y: 21,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(344, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 294,
      },
      {
        x: "helicopter",
        y: 249,
      },
      {
        x: "boat",
        y: 2,
      },
      {
        x: "train",
        y: 156,
      },
      {
        x: "subway",
        y: 150,
      },
      {
        x: "bus",
        y: 139,
      },
      {
        x: "car",
        y: 107,
      },
      {
        x: "moto",
        y: 187,
      },
      {
        x: "bicycle",
        y: 249,
      },
      {
        x: "horse",
        y: 230,
      },
      {
        x: "skateboard",
        y: 266,
      },
      {
        x: "others",
        y: 6,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(266, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 18,
      },
      {
        x: "helicopter",
        y: 91,
      },
      {
        x: "boat",
        y: 273,
      },
      {
        x: "train",
        y: 137,
      },
      {
        x: "subway",
        y: 296,
      },
      {
        x: "bus",
        y: 126,
      },
      {
        x: "car",
        y: 228,
      },
      {
        x: "moto",
        y: 84,
      },
      {
        x: "bicycle",
        y: 274,
      },
      {
        x: "horse",
        y: 185,
      },
      {
        x: "skateboard",
        y: 193,
      },
      {
        x: "others",
        y: 231,
      },
    ],
  },

  {
    id: "norway",
    color: "hsl(145, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 141,
      },
      {
        x: "helicopter",
        y: 90,
      },
      {
        x: "boat",
        y: 35,
      },
      {
        x: "train",
        y: 269,
      },
      {
        x: "subway",
        y: 150,
      },
      {
        x: "bus",
        y: 89,
      },
      {
        x: "car",
        y: 5,
      },
      {
        x: "moto",
        y: 118,
      },
      {
        x: "bicycle",
        y: 150,
      },
      {
        x: "horse",
        y: 219,
      },
      {
        x: "skateboard",
        y: 275,
      },
      {
        x: "others",
        y: 135,
      },
    ],
  },
];
function Line({ isDashboard = false }) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
        <ResponsiveLine
          theme={{
            // @ts-ignore
            textColor: theme.palette.text.primary,
            fontSize: 11,
            axis: {
              domain: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                },
              },
              ticks: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.secondary,
                },
              },
            },
            grid: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: theme.palette.text.primary,
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: theme.palette.text.primary,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              container: {
                background: theme.palette.background.default,
                color: theme.palette.text.primary,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          curve="cardinal"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          enableGridX={false}
          enableGridY={false}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          areaBaselineValue={30}
          enableTouchCrosshair={true}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </Box>
    </>
  );
}

export default Line;
