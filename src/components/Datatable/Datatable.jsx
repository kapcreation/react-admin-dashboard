import React from 'react'
import './Datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import rows from './rows'
import { useNavigate, Link } from 'react-router-dom';

const Datatable = () => {
    
  const navigate = useNavigate()

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cell-img">
            <img src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    }, 
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cell-status ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <button onClick={()=>navigate("/users/123")}>View</button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
      <div className="head">
        Add new user
        <Link to="/users/new" className='btn'>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable