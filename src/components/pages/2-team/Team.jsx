import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { rows } from "./data";
import Header from "../../Header";

const AccessCell = ({ access }) => {
  const theme = useTheme();

  const getBackgroundColor = (access) => {
    switch (access) {
      case "Admin":
        return theme.palette.primary.dark;
      case "Manager":
        return theme.palette.secondary.dark;
      default:
        return "#3da58a";
    }
  };

  const getIcon = (access) => {
    switch (access) {
      case "Admin":
        return (
          <AdminPanelSettingsOutlined sx={{ color: "#fff" }} fontSize="small" />
        );
      case "Manager":
        return <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />;
      default:
        return <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />;
    }
  };

  return (
    <Box
      sx={{
        p: "5px 1px",
        width: "80px",
        borderRadius: "3px",
        marginX: "auto",
        marginY: 1,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: getBackgroundColor(access),
      }}
    >
      {getIcon(access)}
      <Typography sx={{ fontSize: "13px", color: "#fff" }}>{access}</Typography>
    </Box>
  );
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 0.9,

    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",

    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    flex: 0.6,
    
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    flex: 0.7,

  },

  {
    field: "access",
    headerName: "Access",
    editable: true,
    align: "center",
    headerAlign: "center",
    flex: 1,
    renderCell: ({ row: { access } }) => <AccessCell access={access} />,
  },
];

export default function Team() {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <Header title={"TEAM"} subTitle={"Managing The Team Members"} />
      <DataGrid 
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
