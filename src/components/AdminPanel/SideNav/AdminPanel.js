/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 03 2020 20:43:53 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./AdminPanel.module.css";
import SideNav from "./SideNav";

function AdminPanel() {
  // eslint-disable-next-line
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className={styles.AdminPanel}>
      <SideNav />
      {!isAuthenticated && <Redirect to="/admin/login" />}
      {isAuthenticated && (
        <Switch>
          <Route exact path="/admin/manage" />
          <Route exact path="/admin/dashboard" />
        </Switch>
      )}
    </div>
  );
}

export default AdminPanel;
