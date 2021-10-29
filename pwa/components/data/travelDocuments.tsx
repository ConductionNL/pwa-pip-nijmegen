import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useGet} from "restful-react";
import {ChevronRight, Info} from "@mui/icons-material";
import {Button, Link, ListItem, Paper, Stack, Typography} from "@mui/material";
import {Alert} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";

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

export default function TravelDocuments({data = null}) {
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
      <ListItem onClick={handleClick} className={classes.data}>
        <ListItemIcon>
          {open ? <ExpandLess /> : <ChevronRight />}
        </ListItemIcon>
        <ListItemText style={{marginLeft: "-3%"}}>
          <Typography variant="h5" style={{fontWeight: 'bold'}}>Reisdocumenten</Typography>
        </ListItemText>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon className={classes.label}>
              Paspoort
            </ListItemIcon>
            <ListItemText primary="16561" className={classes.dataWithAction}/>
            <ListItemIcon>
              <Link href="/moving/address">
                <Button size="small" variant="text" startIcon={<ChevronRight/>}> Inzien of correctie doorgeven</Button>
              </Link>
            </ListItemIcon>
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              ID
            </ListItemIcon>
            <ListItemText primary="65321684" className={classes.dataWithAction}/>
          </ListItem>
    </List>
      </Collapse>
    </List>
  );
}
