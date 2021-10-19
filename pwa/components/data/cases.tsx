import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";
import AddressInfo from "../../components/data/address_info";


export default function Cases({id = null, person = null}) {
  if (person == null) {
    var { data: person } = useGet({
      path: "gateways/zaak/zaak/" + id,
    });
  }
  // console.log(person)

  return (
    <Box paddingBottom={2}>
      <h4>Uw persoonlijke informatie</h4>
      <Box paddingTop={1}>
        {
          person != null && person.naam.aanschrijfwijze !== null &&
          <p><b>Naam: </b>{person.naam.aanschrijfwijze}</p>
        }
        {
          person != null && person.geboorte.plaats.omschrijving !== null &&
          <p><b>Geboorteplaats: </b>{person.geboorte.plaats.omschrijving}</p>
        }
        {
          person != null && person.verblijfplaats !== null &&
          <AddressInfo person={person}/>
        }
      </Box>
    </Box>
  );
}
