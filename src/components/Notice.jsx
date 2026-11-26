import { Alert, Snackbar } from "@mui/material";

const Notice = ({ message, severity = "error", onClose }) => (
  <Snackbar
    open={Boolean(message)}
    autoHideDuration={4000}
    onClose={onClose}
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  >
    <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
);

export default Notice;
