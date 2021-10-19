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
import { Typography } from '@material-ui/core';

const Welcome = () => (
  <>
    <Layout title="Welkom bij Mijn Omgeving Nijmegen" description="waar kan ik deze description zien">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h3">
            Welkom op Mijn Omgeving!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Welcome;

