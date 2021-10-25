import React, {useEffect} from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import {documentDownload} from "../utility/DocumentDownload";
import {useResidentContext} from "../context/residentContext";
import {useAppContext} from "../context/state";
import {useGet} from "restful-react";
import {Link} from "@mui/material";

export default function CasesTable() {

  let { data: cases } = useGet({
    path: "gateways/cases"
  });

  /* lets catch hydra */
  // if (cases != null && cases["hydra:member"] !== undefined) {
  //   cases = cases["hydra:member"];
  // }

  if (cases != null && cases["results"] !== undefined) {
    cases = cases["results"];

    for (let i = 0; i < cases.length; i++) {
      cases[i].id = cases[i].identificatie;
    }
  }

  const columns = [
    { field: 'cases_id', headerName: 'ID', flex: 1, hide: true },
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
      field: 'id',
      headerName: 'View',renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/cases/" + params.value}
          >
            View
          </Link>
        </strong>
      ),flex: 1, float: 'right'},
  ];

  function createData(type, organizatie, id) {
    return {type, organizatie, id};
  }

  const rows = [
    createData('hoit', '95128942', 1),
    createData('hiii', '12938149', 2),
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { rows ? (
          <DataGrid
            rows={rows}
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
