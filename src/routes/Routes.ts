import Home from "../layout/Layout";

export const GuiRoutes = [
  {
    path: "",
    component: Home,
    title: "Home",
  },
  {
    path: "*",
    component: Home,
    title: "Home",
  },
];
