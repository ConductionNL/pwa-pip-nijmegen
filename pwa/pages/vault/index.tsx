import React, {ReactNode} from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {ClaimModal} from "../../components/vault/ClaimModal";
import ClaimsTable from "../../components/vault/claims";

function Index() {

  const title = 'Mijn kluis';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={2}>
        <Hidden mdDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} crumbs={[
            {
              name: 'Mijn kluis'
            }
          ]} />
          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
            <Grid item xs={12} sm={12} md={12}>
              <ClaimsTable/>
            </Grid>
            <br/>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
