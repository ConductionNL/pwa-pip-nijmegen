import {useRouter} from 'next/router'
import React, {useEffect} from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import {useGet, Poll, Get} from "restful-react";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Card, CardContent, Link, Skeleton, Stack, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import CasesTable from "../../components/cases/casesTable";
import DocumentsTable from "../../components/cases/documentsTable";
import {useAppContext} from "../../components/context/state";

const Product = () => {

  const router = useRouter()
  const {id} = router.query
  const [dossier, setDossier] = React.useState(null);
  const context = useAppContext();

  const getDossier = () => {
    // fetch(context.apiUrl + '/gateways/vrijbrp_dossiers/api/v1/dossiers/search', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     "dossierIds": [
    //       id
    //     ],
    //   })
    // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     setDossier(data.result.content[0]);
    //   });
      setDossier({id: 'f25e67e5-3a87-41ce-a68d-e6e8f5a0b027',dossierId: '412623473', type: { description: 'Bezwaarschrift' }, status: {description: 'Accepted'}, startDate: '24/12/2021' });
  }

  useEffect(() => {
    if (id !== undefined) {
      getDossier()
    }
  }, [id]);

  let title = dossier !== null ? `Zaaknummer: ${dossier.dossierId}` : "aan het laden.."

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
                link: "/cases"
              },

              {
                name: dossier !== null ? dossier.dossierId : <Skeleton width={150} variant="text" />
              }
            ]
          }/>
          <Box paddingTop={3} paddingBottom={2} style={{marginTop: 20}}>
            <Grid container spacing={2}>
              <Stack style={{width: '100%'}} direction={"row"} justifyContent={"space-around"}>
                <div>
                  <Typography> {
                    dossier !== null
                      ?
                        <>
                          <span style={{fontWeight: "bold"}}>Type: </span>
                          {dossier.type.description}
                        </>
                      :
                      <Skeleton width={150} variant="text" />
                  }</Typography>
                </div>
                <div>
                  <Typography> {
                    dossier !== null
                      ?
                      <>
                        <span style={{fontWeight: "bold"}}>Status: </span>
                        {dossier.status.description}
                      </>
                      :
                      <Skeleton width={150} variant="text" />
                  }</Typography>
                </div>
                <div>
                  <Typography> {
                    dossier !== null
                      ?
                      <>
                        <span style={{fontWeight: "bold"}}>Start datum: </span>
                        {dossier.startDate}
                      </>
                      :
                      <Skeleton width={150} variant="text" />
                  }</Typography>
                </div>
              </Stack>
              <Grid item xs={12} sm={12} md={12}>
                {
                  id !== undefined &&
                  <DocumentsTable dossier={id} />
                }
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Product
