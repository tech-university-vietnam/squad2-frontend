import { InputAdornment, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeColor } from "../../config/constants";
import FilterListIcon from "@mui/icons-material/FilterList";
import React from "react";
import { debounce } from "lodash";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderRadius: 12,
    },
  },
});
const SearchBar = () => {
  const [text, setText] = React.useState(undefined);

  const changeText = debounce((text) => {
    setText(text);
  }, 500);

  return (
    <CssTextField
      fullWidth
      placeholder="Search by Name, Address,..."
      value={text}
      type="text"
      onChange={(e) => {
        changeText(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ color: ThemeColor.primary }}>
            <FilterListIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
