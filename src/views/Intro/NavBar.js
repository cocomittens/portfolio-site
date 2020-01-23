import React from "react";
// MUI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function NavBar(props) {
  const { appBar } = props;
  return (
    <AppBar className={appBar}>
      <Toolbar variant="dense">
        <Tabs>
          <Tab label="About"></Tab>
          <Tab label="Portfolio"></Tab>
          <Tab label="Contact"></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
