import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from '../../Header';
import { rows , columns } from './data';
function Contact() {
  return (
    <Box sx={{ height: 650, width: "100%" }}>
    <Header title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"} />
    <DataGrid
      rows={rows}
      // @ts-ignore
      columns={columns}
      slots={{ toolbar: GridToolbar }}
    />
  </Box>
  )
}

export default Contact