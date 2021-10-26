import React, {useEffect} from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import {useGet} from "restful-react";
import {Link} from "@mui/material";

export default function CasesTable() {

  let { data: cases } = useGet({
    path: "gateways/cases"
  });

  /* lets catch hydra */
  if (cases != null && cases["hydra:member"] !== undefined) {
    cases = cases["hydra:member"];
  }

  const columns = [
    { field: 'referenceIds.id', headerName: 'ID', flex: 1, hide: true },
    { field: 'referenceIds.description', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type.code',
      headerName: 'Type',
      flex: 1,
    },
    {
      field: 'status.code',
      headerName: 'Status',
      flex: 1,
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

  function createData(type, status, startdatum, id) {
    return {type, status, startdatum, id};
  }

  const rows = [
    createData('intra_mun_relocation', 'created', '2019-08-24', 1),
    createData('Verhuizen', 'created', '2019-08-24', 2),
  ];

  return (
    <div style={{ height: 400, width: '100%', color: 'black' }}>
      { rows ?
        (
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
