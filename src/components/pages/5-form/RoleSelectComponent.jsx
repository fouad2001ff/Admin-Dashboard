import TextField from "@mui/material/TextField";
import { MenuItem } from '@mui/material';

function RoleSelectComponent() {
    const roles = [
        {
          value: "Admin",
          label: "Admin",
        },
        {
          value: "Manger",
          label: "Manger",
        },
        {
          value: "User",
          label: "User",
        },
      ];
      
  return (
    <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
  )
}

export default RoleSelectComponent