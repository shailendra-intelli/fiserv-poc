import React from "react";
import { Route, Routes } from "react-router-dom";
import { GuiRoutes } from "./Routes";

const AppRoutes: React.FC<any> = (props: any)=> {

  const renderRoutes = () => {
    return (GuiRoutes || []).map((route: any, i: any) => {
      return <Route path={route.path} key={i} element={<route.component />} />;
    })
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default AppRoutes;
