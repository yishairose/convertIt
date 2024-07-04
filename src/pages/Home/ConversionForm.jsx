import CurrencySelect from "./CurrencySelect";
import ConversionAmount from "./ConversionAmount";
import SwapCurrencyBtn from "./SwapCurrencyBtn";
import { useEffect, useState } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useLoaderData, useNavigation, useRouteError } from "react-router-dom";

import { Form } from "react-router-dom";
import { currencyList } from "../../services/currencies";
import { host } from "../../services/api";

function ConversionForm() {
  const conversionData = useLoaderData();
  const navigation = useNavigation();

  const [amount, setAmount] = useState(() =>
    conversionData ? conversionData.conversionAmount : null
  );
  const [from, setFrom] = useState(() =>
    conversionData ? conversionData.fromCurrency : null
  );
  const [to, setTo] = useState(() =>
    conversionData ? conversionData.toCurrency : null
  );

  function handleSwapCurrencies() {
    const tempFrom = from;
    setFrom(to);
    setTo(tempFrom);
  }
  return (
    <Form>
      <Stack spacing={4}>
        <Stack direction="row" spacing={3}>
          <ConversionAmount
            amount={amount}
            setAmount={setAmount}
            currency={from}
          />
          <CurrencySelect
            name={"fromCurrency"}
            currency={from}
            setCurrency={setFrom}
          />
          <SwapCurrencyBtn onClick={handleSwapCurrencies} />
          <CurrencySelect
            name={"toCurrency"}
            currency={to}
            setCurrency={setTo}
          />
        </Stack>
        {conversionData && (
          <Stack spacing={1}>
            <Typography variant="h6">
              {`${conversionData.data.amount}
              ${
                currencyList.find((cur) => cur.key === conversionData.data.base)
                  .name
              }
              =`}
            </Typography>
            <Typography variant="h5">
              {`${conversionData.data.rates[conversionData.toCurrency]}
              ${
                currencyList.find(
                  (cur) => cur.key === conversionData.toCurrency
                ).name
              }`}
            </Typography>
            <Typography
              variant="caption"
              paragraph
              sx={{
                color: "#eeeee",
                fontWeight: 100,
              }}
            >
              1 {conversionData.fromCurrency} ={" "}
              {conversionData.data.rates[conversionData.toCurrency] /
                conversionData.conversionAmount}{" "}
              {conversionData.toCurrency}
            </Typography>
          </Stack>
        )}
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
          {navigation.state === "loading" ? (
            <LoadingButton
              loading
              loadingIndicator="Loading…"
              variant="contained"
              size="large"
            >
              Convert
            </LoadingButton>
          ) : (
            <Button
              variant="contained"
              size="large"
              startIcon={<CurrencyExchangeIcon />}
              type="submit"
            >
              Convert
            </Button>
          )}
        </Stack>
      </Stack>
    </Form>
  );
}

export default ConversionForm;
export async function loader({ request }) {
  const url = new URL(request.url);
  const conversionAmount = url.searchParams.get("conversionAmount");
  const fromCurrency = url.searchParams.get("fromCurrency");
  const toCurrency = url.searchParams.get("toCurrency");

  if (url.searchParams.size === 0) return null;
  if (url.searchParams.size > 0 && url.searchParams.size < 3) {
    alert("Please fill in all fields");
    return null;
  }

  if (url.searchParams.size > 0 && fromCurrency === toCurrency) {
    alert("Please select target currency which is different from origin");
    return null;
  }

  const res = await fetch(
    `https://${host}/latest?amount=${conversionAmount}&from=${fromCurrency}&to=${toCurrency}`
  );
  const data = await res.json();

  return {
    conversionAmount,
    fromCurrency,
    toCurrency,
    data,
  };
}
