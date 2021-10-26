import React, {ReactNode} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Button, Divider, Link, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import {makeStyles} from "@material-ui/core/styles";
import {useGet} from "restful-react";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";
import {textAlign} from "@mui/system";

const useStyles = makeStyles({
  labelData: {
    color: "gray",
  },
  dataWithAction: {
    marginLeft: "-26%"
  },
  action: {
    marginLeft: "-15%"
  },
  data: {
    marginLeft: "-55%"
  },
  marginTop: {
    marginTop: "-1%"
  }
});

export default function PersonalList({data = null}) {
  const classes = useStyles();
  const title = 'Mijn gegevens';

  const StyledGrid = styled(MuiGrid)(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      // margin: theme.spacing(0, 0),
      float: "left",
      textAlign: "left"
    },
  }));

  if (data == null) {
    var {data: data} = useGet({
      path: "/data"
    });
  }

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
    <Box paddingTop={2} paddingBottom={2}>
      <Grid container paddingTop={3}>
        <StyledGrid paddingLeft={6} item xs/>
        <StyledGrid item xs className={classes.data}>
          <Typography variant="h5" style={{fontWeight: 'bold'}}>Persoonlijke gegevens</Typography>
        </StyledGrid>
      </Grid>

      <Grid container paddingTop={3}>
        <StyledGrid paddingLeft={7} item xs>
            <p className={classes.labelData}>Voornamen</p>
        </StyledGrid>
        <StyledGrid item xs className={classes.dataWithAction}>
            <p>Sarai Aliza</p>
        </StyledGrid>
        <StyledGrid item xs className={classes.action}>
          <Link href="/moving/address">
            <Button size="small" variant="text" startIcon={<ChevronRight/>}> Inzien of correctie doorgeven</Button>
          </Link>
        </StyledGrid>
      </Grid>

      <Grid container className={classes.marginTop}>
        <StyledGrid paddingLeft={7} item xs>
          <p className={classes.labelData}>Achternaam</p>
        </StyledGrid>
        <StyledGrid item xs className={classes.data}>
          <p>Misidjan</p>
        </StyledGrid>
      </Grid>

      <Grid container className={classes.marginTop}>
        <StyledGrid paddingLeft={7} item xs>
          <p className={classes.labelData}>Geslacht</p>
        </StyledGrid>
        <StyledGrid item xs className={classes.data}>
          <p>Vrouw</p>
        </StyledGrid>
      </Grid>
    </Box>
  );
}
