import TextField from "@mui/material/TextField";

const TextFieldComponent = ({ label, name, register, errors, validation }) => (
  <TextField
    error={Boolean(errors[name])}
    helperText={Boolean(errors[name]) ? `This field is required & min 3 characters` : null}
    {...register(name, validation)}
    label={label}
    variant="filled"
    sx={{ flex: 1 }}
  />
);

export default TextFieldComponent;
