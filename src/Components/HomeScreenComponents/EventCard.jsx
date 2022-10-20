import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import EventListCard from './EventListCard';

export default function EventCard({ dateRange }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleclose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <div className='mx-40 mt-10'>
      <Button  aria-describedby={id} variant="contained" size='large' color='success' onClick={handleClick}>
        View Events
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleclose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />
        <EventListCard />

      </Popover>
    </div>
  );
}
