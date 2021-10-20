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
import {Paper} from "@mui/material";

export default function DataAddressList({data = null}) {

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

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper>
    <List style={{width: '100%'}}
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick} style={{background: "#D3D3D370"}}>
        <ListItemIcon>
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItemIcon>
        <ListItemText primary="Adresgegevens" />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              Straat
            </ListItemIcon>
            <ListItemText primary="Vuntuslaan" style={{marginLeft: 40}}/>
            <ListItemIcon>
              <Info color="primary"/>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              Huisnummer
            </ListItemIcon>
            <ListItemText primary="75" style={{marginLeft: 40}} />
            <ListItemIcon>
              <Info color="primary"/>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
    </Paper>
  );
}
