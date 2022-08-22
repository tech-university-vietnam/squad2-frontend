import { Alert, Collapse } from "@mui/material";

const ErrorField = ({ attribute }) => {
  return (
    <Collapse in={attribute !== undefined}>
      <p style={{ color: "#dc3545" }}>{attribute?.message}</p>
    </Collapse>
  );
};

export default ErrorField;
