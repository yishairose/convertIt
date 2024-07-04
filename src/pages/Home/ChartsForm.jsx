import { Alert, Button, Stack, Typography } from "@mui/material";
import CurrencySelect from "./CurrencySelect";
import SwapCurrencyBtn from "./SwapCurrencyBtn";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function ChartsForm() {
  return (
    <Stack
      spacing={4}
      component="form"
      justifyContent="center"
      sx={{
        width: "100%",
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Stack direction="row" spacing={3}>
        <CurrencySelect />
        <SwapCurrencyBtn />
        <CurrencySelect />
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Alert
          severity="info"
          sx={{
            width: 400,
          }}
        >
          <Typography variant="caption">
            Our rates are generously provide using the xxxxx currency exchange
            api. For more info please visit www.xxxx.com.
          </Typography>
        </Alert>
        <Button
          variant="contained"
          size="large"
          startIcon={<CurrencyExchangeIcon />}
          type="submit"
        >
          Convert
        </Button>
      </Stack>
    </Stack>
  );
}

export default ChartsForm;
