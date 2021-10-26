import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {documentDownload} from "../utility/DocumentDownload";
import {useResidentContext} from "../context/residentContext";
import {useAppContext} from "../context/state";
import {useGet} from "restful-react";

export default function ClaimsTable() {

  let { data: claims } = useGet({
    path: "gateways/register/certificates"
  });

  /* lets catch hydra */
  if (claims != null && claims["hydra:member"] !== undefined) {
    claims = claims["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
    },
    {
      field: 'organization',
      headerName: 'Organisatie',
      flex: 1,
    },
    {
      field: "Pdf",
      headerName: " ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              documentDownload(cellValues.row.document, cellValues.row.type, '.pdf')
            }}
          >
            Pdf
          </Button>
        );
      }
    },
    {
      field: "QR",
      headerName: " ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              documentDownload(cellValues.row.image, cellValues.row.type, '.png')
            }}
          >
            QR
          </Button>
        );
      }
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { claims ? (
          <DataGrid
            rows={claims}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            checkboxSelection
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
