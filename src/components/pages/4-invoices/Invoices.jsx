import { Box } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import Header from "../../Header";
import { rows, columns } from "./invoicss";

function Invoices() {
  return (
    <Box sx={{ height: 650, width: "100%" }}>
      <Header
        title={"CONTACTS"}
        subTitle={"List of Contacts for Future Reference"}
      />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        checkboxSelection
      />
    </Box>
  );
}

export default Invoices;
