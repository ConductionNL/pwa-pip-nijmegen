import {useRouter} from 'next/router'
import React from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import {useGet, Poll, Get} from "restful-react";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Product = () => {

  const router = useRouter()
  const {id} = router.query
  const { data: zaak } = useGet({
    path: "gateways/zaken/zaken/" + id,
  });

  const title = zaak + " | " + id

  console.log(zaak);

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={9}>
          <PageHeader title={title}/>

          <Box paddingTop={2} paddingBottom={2}>
            <p>Description about ...</p>
          </Box>

        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Product
