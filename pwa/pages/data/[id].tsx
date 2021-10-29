import {useRouter} from 'next/router'
import React from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import {makeStyles, Theme} from "@material-ui/core/styles";
import PersonalInfo from "../../components/data/personal_info";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Tab, Tabs} from "@mui/material";
import Typography from '@material-ui/core/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Data = () => {
  const title = "Mijn Persoonsgegevens"
  const router = useRouter()
  const {id} = router.query

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <Grid container>
              <Grid item xs={12}>
                <Tabs
                  orientation="horizontal"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className={classes.tabs}
                >
                  <Tab label="Basisgegevens" {...a11yProps(0)} />
                  <Tab label="Familie" {...a11yProps(1)} />
                </Tabs>
              </Grid>
              <Grid item xs={9}>
                <TabPanel value={value} index={0}>
                  <PersonalInfo/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <p>test2</p>
                </TabPanel>
              </Grid>
            </Grid>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Data
