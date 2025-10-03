import {
  UserGroupIcon,
  TrophyIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: UserGroupIcon,
    title: "Active Players",
    value: "1,247",
    footer: {
      color: "text-green-500",
      value: "+12%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: TrophyIcon,
    title: "Total Teams",
    value: "48",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last season",
    },
  },
  {
    color: "gray",
    icon: CalendarDaysIcon,
    title: "Matches This Week",
    value: "23",
    footer: {
      color: "text-red-500",
      value: "-8%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: CurrencyDollarIcon,
    title: "Season Revenue",
    value: "$284,500",
    footer: {
      color: "text-green-500",
      value: "+18%",
      label: "than last season",
    },
  },
];

export default statisticsCardsData;
