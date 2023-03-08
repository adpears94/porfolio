import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { About } from "./components/About2";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { alpha} from "@mui/material";
import { Home } from "./components/Homepage";


export const Navbar = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100.86%", typography: "body1", position: "center", m: '0px', ml: -1, mt: -1.5 }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", position: "sticky", justifyContent: 'center' }}
        >
          <TabList
            sx={{
             color: "#FAF9F6",
            justifyContent: 'center',
            
              backgroundColor: alpha("#000000", 0.1),
              position: "sticky",
              '& .MuiButtonBase-root': {color: 'black'},
              // '& .Mui-selected': {color: '#fefefe'},
              // "& .MuiTab-root": {
              //   Color: "#fefefe",
              // },
              "& label.Mui-selected": { color: "black" },
              "& .MuiTab-root": {
                "&.Mui-selected ": {
                  color: "#aa7e39",
                  borderColor: "#aa7e39",
                },
              },
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "black",
                color: "#FAF9F6"
              }}}
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab sx={{ color: "#FAF9F6", ml: "38%"  }} label="Home" value="1" />
            <Tab sx={{ color: "#FAF9F6",  }} label="About Me" value="2" />
            <Tab sx={{ color: "#FAF9F6" }} label="Projects" value="3" />
            <Tab sx={{ color: "#FAF9F6" }} label="Contact " value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Home />
        </TabPanel>
        <TabPanel value="2">
          <About />
        </TabPanel>
        <TabPanel value="3">
          <Projects />
        </TabPanel>
        <TabPanel value="4">
          <Contact />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
