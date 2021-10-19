import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet} from "restful-react";


export default function AddressInfo({person = null, id = null}) {
  if (person == null) {
    var { data: person } = useGet({
      path: "gateways/brp/ingeschrevenpersonen/" + id,
    });
  }
  // console.log(person)

  return (
    <Box paddingTop={1}>
      {
        person != null && person.verblijfplaats !== null &&
        <p>
          <b>Verblijfplaats: </b>{person.verblijfplaats.adresregel1 + ", " + person.verblijfplaats.adresregel2 + ", " + person.verblijfplaats.adresregel3}
        </p>
      }
    </Box>
  );
}
