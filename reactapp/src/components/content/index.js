import * as React from 'react';
import Button from '@mui/material/Button';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function a11yProps(index) {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography class="resultText">{children}</Typography>
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

function Content() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div class="main">
            <Box
                x={{
                    flexGrow: 1,
                    maxWidth: { xs: 320, sm: 480 },
                    bgcolor: 'background.paper',
                }}
                >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    textColor="#FF5733"
                    indicatorColor="#FF5733"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                    }}
                >
                    <Tab label="vaihtoehto1" {...a11yProps(0)} />
                    <Tab label="2..." {...a11yProps(1)} />
                    <Tab label="kolome" {...a11yProps(2)} />
                    <Tab label="neljä" {...a11yProps(3)} />
                    <Tab label="5" {...a11yProps(4)} />
                    <Tab label="kuusi" {...a11yProps(5)} />
                    <Tab label="seitsemän" {...a11yProps(6)} />
                    <Tab label="kahreksan" {...a11yProps(7)} />
                    <Tab label="ysi" {...a11yProps(8)} />
                </Tabs>
            </Box>

            <h1>Mikä ohjelmistokehittäjä sinä olet?</h1>
            <p class="textBox">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button variant="contained">Mikä kehitysvamma sinulla on?</Button>

            <TabPanel value={value} index={0}>
                joopajoo
            </TabPanel>
            <TabPanel value={value} index={1}>
                niin
            </TabPanel>
            <TabPanel value={value} index={2}>
                joo
            </TabPanel>
            <TabPanel value={value} index={3}>
                ok
            </TabPanel>
            <TabPanel value={value} index={4}>
                jaa
            </TabPanel>
            <TabPanel value={value} index={5}>
                ohjelmistokehittäjä
            </TabPanel>
            <TabPanel value={value} index={6}>
                123
            </TabPanel>
            <TabPanel value={value} index={7}>
                en keksi
            </TabPanel>
            <TabPanel value={value} index={8}>
                lol
            </TabPanel>
        </div>
    );
}

export default Content;