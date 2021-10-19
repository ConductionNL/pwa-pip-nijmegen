import React from "react";
import Layout from "../../components/common/layout";
import Grid from "@material-ui/core/Grid";
import ActionMenu from "../../components/common/actionmenu";
import Hidden from "@material-ui/core/Hidden";
import PageHeader from "../../components/common/pageheader";
import Box from "@material-ui/core/Box";
import {makeStyles, Theme} from "@material-ui/core/styles";
import PaperCard from "../../components/common/paperCard";

const useStyles = makeStyles({
  marginTop: {
    marginTop: 20,
  },
});

// Uw kluis is een plaats waar u persoonsinformatie kunt opslaan en optioneel kunt delen, dit kunnen
// bewijzen zijn of claims (bijv. bewijs van verblijf) of documenten die nodig zijn voor een bepaalde
// regeling.

function Index() {
  const classes = useStyles();
  const title = 'Mijn Datakluis';

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden smDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9} style={{marginTop: 20}}>
          <PageHeader title={title}/>
          <Box paddingTop={3} paddingBottom={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Waardepapieren"
                  description="In sommige gevallen heeft u bewijspapieren nodig, bijvoorbeeld een uittreksel van uw woonhistorie of een inkomens verklaring. U kunt deze tegenwoordig ook digitaal aanvragen, inzien en delen met organisaties."
                  link="/claims"
                  linkText="Bekijk waardepapieren"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Documenten"
                  description="todo"
                  link="/documents"
                  linkText="Bekijk documenten"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Verwerkingen"
                  secondaryTitle="Bron: Verwerkingen Register"
                  description="De gemeente houdt nauwkeurig bij welke organisaties uw gegevens hebben gebruikt (verwerkt) en met wel doel dit was. Deze verwerkingen kunt u inzien via het verwerkingen register."
                  link="/processes"
                  linkText="Bekijk verwerkingen"
                />
              </Grid>
              <Grid item xs={12} sm={8} md={6}>
                <PaperCard
                  title="Machtigingen"
                  description="todo"
                  link="/authorizations"
                  linkText="Bekijk machtigingen"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
}

export default Index
