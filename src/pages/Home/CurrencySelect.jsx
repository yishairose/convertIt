/* eslint-disable react/prop-types */

import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { currencyList } from "../../services/currencies";
import { useEffect, useState } from "react";

function CurrencySelect({ name, currency, setCurrency }) {
  const [selectedOption, setSelectedOption] = useState(() =>
    currencyList.find((cur) => cur.key === currency)
  );
  useEffect(() => {
    setSelectedOption(currencyList.find((cur) => cur.key === currency));
  }, [currency]);
  const currencyObj = currencyList.find((cur) => cur.key === currency);
  return (
    <Autocomplete
      onChange={(event, newValue) => {
        setSelectedOption(newValue);
        setCurrency(newValue.key);
      }}
      value={currencyObj}
      id="country-select"
      options={currencyList}
      sx={{ width: 300 }}
      getOptionLabel={(option) => {
        return option.name;
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.key
              .slice(0, 2)
              .toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.key
              .slice(0, 2)
              .toLowerCase()}.png`}
            alt=""
          />
          {option.name} ({option.key})
        </Box>
      )}
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            label="Convert from"
            inputProps={{
              ...params.inputProps,
            }}
            InputProps={{
              ...params.InputProps,

              startAdornment: (
                <InputAdornment position="start">
                  <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${selectedOption?.key
                      .slice(0, 2)
                      .toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${selectedOption?.key
                      .slice(0, 2)
                      .toLowerCase()}.png`}
                    alt=""
                  />
                </InputAdornment>
              ),
            }}
          />
          {selectedOption && (
            <input type="hidden" name={name} value={currency} />
          )}
        </>
      )}
    />
  );
}

export default CurrencySelect;
