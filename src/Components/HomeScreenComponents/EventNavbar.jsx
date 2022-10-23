import { Button, Drawer, rgbToHex } from "@mui/material";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import EventListCard from "./EventListCard";
import HomeDatePicker from "./HomeDatePicker";

function EventNavbar({ dateRange }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleclose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <li className="px-2 md:px-4">
      <Button
        variant="plain"
        color="neutral"
        aria-describedby={id}
        className="text-gray-500 font-semibold hover:text-green-600"
        onClick={handleClick}
      >
        View Events
      </Button>
     { <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleclose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <HomeDatePicker />

        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
      </Popover>}
    </li>
  );
}

export default EventNavbar;
