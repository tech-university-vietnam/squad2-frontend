import { Box, Typography } from "@mui/material";

const IconWithLabel = ({ icon, label,...rest }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
      {icon}
      <Typography>{label}</Typography>
    </Box>
  );
};
export default IconWithLabel;
