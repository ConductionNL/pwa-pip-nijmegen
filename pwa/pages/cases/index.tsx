import React from "react";
import PageHeader from "../../components/common/pageheader";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import CasesTable from "../../components/cases/table";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Mijn aanvragen';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Grid container spacing={2} style={{marginTop: 20}}>
            <Grid item xs={12}>
              <Card className={classes.root}>
                <CardContent>
                  <CasesTable/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
