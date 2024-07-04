import Paper from "@mui/material/Paper";
import ConversionForm from "./ConversionForm";
import { Box, Stack } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { useState } from "react";
import ChartsForm from "./ChartsForm";

function Home() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "50vh",
      }}
    >
      <Paper
        elevation={3}
        square={false}
        sx={{
          padding: 4,
          display: "flex",
          justifyContent: "center",
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          top: "100px",
        }}
      >
        <Stack
          spacing={3}
          alignItems="flex-start"
          direction="column"
          sx={{
            width: "100%",
          }}
        >
          <TabContext value={value}>
            <TabList onChange={handleChange}>
              <Tab label="Convert" value="1" />
              <Tab label="Charts" value="2" />
            </TabList>
            <TabPanel value="1">
              <ConversionForm />
            </TabPanel>
            <TabPanel value="2">
              <ChartsForm />
            </TabPanel>
          </TabContext>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Home;
