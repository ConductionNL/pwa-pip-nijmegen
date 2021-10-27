import React from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import ProductCard from "../../components/products/card";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Index() {

  const title = 'Diensten'
  const categories = [
    {
      id: 1,
      name: "Verhuizen",
      description: "Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens"
    },
    {
      id: 2,
      name: "Uittreksel en verklaringen",
      description: "Uittreksel burgelijke stand, basisregistratie personen, VOG"
    },
    {
      id: 3,
      name: "Trouwen, partnerschap, scheiden",
      description: "Trouwen, geregistreerd partnerschap, scheiden"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={2} >
        <Hidden mdDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9} style={{marginTop: 20}}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
          </Box>

          <Grid container spacing={2}>
          {
            categories !== null &&
            categories.map((product) => (
            <ProductCard key={product.id} product={product}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
