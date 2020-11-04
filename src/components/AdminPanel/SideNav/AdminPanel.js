/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:43:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Login from "../Login/Login";
import Manage from "../Manage/Manage";
import styles from "./AdminPanel.module.css";
import SideNav from "./SideNav";

function AdminPanel() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className={styles.AdminPanel}>
      {!isAuthenticated && (
        <>
          <Redirect to="/admin/login" />
          <Route exact path="/admin/login" component={Login} />
        </>
      )}

      {isAuthenticated && (
        <>
          <SideNav />
          <Switch>
            <Route
              exact
              path="/admin"
              render={() => <Redirect to="/admin/dashboard" />}
            />
            <Route exact path="/admin/dashboard" component={DashBoard} />
            <Route exact path="/admin/manage" component={Manage} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default AdminPanel;
