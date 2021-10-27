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
    marginLeft: "20%"
  },
  marginTop: {
    marginTop: "-2%",
    peddingLeft: "10%"
  }
});

export default function AddressList({user = null}) {
  const classes = useStyles();

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
        <Typography variant="h5" style={{fontWeight: 'bold'}} className={classes.data}>Woonadres</Typography>
      </ListItemText>
      <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemIcon className={classes.label}>
              Straat
          </ListItemIcon>
          {
            user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.adresregel1 !== undefined && user.verblijfplaats.adresregel1 !== null &&
            <ListItemText primary={user.verblijfplaats.adresregel1} className={classes.dataWithAction} />
          }
            <ListItemIcon>
              <Link href="/moving/address">
                <Button size="small" variant="text" startIcon={<ChevronRight/>}> Verhuizing doorgeven</Button>
              </Link>
            </ListItemIcon>
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Plaats
          </ListItemIcon>
          {
            user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.woonplaats !== null &&
            <ListItemText primary={user.verblijfplaats.woonplaats} className={classes.dataWithAction} />
          }
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Vanaf
          </ListItemIcon>
          {
            user !== null && user.verblijfplaats !== undefined && user.verblijfplaats !== null && user.verblijfplaats.datumAanvangAdreshouding !== null &&
            <ListItemText primary={user.verblijfplaats.datumAanvangAdreshouding.datum} className={classes.dataWithAction} />
          }
          </ListItem>

          <ListItem sx={{ pl: 4 }} className={classes.marginTop}>
            <ListItemIcon className={classes.label}>
              Aantal bewoners
            </ListItemIcon>
            <ListItemText primary="3" className={classes.dataWithAction}/>
            <ListItemIcon>
              <Link href="/moving/address">
                <Button size="small" variant="text" startIcon={<ChevronRight/>}> Onjuiste inschrijving melden</Button>
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
    </List>
  );
}
