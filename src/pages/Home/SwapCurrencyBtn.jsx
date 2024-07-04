/* eslint-disable react/prop-types */
import { Box, IconButton } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function SwapCurrencyBtn({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      component="button"
      display="flex"
      alignItems="center"
      sx={{
        border: ".5px solid grey",
        borderRadius: "5000px",
        p: 2,
        cursor: "pointer",
        backgroundColor: "transparent",
        ":hover": {
          backgroundColor: "#eeee",
        },
      }}
    >
      <SwapHorizIcon color="primary" />
    </IconButton>
  );
}

export default SwapCurrencyBtn;
