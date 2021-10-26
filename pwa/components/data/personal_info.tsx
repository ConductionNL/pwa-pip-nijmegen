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
    marginLeft: 30
  },
  data: {
    marginLeft: "20%"
  },
  marginTop: {
    marginTop: "-2%",
    peddingLeft: "10%"
  }
});

export default function PersonalList({data = null}) {
  const classes = useStyles();

  if (data == null) {
    var {data: data} = useGet({
      path: "/data"
    });
  }

  console.log('data:');
  console.log(data);

  /* lets catch hydra */
  if (data != null && data["results"] !== undefined) {
    data = data["results"];

    for (let i = 0; i < data.length; i++) {
      data[i].id = data[i].identificatie;
    }
  }

  const [open, setOpen] = React.useState(true);
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
      <ListItemText>
        <Typography variant="h5" style={{fontWeight: 'bold'}} className={classes.data}>Persoonlijke gegevens</Typography>
      </ListItemText>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon className={classes.label}>
              Voornamen
            </ListItemIcon>
            <ListItemText primary="Sarai" className={classes.dataWithAction}/>
            <ListItemIcon>
              <Link href="/moving/address">
                <Button size="small" variant="text" startIcon={<ChevronRight/>}> Inzien of correctie doorgeven</Button>
              </Link>
            </ListItemIcon>
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Achternaam
            </ListItemIcon>
            <ListItemText primary="Misidjan" className={classes.dataWithAction}/>
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Geslacht
            </ListItemIcon>
            <ListItemText primary="Vrouw" className={classes.dataWithAction}/>
          </ListItem>
    </List>
    </List>
  );
}
