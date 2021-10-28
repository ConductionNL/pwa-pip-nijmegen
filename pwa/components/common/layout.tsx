import Head from "next/head";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import React from "react";

import Header from "./header";
import Footer from "./footer";
import makeStyles from '@mui/styles/makeStyles';
import {RestfulProvider, useGet} from "restful-react";
import {useAppContext} from "../context/state";
import {setCookie} from "../utility/CookieHandler";
import UserManagement from "./userManagement";
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
  containerRuben: {
    paddingTop: theme.spacing(24, 24, 24, 24),
    backgroundColor: '#F5F5F5',
  },
  root: {
    backgroundColor: theme.palette.background.default
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#157c68",
    },
    secondary: {
      main: "#a80a2d"
    },
    text: {
      primary: "#000000"
    }
  },
  components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            backgroundColor: "green"
          }
        }
      }
  }
});


const Layout = ({children, title="Welcome to Demodam!", h1 =null, description="default-description"}) => {

  const classes = useStyles();

  let context = useAppContext();

  return (
    <>
        <ThemeProvider theme={theme}>
          <Head>
            <title>{title}</title>
          </Head>

          <UserManagement />

          <Header/>

          <div className={classes.root}>
            <Container>
              <Box paddingTop={2} paddingBottom={2}>
                {children}
              </Box>
            </Container>
          </div>
          <Footer />
        </ThemeProvider>
    </>
  );

}

export default Layout;
