import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useGet} from "restful-react";
import {ChevronRight, Expand, Info} from "@mui/icons-material";
import {Button, Link, ListItem, Paper, Stack, Typography} from "@mui/material";
import {Alert} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles({
  label: {
    color: "gray",
  },
  dataWithAction: {
    marginLeft: 20
  },
  data: {
    marginLeft: "15%"
  },
  marginTop: {
    marginTop: "-2%",
    peddingLeft: "10%"
  }
});

export default function ParentsList({parents = null}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleAlertClick = () => {
    setOpenAlert(!openAlert);
  };

  return (
    <List style={{width: '100%'}}
      sx={{ width: '100%'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem onClick={handleClick}>
        <ListItemIcon>
          {open ? <ExpandLess /> : <ChevronRight />}
        </ListItemIcon>
        <ListItemText style={{marginLeft: "-3%"}}>
          <Typography variant="h5" style={{fontWeight: 'bold'}}>Ouders</Typography>
        </ListItemText>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {
          parents !== null &&
          parents.map((row) => (
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon className={classes.label}>
              Voornamen
            </ListItemIcon>
                <ListItemText primary={row.naam.voornamen} className={classes.dataWithAction}/>
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Achternaam
                </ListItemIcon>
                {
                  row.naam.voorvoegsel !== undefined && row.naam.voorvoegsel !== null ?
                    <ListItemText primary={row.naam.voorvoegsel + ' ' + row.naam.geslachtsnaam} className={classes.dataWithAction} /> :
                    <ListItemText primary={row.naam.geslachtsnaam} className={classes.dataWithAction} />
                }
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Geslacht
            </ListItemIcon>
                <ListItemText primary={row.geslachtsaanduiding} className={classes.dataWithAction}/>
          </ListItem>
            </List>
          ))}
      </Collapse>
    </List>
  );
}
