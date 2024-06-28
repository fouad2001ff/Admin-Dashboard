import { Snackbar, Alert } from "@mui/material";
function SnackbarComponent({ open, handleClose }) {
  return (
    <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
  >
    <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
      Account created successfully
    </Alert>
  </Snackbar>
  )
}

export default SnackbarComponent