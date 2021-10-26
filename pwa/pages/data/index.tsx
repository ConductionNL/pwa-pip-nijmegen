import React, {ReactNode} from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
import PersonalList from "../../components/data/personal_info";
import AddressList from "../../components/data/address_info";

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
          <Divider style={{marginTop: 20}}/>

         <PersonalList/>
          <Divider/>
          <AddressList/>
          <Divider/>
          {/*<Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>*/}
          {/*  <Grid container spacing={2}>*/}
          {/*    <Grid item xs={12} sm={12} md={12}>*/}
          {/*      <DataPersonalList/>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12} sm={12} md={12}>*/}
          {/*      <DataAddressList/>*/}
          {/*    </Grid>*/}
          {/*    <Grid item xs={12} sm={12} md={12}>*/}
          {/*    <ClaimModal />*/}
          {/*    </Grid>*/}
          {/*    <br/>*/}
          {/*  </Grid>*/}
          {/*</Box>*/}
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index
