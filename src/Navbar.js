import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

export const Navbar = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box position="sticky" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          position="sticky"
          sx={{ borderBottom: 1, borderColor: "divider", position: "sticky" }}
        >
          <TabList
            position="sticky"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab position="sticky" label="About Me" value="1" />
            <Tab position="sticky" label="Projects" value="2" />
            <Tab position="sticky" label="Contact " value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <About />
        </TabPanel>
        <TabPanel value="2">
          <Projects />
        </TabPanel>
        <TabPanel value="3">
          <Contact />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
