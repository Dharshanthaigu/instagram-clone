import "./Card.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { ENDPOINT_URL } from "../../Api";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GridOnIcon from "@mui/icons-material/GridOn";
import MovieIcon from "@mui/icons-material/Movie";
import Card from "./Card";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PhotoGrid() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getUserPhoto();
  }, []);

  async function getUserPhoto() {
    const data = await fetch(`${ENDPOINT_URL}/photos`);
    const json = await data.json();
    setPhotos(json);
  }

  //   const handleData = () => {
  //     const data = photos.map((item) => item.albumId);
  //     console.log("sata", data);
  //   };

  //   handleData();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "68%" }} className="box">
      <Box className="middle_box">
        <Box
          className="sub_box"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#d3d3d3",
                width: "120px",
              },
            }}
            aria-label="basic tabs example"
            centered
          >
            <Tab sx={{ width: "120px" }} {...a11yProps(0)} />
            <Tab sx={{ width: "120px" }} {...a11yProps(1)} />
            <Tab sx={{ width: "120px" }} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Tabs onChange={handleChange} centered>
          <Tab
            sx={{ width: "120px", fontSize: "14px" }}
            icon={<GridOnIcon sx={{ fontSize: "14px" }} />}
            iconPosition="start"
            label="POSTS"
          />
          <Tab
            sx={{ width: "120px", fontSize: "14px" }}
            icon={<MovieIcon sx={{ fontSize: "14px" }} />}
            iconPosition="start"
            label="REELS"
          />
          <Tab
            sx={{ width: "120px", fontSize: "14px" }}
            icon={<PermContactCalendarIcon sx={{ fontSize: "14px" }} />}
            iconPosition="start"
            label="TAGGED"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box className="card">
            {photos.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="card">
            {photos.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="card">
            {photos.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default PhotoGrid;
