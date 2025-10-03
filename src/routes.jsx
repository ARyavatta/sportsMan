import {
  HomeIcon,
  UserGroupIcon,
  TableCellsIcon,
  BellIcon,
  TrophyIcon,
  CalendarDaysIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "players",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TrophyIcon {...icon} />,
        name: "teams",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "matches",
        path: "/notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
