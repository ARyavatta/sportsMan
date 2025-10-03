import React, { Suspense, lazy } from "react";
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

// Lazy load components for better code splitting
const Home = lazy(() => import("@/pages/dashboard/home"));
const Profile = lazy(() => import("@/pages/dashboard/profile"));
const Tables = lazy(() => import("@/pages/dashboard/tables"));
const Notifications = lazy(() => import("@/pages/dashboard/notifications"));
const SignIn = lazy(() => import("@/pages/auth/sign-in"));
const SignUp = lazy(() => import("@/pages/auth/sign-up"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

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
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "players",
        path: "/profile",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Profile />
          </Suspense>
        ),
      },
      {
        icon: <TrophyIcon {...icon} />,
        name: "teams",
        path: "/tables",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Tables />
          </Suspense>
        ),
      },
      {
        icon: <CalendarDaysIcon {...icon} />,
        name: "matches",
        path: "/notifications",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Notifications />
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
