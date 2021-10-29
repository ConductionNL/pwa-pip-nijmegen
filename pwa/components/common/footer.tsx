import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

import makeStyles from '@mui/styles/makeStyles';
import {useRouter} from 'next/router';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import {Paper} from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";
import {useUserContext} from "../context/userContext";
import Typography from "@mui/material/Typography";
import {Login} from "@mui/icons-material";
import { useAppContext } from "../context/state";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles((theme) => ({
  footerStyle: {
    marginTop: 50
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  footerImage: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
},
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  footerItem: {
    textDecoration: "none !important",
    '&:hover': {
      textDecoration: "underline !important",
      color: "white"
    },
  }
}));

export default function Footer() {
  const classes = useStyles();
  const router = useRouter();
  const context = useAppContext();

  const [state, setState] = React.useState({
    bottumNavigation: 0,
  });

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        router.push('/')
    }

    setState({...state, ['bottumNavigation']: newValue});
  }

  const handleLogout = () => {
    sessionStorage.setItem('user', null);
    userContext.setUser(null);
    router.push('/');
  }

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      window.location.href = context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632";
    }
  }

  let userContext = useUserContext();

  return (
    <footer>
      {/*<Paper style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>*/}
      {/*  <BottomNavigation*/}
      {/*    value={state['bottumNavigation']} onChange={handleChange}*/}
      {/*    showLabels*/}
      {/*    className={classes.sectionMobile}*/}
      {/*  >*/}

      {/*    <BottomNavigationAction label="Home" icon={<HomeIcon />} />*/}
      {/*    <BottomNavigationAction label="Klantvragen" icon={<SearchIcon />} />*/}
      {/*    <BottomNavigationAction label="Notificaties" icon={<NotificationsIcon />} />*/}
      {/*    <BottomNavigationAction label="Chatten" icon={<ChatIcon />} />*/}
      {/*    <BottomNavigationAction label="Logout" icon={<LogoutIcon />} />*/}
      {/*  </BottomNavigation>*/}
      {/*</Paper>*/}
      <Box 
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#3A3A3A"
        color="white"
        className={classes.sectionDesktop}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5" component="h5" style={{ textDecoration: 'none' }}>
                  Diensten
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <Link href="/moving" color="inherit" className={classes.footerItem}>
                  Verhuizen
                </Link>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <Link href="/marriage" color="inherit" className={classes.footerItem}>
                  Huwelijk
                </Link>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <Link href="/certificates" color="inherit" className={classes.footerItem}>
                  Uittreksels
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5" component="h5" style={{ textDecoration: 'none '}}>
                  Contact
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <LocationOnIcon/> Stadswinkel, Mariënburg 30
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <Link href="tel:14 024" color="inherit" className={classes.footerItem}>
                  <CallIcon/> 14 024
                </Link>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                <Link href="mailto:gemeente@nijmegen.nl" color="inherit" className={classes.footerItem}>
                  <EmailIcon/> gemeente@nijmegen.nl
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>
                <Typography variant="h5" component="h5" style={{ textDecoration: 'none'}}>
                  Openingstijden
                </Typography>
              </Box>
              <Box sx={{ marginBottom: '15px', marginTop: '15px' }}>
                Maandag - woensdag: 9.00 - 17.00 <br/>
                Donderdag: 9.00 - 20.00 <br/>
                Vrijdag: 9.00 - 17.00
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>


      <div className={classes.footerImage} style={{ backgroundColor: "#212121", paddingTop: "20px", paddingBottom: "20px"}}>
        <img height="32px" width="150px" src="/logo_nijmegen_wit.svg" />
      </div>
    </footer>
  );
}
