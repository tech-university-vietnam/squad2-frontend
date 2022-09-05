import { Box, Typography } from "@mui/material";

const IconWithLabel = ({ icon, label, fontSize,...rest }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
      {icon}
      <Typography fontSize={fontSize}>{label}</Typography>
    </Box>
  );
};
export default IconWithLabel;
