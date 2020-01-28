import React from "react";

// MUI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function NavBar(props) {
  const { appBar } = props;

  const [value, setValue] = React.useState(0);

  const handleChange=(event, newValue) => {
    setValue(newValue)
  }
  return (
    <AppBar color="default" className={appBar}>
      <Toolbar variant="dense">
        <Tabs centered value={value} onChange={handleChange}>
          <Tab label="About"></Tab>

          <Tab label="Portfolio"></Tab>

          <Tab label="Contact"></Tab>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
