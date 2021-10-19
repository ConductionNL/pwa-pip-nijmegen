import React from 'react';
import {Link} from "@mui/material";
import {useGet} from "restful-react";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid";

export default function ClaimsTable({claims = null}) {

  if (claims == null) {
    var {data: claims} = useGet({
      path: "/claims"
    });
  }

  console.log('claims:');
  console.log(claims);

  /* lets catch hydra */
  if (claims != null && claims["results"] !== undefined) {
    claims = claims["results"];

    for (let i = 0; i < claims.length; i++) {
      claims[i].id = claims[i].identificatie;
    }
  }

  const columns = [
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'endpoint', headerName: 'Endpoint', flex: 1},
    {field: 'route', headerName: 'Route', flex: 1},
    {
      field: 'id',
      headerName: 'View', renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/claims/" + params.value}
          >
            View
          </Link>
        </strong>
      ), flex: 1
    }
  ];


  return (
    <div style={{height: 400, width: '100%'}}>
      {claims ? (
          <DataGrid
            rows={claims}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[100]}
            disableSelectionOnClick
          />
        )
        :
        (
          <DataGrid
            rows={[]}
            loading={true}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            checkboxSelection
            disableSelectionOnClick
          />
        )
      }
    </div>
  );
}
