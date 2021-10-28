import React, {useEffect} from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import {useGet} from "restful-react";
import {Link} from "@mui/material";

export default function DocumentsTable() {

  let { data: cases } = useGet({
    path: "gateways/cases"
  });

  /* lets catch hydra */
  if (cases != null && cases["hydra:member"] !== undefined) {
    cases = cases["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
    },
    {
      field: 'filename',
      headerName: 'Bestands naam',
      flex: 1,
    },
    {
      field: 'content',
      headerName: ' ',renderCell: (params: GridRenderCellParams) => (
        <strong>
          <Link
            href={"/documents/" + params.value}
          >
            Bekijken
          </Link>
        </strong>
      ),flex: 1, float: 'right'},
  ];

  function createData(title, filename, content, id) {
    return {title, filename, content, id};
  }

  const rows = [
    createData('Example title', 'file.pdf', 'string', 1),
    createData('Example title 2', 'file1.pdf', 'string', 2),
  ];

  return (
    <div style={{ height: 400, width: '100%', color: 'black' }}>
      { rows ?
        (
          <DataGrid
            style={{backgroundColor: 'white'}}
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
