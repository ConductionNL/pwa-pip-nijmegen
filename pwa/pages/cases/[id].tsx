import {useRouter} from 'next/router'
import React from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import {useGet, Poll, Get} from "restful-react";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Card, CardContent, Link, Stack, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CasesTable from "../../components/cases/casesTable";
import DocumentsTable from "../../components/cases/documentsTable";

const Product = () => {

  const router = useRouter()
  const {id} = router.query
  const {data: zaak} = useGet({
    path: "gateways/zaken/zaken/" + id,
  });

  const title = "0500-bzn-4js"

  return <>
    <Layout title={title} description="waar kan ik deze description zien">
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} crumbs={
            [
              {
                name: "Aanvragen",
                link: "/claims"
              },

              {
                name: "0500-bzn-4js"
              }
            ]
          }/>
          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
            <Grid container spacing={2}>
              <Stack style={{width: '100%'}} direction={"row"} justifyContent={"space-around"}>
                <div>
                  <Typography><span style={{fontWeight: "bold"}}>Type:</span> Death in municipality</Typography>
                </div>

                <Typography><span style={{fontWeight: "bold"}}>Status:</span> Incomplete</Typography>
                <Typography><span style={{fontWeight: "bold"}}>start datum:</span> 2020-08-16</Typography>
              </Stack>
              <Grid item xs={12} sm={12} md={12}>
                <DocumentsTable/>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Product
