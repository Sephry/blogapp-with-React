import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TeamsProfile from './TeamsProfile';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"

    >
      {value === index && (
        <Box className='grid grid-rows-3 gap-x-8 mt-12 '>
          <Typography className='grid grid-cols-3 gap-y-8 gap-x-8'>{children}</Typography>
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



export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className=''>
      <AppBar position="static" color='default' className='border border-blue-600 dark:border-blue-400 rounded-2xl p-2 items-center justify-center'>
        <Tabs
          className='flex rounded-2xl mx-80 '
          value={value}
          onChange={handleChange}

        >
          <Tab label="Development" className=" px-4 py-2 text-sm font-medium text-white capitalize duration-300 md:py-3 focus:outline-none  hover:text-blue-400  rounded-xl md:px-12" />
          <Tab label="Design" className=" px-4 py-2 text-sm font-medium text-white capitalize  duration-300 md:py-3  focus:outline-none  hover:text-blue-400 rounded-xl md:px-12" />
          <Tab label="Marketing" className="px-4 py-2 text-sm font-medium text-white capitalize  duration-300 md:py-3  focus:outline-none  hover:text-blue-400 rounded-xl md:px-12" />
        </Tabs>
      </AppBar>
      

        <TabPanel value={value} index={0} >
          <TeamsProfile />
          <TeamsProfile />

        </TabPanel>
        <TabPanel value={value} index={1}>
          <TeamsProfile />
          <TeamsProfile />
          <TeamsProfile />

        </TabPanel>
        <TabPanel value={value} index={2} >
          <TeamsProfile />
          <TeamsProfile />
          <TeamsProfile />
          <TeamsProfile />
        </TabPanel>
      
    </Box>
  );
}
