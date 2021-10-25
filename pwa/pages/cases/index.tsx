import React from "react";
import PageHeader from "../../components/common/pageheader";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import CasesTable from "../../components/cases/table";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import {Link} from "@mui/material";

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
      <Grid container spacing={2} >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} />
          <Grid container spacing={2} style={{marginTop: 20}}>
            <Grid item xs={12} sm={12} md={12}>
              <Link href={'/products'}><Button color="primary" style={{marginBottom: 10, float: 'right'}} sx={{width: "400px", marginBottom: "100px"}} type="button" variant="contained" >Aanmaken</Button></Link>
            </Grid>
              <Grid item xs={12} sm={12} md={12}>
              <CasesTable/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
