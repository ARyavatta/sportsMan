import { chartsConfig } from "@/configs";

const playerAttendanceChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Attendance",
      data: [85, 78, 92, 88, 95, 82, 90],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  },
};

const matchRevenueChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Revenue",
      data: [12000, 15000, 18000, 22000, 25000, 28000, 32000, 35000, 38000],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

const teamPerformanceChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Performance",
      data: [75, 80, 85, 82, 88, 90, 87, 92, 95],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Player Attendance",
    description: "Weekly training session attendance",
    footer: "last updated 2 hours ago",
    chart: playerAttendanceChart,
  },
  {
    color: "white",
    title: "Match Revenue",
    description: "Monthly ticket and merchandise sales",
    footer: "updated 1 day ago",
    chart: matchRevenueChart,
  },
  {
    color: "white",
    title: "Team Performance",
    description: "Overall team performance rating",
    footer: "just updated",
    chart: teamPerformanceChart,
  },
];

export default statisticsChartsData;
