import React from 'react';
import Grid from '@mui/material/Grid';

import ActionMenu from 'components/common/actionmenu';
import {RestfulProvider, useGet} from "restful-react";

import Layout from 'components/common/layout';
import {setCookie} from "../components/utility/CookieHandler";
import {useRouter} from "next/router";
import PaperCard from "../components/common/paperCard";
import {useUserContext} from "../components/context/userContext";
import {useAppContext} from "../components/context/state";
import { Avatar, Box, IconButton, Typography, Link } from '@material-ui/core';
import Button from "@material-ui/core/Button";



export default function Index() {
  let context = useAppContext();

  const noHoverStyle = {
    '&:hover': {
      background: 'none',
    }
  }


  return (<>

    <Layout title="Welkom bij Mijn Omgeving Nijmegen" description="waar kan ik deze description zien">
      <Grid sx={{paddingTop: "20px"}} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            Mijn Nijmegen
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6">
            Bekijk uw gegevens, meldingen, aanvragen of uitkeringsgegevens op uw persoonlijke gemeentepagina.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ padding: '15px', background: '#157C68', width: '265px', marginTop: '20px' }}>
            <Link href={context.baseUrl + " /digid/login?returnUrl=" + context.frontendUrl + "/moving?state=8412312632"} style={{ textDecoration: 'none !important' }}>
               <img src="/digid_button.svg" width='55px' height='55px'  />
               <b style={{ textAlign: 'center', color: 'white',  verticalAlign: 'middle', paddingLeft: '45px'}}>
                 INLOGGEN
              </b>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{color: '#A80A2D', marginTop: '20px'}} variant="h4" component="h4">
            Wat moet u weten 
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <p>In Mijn Nijmegen vindt u: </p>
          <ul>
            <li>Uw persoonsgegevens</li>
            <li>Gegevens over uw diensten</li>
            <li>Gegevens over uw zaken</li>
            <li>Uw informatie in uw kluis</li>
          </ul>
        </Grid>
      </Grid>
    </Layout>
  </>);
}

