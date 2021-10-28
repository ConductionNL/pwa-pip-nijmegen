import React, {useEffect} from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import {useGet} from "restful-react";
import {Link} from "@mui/material";
import {useAppContext} from "../context/state";
import {useUserContext} from "../context/userContext";
import {DossierModal} from "./DossierModal";

export default function CasesTable() {

  const context = useAppContext();
  const userContext = useUserContext();

  const [dossiers, setDossiers] = React.useState(null);

  const getDossiers = () => {
    fetch(context.apiUrl + '/gateways/vrijbrp_dossiers/api/v1/dossiers/search', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "bsns": [
          '693789128'
        ],
      })
    })
      .then(response => response.json())
      .then((data) => {
        let dossiers = data.result.content;

        for (let i = 0; i < dossiers.length; i++) {
          dossiers[i].id = i;
        }

        console.log(dossiers);

        setDossiers(dossiers);
      });
  }

  useEffect(() => {
    getDossiers();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type.description',
      headerName: 'Type',
      flex: 1,
      valueGetter: (params) => {
        return params.getValue(params.id, "type").description;
      }
    },
    {
      field: 'status.description',
      headerName: 'Status',
      flex: 1,
      valueGetter: (params) => {
        return params.getValue(params.id, "status").description;
      }
    },
    {
      field: 'startDate',
      headerName: 'Start datum',
      flex: 1,
    },
    {
      field: 'dossierId',
      headerName: ' ',renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/cases/" + params.value}
          >
            View
          </Link>
        </strong>
      ),flex: 1, float: 'right'},
  ];


  return (
    <>
      <div style={{ height: 400, width: '100%', color: 'black' }}>
        { dossiers ?
          (
            <DataGrid
              style={{backgroundColor:  "white"}}
              rows={dossiers}
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
    </>
  );
}
