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

  console.log(userContext.user);

  const [user, setUser] = useState(null);
  const [children, setChildren] = useState(null);

  useEffect(() => {
    if (userContext.user !== null) {
      getPerson();
      getPersonsChildren();
    }
  }, []);

  const getPerson = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      });
  }

  const getPersonsChildren = () => {
    fetch(context.apiUrl + "/gateways/brp/ingeschrevenpersonen/" + userContext.user.bsn + "/kinderen", {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then((data) => {
        setChildren(data);
        console.log(data);
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
          <PageHeader title={title} />

          <Divider style={{marginTop: 20}}/>

          {
            user !== null &&
              <PersonalList user={user} />
          }
          {
            user !== null &&
            <AddressList user={user} />
          }

          <Divider />


          <ChildrensList/>
          <Divider/>
          <ParentsList/>
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
