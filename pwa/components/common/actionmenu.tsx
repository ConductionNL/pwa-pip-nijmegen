import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useRouter } from 'next/router';
import MessageIcon from '@mui/icons-material/Message';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import LockIcon from '@mui/icons-material/Lock';
import WorkIcon from '@mui/icons-material/Work';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ActionMenu() {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ListItem button onClick={() => router.push('/products')}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h6">Diensten</Typography>}
          />
        </ListItem>

        <Divider />

        <ListItem button onClick={() => router.push('/cases')}>
          <ListItemIcon>
            <SubscriptionsIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h6">Mijn aanvragen</Typography>}
          />
        </ListItem>

        <Divider />

        <ListItem button onClick={() => router.push('/data')}>
          <ListItemIcon>
            <AssignmentIndIcon fontSize="large"/>
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h6">Mijn gegevens</Typography>}
          />
        </ListItem>

        <Divider />

        <ListItem button onClick={() => router.push('/vault')}>
          <ListItemIcon>
            <LockIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography variant="h6">Mijn kluis</Typography>}
          />
        </ListItem>

      </List>
    </div>
  );
}
