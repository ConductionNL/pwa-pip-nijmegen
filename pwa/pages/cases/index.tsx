import React from "react";
import PageHeader from "../../components/common/pageheader";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import CasesTable from "../../components/cases/casesTable";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import {Link} from "@mui/material";
import Box from "@mui/material/Box";

function Index() {
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
          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} style={{textAlign: 'right'}}>
              <Link href={'/products'}><Button color="primary" style={{marginBottom: 10}} sx={{width: "400px", marginBottom: "100px"}} type="button" variant="contained" >Aanmaken</Button></Link>
            </Grid>
              <Grid item xs={12} sm={12} md={12}>
              <CasesTable/>
            </Grid>
          </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
