import Logo from 'components/common/logo';
import MainMenu from 'components/common/menu';
import Container from '@mui/material/Container';
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import IconButton from "@mui/material/IconButton";
import {Link} from "@mui/material";
import {maxHeight} from "@mui/system";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
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
}));

export default function Header() {

  const classes = useStyles();
  return (
    <header>

      <div className={classes.sectionDesktop}>
        <img style={{ paddingTop: '20px', paddingBottom: '20px', maxHeight: '100px'}} src="/logo_nijmegen.svg"/>
      </div>

      <MainMenu />
    </header>
  );
}
