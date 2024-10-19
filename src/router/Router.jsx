import React from 'react';
import {useRoutes} from "react-router-dom";

// press rsc and tab to create functional component

const Router = ({allRoutes}) => {

  const routes = useRoutes([...allRoutes])

  return routes;
};

export default Router;