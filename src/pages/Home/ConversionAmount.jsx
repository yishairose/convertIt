/* eslint-disable react/prop-types */
import FormControl from "@mui/material/FormControl";
import { InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Currencies } from "currencies-map";
//currencies symbol map from https://github.com/carlosvin/currencies-map

function ConversionAmount({ amount, setAmount, currency }) {
  return (
    <FormControl>
      <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        startAdornment={
          <InputAdornment position="start">
            {Currencies.symbols.get(currency)}
          </InputAdornment>
        }
        label="Amount"
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        name="conversionAmount"
      />
    </FormControl>
  );
}

export default ConversionAmount;
