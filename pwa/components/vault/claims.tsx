import React, {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {documentDownload} from "../utility/DocumentDownload";
import {useAppContext} from "../context/state";
import {ClaimModal} from "./ClaimModal";
import {useUserContext} from "../context/userContext";

export default function ClaimsTable() {

  const userContext = useUserContext();
  const context = useAppContext();

  const [claims, setClaims] = React.useState(null);

  useEffect(() => {
    fetch(context.apiUrl + "/gateways/waardepapieren-register/certificates?person=" + userContext.user.bsn, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then((data) => {
        setClaims(data['hydra:member']);
        console.log('Certs:')
        console.log(data)
      });
  }, []);

  const refreshTable = () => {
   setClaims(null);
   fetch(context.apiUrl + "/gateways/waardepapieren-register/certificates?person=" + context.brpUrl + "/ingeschrevenpersonen/" + userContext.user.bsn, {
     credentials: 'include',
     headers: {'Content-Type': 'application/json'},
   })
     .then(response => response.json())
     .then((data) =>  {
       setClaims(data['hydra:member']);
     });
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
      valueFormatter: (params) => {
        const valueFormatted = params.value.replaceAll('_', ' ');
        return `${valueFormatted}`;
      },
    },
    {
      field: 'dateCreated',
      headerName: 'Aangemaakt op',
      flex: 1,
      valueFormatter: (params) => {
        let valueFormatted = new Date(params.value);
        let result = valueFormatted.toLocaleString("en-GB");
        return `${valueFormatted}`;
      },
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
    <>
      <div style={{textAlign: "right"}}><ClaimModal refreshTable={refreshTable} /></div>

      <div style={{ height: 400, width: '100%' }}>
          { claims !== null ? (
            <DataGrid
             rows={claims}
             columns={columns}
             pageSize={100}
             rowsPerPageOptions={[100]}
              disableSelectionOnClick
              sortModel={[{ field: 'dateCreated', sort: 'desc' }]}
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
              disableSelectionOnClick
            />
          )
        }
      </div>
    </>
  );
}
