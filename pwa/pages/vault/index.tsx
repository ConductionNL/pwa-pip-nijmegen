import React from "react";
import PageHeader from "../../components/common/pageheader";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import ClaimsTable from "../../components/vault/claims";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  gridMarginTop: {
    marginTop: '20px',
  }
}));

function Index() {
  const classes = useStyles();

  const title = 'Mijn kluis';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />

          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ClaimsTable/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
