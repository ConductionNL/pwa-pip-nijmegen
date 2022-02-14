import React, {useEffect} from 'react';
import {DataGrid, GridRenderCellParams} from '@mui/x-data-grid';
import {useGet} from "restful-react";
import {Link} from "@mui/material";
import {useAppContext} from "../context/state";

export default function DocumentsTable(props) {

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

  const [documents, setDocuments] = React.useState(null);
  const context = useAppContext();

  const getDocuments = () => {
    // fetch(context.apiUrl + '/gateways/vrijbrp_dossiers/api/v1/dossiers/' + props.dossier + '/documents', {
    //   method: 'GET',
    //   credentials: 'include',
    //   headers: { 'Content-Type': 'application/json' },
    // })
    //   .then(response => response.json())
    //   .then((data) => {
    //     let documents = data;

    //     for (let i = 0; i < documents.length; i++) {
    //       documents[i].id = i;
    //     }

    //     console.log(documents);

    //     setDocuments(documents);
    //   });
    setDocuments([{id: '1b33aa5a-f6cb-499b-807e-27dea3432900', title: 'notities', filename: 'notities_1b33aa5a-f6cb-499b-807e-27dea3432900.pdf', content: 'bewijs'}])
  }

  useEffect(() => {
    getDocuments();
  }, []);


  return (
    <div style={{ height: 400, width: '100%', color: 'black' }}>
      { documents ?
        (
          <DataGrid
            style={{backgroundColor: 'white'}}
            rows={documents}
            columns={columns}
            pageSize={100}
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
            disableSelectionOnClick
          />
        )
      }
    </div>
  );
}
