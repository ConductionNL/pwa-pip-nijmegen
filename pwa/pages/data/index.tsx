import React, {ReactNode} from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DataPersonalList from "../../components/data/personalInfo";
import DataAddressList from "../../components/data/addressInfo";

function Index() {

  const title = 'Mijn gegevens';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <DataPersonalList/>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <DataAddressList/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index
