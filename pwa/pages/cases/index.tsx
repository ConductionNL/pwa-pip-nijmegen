import React from "react";
import PageHeader from "../../components/common/pageheader";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
import ActionMenu from "../../components/common/actionmenu";
import CasesTable from "../../components/cases/table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CollapsibleTable from "../../components/cases/collapsibleTable";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Index() {
  const classes = useStyles();
  const title = 'Mijn Zaken';

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
