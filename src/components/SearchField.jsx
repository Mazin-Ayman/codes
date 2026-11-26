import { Autocomplete, TextField } from "@mui/material";

/**
 * Shared search combobox. `value` is the raw input text: results are derived
 * from it by the caller, so lookups update while typing and never crash on
 * partial or unknown values. Colors come from the active MUI theme.
 */
const SearchField = ({ id, label, options, value, onChange }) => (
  <Autocomplete
    id={id}
    options={options}
    inputValue={value}
    clearOnBlur={false}
    onInputChange={(_, nextValue) => onChange(nextValue ?? "")}
    renderInput={(params) => (
      <TextField {...params} label={label} onDoubleClick={() => onChange("")} />
    )}
  />
);

export default SearchField;
