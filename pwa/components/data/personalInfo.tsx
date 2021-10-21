import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {useGet} from "restful-react";
import {Info} from "@mui/icons-material";
import {Paper, Stack} from "@mui/material";
import {Alert} from "@mui/material";

export default function DataPersonalList({data = null}) {

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
    <Paper>
    <List style={{width: '100%'}}
      sx={{ width: '100%', bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} style={{background: "#D3D3D370"}}>
        <ListItemIcon>
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemIcon>
        <ListItemText primary="Identiteitsgegevens" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              Voornamen
            </ListItemIcon>
            <ListItemText primary="Sarai" style={{marginLeft: 40}}/>
            <ListItemIcon>
              <Info color="primary" onClick={handleAlertClick}/>
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={openAlert} timeout="auto" unmountOnExit>
            <Stack>
              <Alert severity="info">De voornaam of voornamen die zijn gegeven bij aangifte van geboorte.</Alert>
            </Stack>
          </Collapse>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              Achternaam
            </ListItemIcon>
            <ListItemText primary="Misidjan" style={{marginLeft: 40}} />
            <ListItemIcon>
              <Info color="primary"/>
            </ListItemIcon>
          </ListItemButton>
          <Collapse timeout="auto" unmountOnExit>
            <Stack>
              <Alert severity="info">De geslachtsnaam is hetzelfde als de achternaam. Heeft de geslachtsnaam een voorvoegsel, zoals “de” of “van”? Dan is het voorvoegsel vermeld bij Voorvoegsels geslachtsnaam.</Alert>
            </Stack>
          </Collapse>
        </List>
      </Collapse>
    </List>
    </Paper>
  );
}
