import React, {ReactNode, useEffect, useState } from 'react';
import Layout from "../../components/common/layout";
import ActionMenu from "../../components/common/actionmenu";
import PageHeader from "../../components/common/pageheader";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import {Divider, Typography} from "@mui/material";
import PersonalList from "../../components/data/personal_info";
import AddressList from "../../components/data/address_info";
import ChildrensList from "../../components/data/children_info";
import ParentsList from "../../components/data/parents_info";
import AddressesList from "../../components/data/addresses_info";
import {useUserContext} from "../../components/context/userContext";
import {useAppContext} from "../../components/context/state";
import TravelDocuments from "../../components/data/travelDocuments";

function Index() {
  const title = 'Mijn gegevens';
  let userContext = useUserContext();
  let context = useAppContext();

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userContext.user !== null) {
        getPerson();
      }
    }
  }, []);

  const getPerson = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn + "?expand=ouders,kinderen", {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
          getPersonWithoutExpand();
        } else {
          setUser(data);
        }
      });
  }

  const getPersonWithoutExpand = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        setUser(data);
      });
  }

  return <>
    <Layout title={title} description="waar kan ik deze description zien">

      <Grid container spacing={3}>
        <Hidden mdDown>
          <Grid item md={3}>
            <ActionMenu/>
          </Grid>
        </Hidden>
        <Grid item sm={12} md={9}>
          <PageHeader title={title} crumbs={[
            {
              name: 'Mijn gegevens'
            }
          ]} />
          <Divider style={{marginTop: 20}}/>
          {
            user !== null &&
            <PersonalList user={user} />
          }
          {
            user !== null &&
            <AddressList user={user} />
          }
          {
            user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].kinderen !== undefined && user['_embedded'].kinderen !== null &&
            <Divider />
          }
          {
            user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].kinderen !== undefined && user['_embedded'].kinderen !== null &&
            <ChildrensList children={user['_embedded'].kinderen} />
          }
          {
            user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].ouders !== undefined && user['_embedded'].ouders !== null &&
            <Divider />
          }
          {
            user !== null && user['_embedded'] !== undefined && user['_embedded'] !== null && user['_embedded'].ouders !== undefined && user['_embedded'].ouders !== null &&
            <ParentsList parents={user['_embedded'].ouders} />
          }
          <Divider/>
          <AddressesList/>
          <Divider/>
          <TravelDocuments/>
        </Grid>
      </Grid>

    </Layout>
  </>
}

export default Index
