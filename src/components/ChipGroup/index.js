import { Chip, Stack } from "@mui/material";
import React from "react";

const ChipGroup = ({ value, setValue, labels, ...rest }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        maxWidth: "100%",
        overflow: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      my={2}
    >
      {labels.map((label, idx) => (
        <Chip
          key={label}
          label={label}
          variant={idx === value ? "filled" : "outlined"}
          onClick={() => {
            // console.log(value.toString(), typeof idx);
            if (value === idx) {
              return setValue(undefined);
            }
            return setValue(idx);
          }}
          color="primary"
          sx={{ color: idx === value ? "white" : "primary" }}
        />
      ))}
    </Stack>
  );
};

export default ChipGroup;
