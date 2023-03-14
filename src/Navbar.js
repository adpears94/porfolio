import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tab, Button } from "@mui/material";
// import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { About } from "./components/About2";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { alpha } from "@mui/material";
import { Home } from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { zIndex } from "@mui/system";
import { positions } from "@mui/system";

export const Navbar = () => {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <TabContext  value={value}>
      {/* <Box
        sx={{
          display: "flex",
          // flexDirection: "row",
          // width: "100%",
          // justifyContent: "center",

          // borderBotto: 1,
          // borderColor: "divider",

          justifyContent: "center",
        }}
      > */}
        
        <TabList
        centered={true}
          sx={{
            color: "#FAF9F6",
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            mt: -1.5,
            ml: -1,
            backgroundColor: alpha("#000000", 0.2),

            position: "sticky",
            "& .MuiButtonBase-root": { color: "white" },
            // '& .Mui-selected': {color: '#fefefe'},
            // "& .MuiTab-root": {
            //   Color: "#fefefe",
            // },
            "& label.Mui-selected": { color: "white" },
            "& .MuiTab-root": {
              "&.Mui-selected ": {
                color: "#aa7e39",
                borderColor: "#aa7e39",
              },
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#aa7e39",
              color: "#FAF9F6",
            },
          }}
          onChange={handleChange}
          aria-label="lab API tabs example"
        >
            <Tab
              sx={{
                color: "#FAF9F6",
                //  ml: "38%"
              }}
              onClick={() => navigate("/")}
              label="Home"
              value="1"
            />
            <Tab
              sx={{ color: "#FAF9F6" }}
              onClick={() => navigate("/About")}
              label="About Me"
              value="2"
            />
            <Tab
              sx={{ color: "#FAF9F6" }}
              onClick={() => navigate("/Projects")}
              label="Projects"
              value="3"
            />
            <Tab
              sx={{ color: "#FAF9F6" }}
              onClick={() => navigate("/Contact")}
              label="Contact "
              value="4"
            />
        </TabList>
          
      {/* </Box> */}
      <TabPanel value="1"></TabPanel>
      <TabPanel value="2"></TabPanel>
      <TabPanel value="3"></TabPanel>
      <TabPanel value="4"></TabPanel>
    </TabContext>
    
  );
};
