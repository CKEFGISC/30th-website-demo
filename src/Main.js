import React from "react";
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

import Page, { ErrorPage } from "./utils/Page";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Events from "./pages/events/Events";
import Museum from "./pages/museum/Museum";
import Team from "./pages/team/Team";
import CourseList from "./pages/courses/pages/List";
import CourseIndividual from "./pages/courses/pages/Individual";

const router = createHashRouter([
  { path: "/", element: (<Page title="首頁"><Home /></Page>), errorElement: (<ErrorPage />) },
  { path: "/about", element: (<Page title="關於"><About /></Page>) },
  { path: "/events", element: (<Page title="活動"><Events /></Page>) },
  { path: "/courses", element: (<Page title="課程"><CourseList /></Page>) },
  { path: "/courses/:id", element: (<Page title="課程"><CourseIndividual /></Page>) },
  { path: "/museum", element: (<Page title="博物館"><Museum /></Page>) },
  { path: "/team", element: (<Page title="幹部"><Team /></Page>) },
]);

export default function Main() {
  return (
    <RouterProvider router={router} />
  );
}
