import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarController,
  Decimation,
  BarElement,
  Legend,
  Filler,
  Title,
  Tooltip,
  LinearScale,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import theme from "../../../theme/theme";
import { Box, Typography } from "@mui/material";

ChartJS.register(
  BarElement,
  BarController,
  CategoryScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  LinearScale,
);

export type BarChartProp = {
  title: string;
};

const titleStyle = {
  position: "relative",
  top: "-20px",
  color: "text.primary",
};

const outerBox = {
  height: "150px",
  width: "600px",
  alignItems: "center",
  justifyContent: "center",
};

const graphBox = {
  height: "400px",
  width: "400px",
  marginLeft: "90px",
};
const BarChart: React.FC<BarChartProp> = (props) => {
  const data = {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        data: [200, 98, 420, 500],
        backgroundColor: theme.palette.structural[600],
        display: "none",
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <Box sx={outerBox} p={4}>
        <Typography sx={titleStyle} variant="body1">
          {props.title}
        </Typography>
        <Box sx={graphBox} m={2} p={2}>
          <Chart
            type="bar"
            data={data}
            options={{
              plugins: {
                title: {
                  display: false,
                },

                legend: {
                  display: false,
                  labels: {
                    font: {
                      size: 12,
                      lineHeight: "16",
                      family: "RobotoMedium",
                    },
                  },
                },
              },
              scales: {
                y: {
                  position: "right",
                  min: 0,
                  max: 500,

                  ticks: {
                    stepSize: 100,
                    callback: function (value, _index, _ticks) {
                      return "$" + value + " M";
                    },
                  },
                },
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BarChart;
