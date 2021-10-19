import React from "react";
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import ProductCard from "../../components/products/card";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Index() {

  const title = 'Producten en diensten'
  const description = 'Omschrijving over producten'
  const categories = [
    {
      id: 1,
      name: "Diensten",
      description: "product omschrijving"
    },
    {
      id: 2,
      name: "Vergunningen",
      description: "product omschrijving 2"
    },
    {
      id: 2,
      name: "Regelingen",
      description: "product omschrijving 2"
    }];

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container >
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu />
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9} style={{marginTop: 20}}>
          <PageHeader title={title} />
          <Box paddingTop={2} paddingBottom={2}>
            <p>{description}</p>
          </Box>

          <Grid container spacing={2}>
          {
            categories !== null &&
            categories.map((product) => (
            <ProductCard product={product}/>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
